import React, { useState } from "react";
import "./inputSearch.scss";

function InputSearch(props) {
  const [query, setQuery] = useState("");

  const HandleChange = (e) => {
    setQuery(e.target.value);
  };

  const GetCountry = (e) =>{
    if(e.charCode === 13){
      props.getCountry(query)
      console.log('enter')
    }

  }
  console.log(query);
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
        onChange={HandleChange}
        onKeyPress = {GetCountry}
        aria-describedby="searchHelp"
        aria-label="input-search"
        placeholder="Search for a country..."
      />
    </div>
  );
}

export default InputSearch;
