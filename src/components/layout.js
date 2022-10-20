import React, { Fragment, useContext  } from "react";
import Header from "../components/header";
import { ThemeContext } from "../themes/themes-context";

function Layout(props) {
  const { theme } = useContext(ThemeContext);
  return (
    <Fragment>
      <Header />
      <div
        style={{ backgroundColor: theme.background }}
        className="full-section">
        {props.children}
      </div>
    </Fragment>
  );
}
export default Layout;
