// import { themes, ThemeContext } from "../themes/themes-context";
import React, { Suspense, lazy } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "../themes/themes-context";
import Loading from './loading'
import "../global.scss";

// components
import Layout from "../components/layout";
const Home = lazy(() => import("../pages/home"));
const ContainerCountryDetails = lazy(() => import("../pages/ContainerCountryDetails"));

function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <Suspense fallback={<Loading/>}>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/country"
                component={ContainerCountryDetails}
                />
            </Switch>
          </Layout>
        </Suspense>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;
