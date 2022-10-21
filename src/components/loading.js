import React, { useContext } from "react";
import "./loading.scss";
import { ThemeContext } from "../themes/themes-context";
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
