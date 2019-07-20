import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/Login/Login";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <Login />
      <Route exact path='/login' component={Login} />
    </div>
  );
}

export default App;
