import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login/Login";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <PrivateRoute exact path='/' component={Dashboard} />
        <Route exact path='/login' component={Login} />
      </div>
    );
  }
}

export default App;
