import React from "react";
import "./loading.scss";
function Loading() {
  return (
    <div className="container-loading">
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
export default Loading;
