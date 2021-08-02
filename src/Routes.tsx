import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import NewVideo from "./pages/NewVideo";
import NewCategory from "./pages/NewCategory";

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/new-video" component={NewVideo} />
    <Route path="/new-category" component={NewCategory} />
  </Switch>
);

export default Routes;
