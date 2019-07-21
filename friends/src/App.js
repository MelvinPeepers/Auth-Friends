import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
// import FriendsList from "./components/Friends/FriendsList";
// import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1>Friends!</h1>
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
        <Route path='/login' component={Login} />
        {/* <PrivateRoute path='/friends' component={FriendsList} /> */}
      </div>
    );
  }
}

export default App;
