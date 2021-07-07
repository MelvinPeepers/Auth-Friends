import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFriend, addNew } from "../../actions";

class FriendsList extends Component {
  state = {
    name: "",
    age: "",
    email: ""
  };

  componentDidMount() {
    //call my action
    this.props.fetchFriend();
  }

  changeHandle = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  addNew = event => {
    event.preventDefault();

    const newText = this.state;
    // calling the action creator
    this.props.addNew(newText);
    // resetting the form after it submits
    this.setState({
      name: "",
      age: "",
      email: ""
    });
  };

  render() {
    // from reducer
    if (this.props.fetchingFriends) {
      return <h2>Retrieving Friends List, please wait...</h2>;
    }

    const { name, age, email } = this.state;
    const { friends } = this.props;
    return (
      <div className='App'>
        <h1>My Friends</h1>
        {friends.map((friend, index) => {
          return (
            <p key={index}>
              Name:{friend.name} <br /> Age:{friend.age} <br /> Email:
              {friend.email}
            </p>
          );
        })}
        {/* {friends.map(friend, index) => (
          <p key={index}>
            Name:{friend.name} <br /> Age:{friend.age} <br /> Email:
            {friend.email}
          </p>
        ))} */}

        {/* // add friends */}
        <form>
          <input
            type='text'
            name='name'
            value={name}
            onChange={this.changeHandle}
            placeholder="Friend's Name"
          />
          <input
            type='text'
            name='age'
            value={age}
            onChange={this.changeHandle}
            placeholder="Friend's Age"
          />
          <input
            type='text'
            name='email'
            value={email}
            onChange={this.changeHandle}
            placeholder="Friend's Email"
          />
          <button className='add-btn' onClick={this.addNew}>
            Add to List
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    fetchingFriends: state.fetchingFriends
  };
};

export default connect(
  mapStateToProps,
  { fetchFriend, addNew }
)(FriendsList);
