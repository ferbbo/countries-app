import React from "react";
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import Home from "../pages/home";
import ContainerCountryDetails from "../pages/ContainerCountryDetails";
import Layout from "../components/layout";

function App(props) {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/country" component={ContainerCountryDetails} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
