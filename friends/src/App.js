import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login/Login";
// import FriendsList from "./components/Friends/FriendsList";
// import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1>Friends!</h1>
        <div className='firstLogin'>
          <ul>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </ul>
        </div>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/login' component={Login} />
        {/* <PrivateRoute path='/friends' component={FriendsList} /> */}
      </div>
    );
  }
}

export default App;
