import React from "react";
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import Home from "../pages/home";
import CountryDetails from '../pages/countryDetails'
import Layout from "../components/layout";

function App(props) {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component= {Home} />
          <Route exact path="/country" component= {CountryDetails}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
