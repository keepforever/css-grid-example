import React, { Component } from "react";
import Layout from "./comps/Layout/Layout";
import { Route, Switch } from "react-router-dom";
// Routes
import Home from "./comps/Home/Home";
import Alpha from "./comps/Alpha/Alpha";
import Beta from "./comps/Beta/Beta";
import Theta from "./comps/Theta/Theta";

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/alpha" component={Alpha} />
          <Route path="/beta" component={Beta} />
          <Route path="/theta" component={Theta} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
