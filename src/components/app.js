import React, { Suspense, lazy, useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { themes, ThemeContext } from "../themes/themes-context";
import "../global.scss";
import Loading from './loading'
const Home = lazy(() => import("../pages/home"));
const ContainerCountryDetails = lazy(() =>
  import("../pages/ContainerCountryDetails")
);
import Layout from "../components/layout";

function App() {
  const [theme, setTheme] = useState(themes.light);

  const ToogleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading/>}>
        
        <ThemeContext.Provider
          value={{
            theme: theme,
            ToogleTheme: ToogleTheme,
          }}
        >
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
        </ThemeContext.Provider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
