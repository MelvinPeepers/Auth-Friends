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

    return (
      <div className='App'>
        <h2>My Friends</h2>
        {/* // from reducer */}
        {this.props.friends.map(friend => (
          <p>
            Name: {friend.name} <br /> Age: {friend.age} <br />
            {friend.email}
          </p>
        ))}

        {/* // add friends */}
        <form>
          <input
            type='text'
            name='name'
            value={this.state.name}
            placeholder="Friend's Name"
          />
          <input
            type='text'
            name='age'
            value={this.state.age}
            placeholder="Friend's Age"
          />
          <input
            type='text'
            name='email'
            value={this.state.email}
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
