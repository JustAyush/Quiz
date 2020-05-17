import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./components/App";
import Quiz from "./containers/Quiz";

const RouterRoute = () => {
  const baseUrl = process.env.PUBLIC_URL;
  return (
    <Switch>
      <Route exact path={baseUrl + "/"} component={App} />
      <Route exact path={baseUrl + "/quiz"} component={Quiz} />
    </Switch>
  );
};

export default RouterRoute;
