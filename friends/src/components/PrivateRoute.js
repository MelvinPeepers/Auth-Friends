import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function(props) {
  const { component: Component, ...rest } = props;

  // rest // everything except "component"
  return (
    <Route
      {...rest}
      render={() => {
        // get a value saved in our browser's local storage
        const token = localStorage.getItem("token");

        return token ? (
          <component /> // original component
        ) : (
          <Redirect to='/login' />
        ); // redirect the user
      }}
    />
  );
}
