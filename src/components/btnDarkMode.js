import React , {useContext}from "react";
import { ThemeContext } from "../themes/themes-context";
import "./btnDarkMode.scss";
function BtnDarkMode() {
  const themes = useContext(ThemeContext)
  return (
    <ThemeContext.Consumer>
      {({ ToogleTheme }) => (
        <button
          style={{
            color: themes.theme.colortext,
            borderColor: themes.theme.colortext, 
          }}
          onClick={ToogleTheme}
          className="btnDarkMode"
        >
          <i className="far fa-moon"></i> Dark Mode
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default BtnDarkMode;
