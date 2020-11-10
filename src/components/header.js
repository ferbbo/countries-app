import React, { Fragment } from "react";
import BtnDarkMode from "../components/btnDarkMode";
import '../components/header.scss'
function Header(props) {
  return (
    <Fragment>
      <header className="header">
        <h3>Where in the world?</h3>
        <BtnDarkMode />
      </header>
    </Fragment>
  );
}
export default Header;
