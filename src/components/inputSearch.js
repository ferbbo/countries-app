import React, { useState } from "react";
import "./inputSearch.scss";

function InputSearch(props) {
  const [query, setQuery] = useState(0);
  const [error, setError] = useState(false);
  const $inputSearch = document.getElementById("input-search");

  const HandleChange = (e) => {
    setQuery(e.target.value);
    if(query.length === 0) {
      props.onEnable(false)
    }
  };
  
  const GetCountry = (e) => {
    if (e.charCode === 13) {
      if (typeof query === 'string'  && query.length !== 0) {
        props.getCountry(query, true);
        if (error) {
          setError(false);
          $inputSearch.classList.remove("error");
        }
      } else {
        setError(true);
        $inputSearch.classList.add("error");
      }
    }
  };
  
  console.log(typeof query);
  return (
    <div className="search">
      <div className="input-group container_search">
        <div className="input-group-prepend py-2 px-3">
          <i className="fas fa-search icon-search"></i>
        </div>
        <input
          type="search"
          name="search"
          id="input-search"
          className="form-control"
          onChange={HandleChange}
          onKeyPress={GetCountry}
          aria-describedby="searchHelp"
          aria-label="input-search"
          placeholder="Search for a country..."
        />
      </div>
      {error && <span className="search__error">Enter a Country, please!</span>}
    </div>
  );
}

export default InputSearch;
