import React, { Fragment, useState, useEffect } from "react";
import "./Search.scss";
import Country from "./country";
import axios from "axios";

function InputSearch(props) {
  const [query, setQuery] = useState(0);
  const [error, setError] = useState(false);
  const [country, setCountry] = useState([]);

  const $inputSearch = document.getElementById("input-search");
  const $containerSearchCountry = document.getElementById("search-country");

  const HandleChange = (e) => {
    setQuery(e.target.value);
  };

  const GetCountry = (e) => {
    if (e.charCode === 13) {
      if (typeof query === "string" && query.length !== 0) {
        FetchCountry(query, true);
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

  const HandleResultSearch = (enable) => {
    if (enable) {
      $containerSearchCountry.style.display = "block";
    } else {
      $containerSearchCountry.style.display = "none";
    }
  };

  //fetch country trounght input search
  const FetchCountry = async (query, enable) => {
    try {
      const {
        data: { 0: data },
      } = await axios.get(`https://restcountries.eu/rest/v2/name/${query}`);
      setCountry(data);
      HandleResultSearch(enable);
    } catch (error) {
      $("#alert-search").modal({
        show: true,
      });
    }
  };
  useEffect(() => {
    if (query.length === 0) {
      HandleResultSearch(false);
    }
  }, [query]);

  return (
    <Fragment>
      <div
        className="search"
      >
        <div className="input-group container_search">
          <div 
          style={{
            backgroundColor: props.theme.fontBackground,
          }}
          className="input-group-prepend py-2 px-3">
            <i
              style={{ color: props.theme.colortext }}
              className="fas fa-search icon-search"
            ></i>
          </div>
          <input
          style={{
            backgroundColor: props.theme.fontBackground,
            color: props.theme.colortext,
          }}
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
        {error && (
          <span className="search__error">Enter a Country, please!</span>
        )}
      </div>
      <div id="search-country" className="search-country">
        <div className="country">
          {country.length !== 0 ? <Country info={country} /> : null}
        </div>
      </div>
    </Fragment>
  );
}

export default InputSearch;
