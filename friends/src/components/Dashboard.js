import React from "react";
import { connect } from "react-redux";
import { fetchFriend } from "../actions";

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchFriend();
  }

  render() {
    return (
      <div>
        <h1>My Friend's List</h1>
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
