import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/Login/Login";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Login />
        <Route exact path='/login' component={Login} />
      </header>
    </div>
  );
}

export default App;
