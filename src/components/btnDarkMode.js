import React , {useContext}from "react";
import ThemeContext  from "../themes/themes-context";
import "./btnDarkMode.scss";

function BtnDarkMode() {
  const { theme, ToogleTheme } = useContext(ThemeContext)
  return (
    <button
      style={{
        color: theme.colortext,
        borderColor: theme.colortext, 
      }}
      onClick={ToogleTheme}
      className="btnDarkMode"
    >
      <i className="far fa-moon"></i> Dark Mode
    </button>
  );
}

export default BtnDarkMode;
