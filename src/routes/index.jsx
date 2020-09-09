import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../views/Home";

export default function Routes() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </React.Fragment>
  );
}
