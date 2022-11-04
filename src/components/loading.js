import React, { useContext } from "react";
import ThemeContext from "../themes/themes-context";
import "./loading.scss";
function Loading() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="container-loading">
      <div className="lds-facebook">
        <div style={{ backgroundColor: theme.loadingBackground }}></div>
        <div style={{ backgroundColor: theme.loadingBackground }}></div>
        <div style={{ backgroundColor: theme.loadingBackground }}></div>
      </div>
    </div>
  );
}
export default Loading;
