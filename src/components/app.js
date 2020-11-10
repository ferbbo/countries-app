import React from "react";
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import Home from "../pages/home";
import Layout from "../components/layout";
function App(props) {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact to="/" component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
