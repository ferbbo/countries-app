import React from "react";
import "./inputSearch.scss";
function InputSearch(props) {
  return (
    <div className="input-group container_search">
      <div className="input-group-prepend py-2 px-3">
        <i className="fas fa-search icon-search"></i>
      </div>
      <input
        type="search"
        name="search"
        id="input-search"
        className="form-control"
        aria-describedby="searchHelp"
        aria-label="input-search"
        placeholder="Search for a country..."
      />
    </div>
  );
}

export default InputSearch;
