import React from "react";

class Friend extends React.Component {
  render() {
    return (
      <div className='TitleChar'>
        <h2>Friends</h2>
        <ul>
          {this.props.friends.map(friend => {
            return (
              <Friend
                name={friend.name}
                age={friend.age}
                email={friend.email}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Friend.defaultProps = {
  friends: []
};

export default Friend;
