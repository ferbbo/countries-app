import React, { useContext } from "react";
import { ThemeContext } from "../themes/themes-context";
import "./loadingScroll.scss";
function Loading() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="lds-ellipsis">
      <div style={{ backgroundColor: theme.loadingBackground }}></div>
      <div style={{ backgroundColor: theme.loadingBackground }}></div>
      <div style={{ backgroundColor: theme.loadingBackground }}></div>
      <div style={{ backgroundColor: theme.loadingBackground }}></div>
    </div>
  );
} 
export default Loading; 