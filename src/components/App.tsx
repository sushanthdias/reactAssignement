import React, { Fragment } from "react";
import {
  Route,
  withRouter,
  RouteComponentProps,
  Switch,
} from "react-router-dom";
import { observer } from "mobx-react-lite";
import HomePage from "../layout/HomePage";
import Posts from "../layout/Posts";
import Profile from "../layout/Profile";
import Gallery from "../layout/Gallery";
import ToDo from "../layout/ToDo";

const App: React.FC<RouteComponentProps> = ({ location }) => {
  return (
    <Fragment>
      <Route exact path="/" component={HomePage} />
      <Switch>
        <Route path="/profile/:id" component={Profile} />
        <Route path="/posts" component={Posts} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/todo" component={ToDo} />
      </Switch>
    </Fragment>
  );
};

export default withRouter(observer(App));
