import React from "react";
import { connect } from "react-redux";
import FriendsList from "../components/Friends/FriendsList";
import { fetchFriend } from "../actions";

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchFriend();
  }

  render() {
    return (
      <div>
        <FriendsList />
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchFriend
};
export default connect(
  null,
  mapDispatchToProps
)(Dashboard);
