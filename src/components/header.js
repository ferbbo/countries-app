import React, { Fragment, useContext } from "react";
import BtnDarkMode from "../components/btnDarkMode";
import "../components/header.scss";
import { ThemeContext } from "../themes/themes-context";
import logo from "../images/logoFlags.png";

function Header(props) {
  const theme = useContext(ThemeContext);
  return (
    <Fragment>
      <header
        id="header"
        className="header"
        style={{ backgroundColor: theme.theme.fontBackground }}
      >
        <div className="d-block d-md-flex align-items-center">
          <img src={logo} alt="logo-web" className="logo" />
          <h5 style={{ color: theme.theme.colortext }} id="title" className="title">
            Where in the world?
          </h5>
        </div>
        <BtnDarkMode />
      </header>
    </Fragment>
  );
}
export default Header;
