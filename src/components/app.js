import React, { Suspense, lazy } from "react";
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
const Home = lazy(()=> import("../pages/home"))
const ContainerCountryDetails = lazy(()=> import("../pages/ContainerCountryDetails"))
import Layout from "../components/layout";

function App(props) {
  return (
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div> }>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/country" component={ContainerCountryDetails} />
        </Switch>
      </Layout>

    </Suspense>
    </BrowserRouter>
  );
}

export default App;
