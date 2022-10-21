import React, { Fragment, useState, useEffect } from "react";
import "./Search.scss";
import Country from "./country";

import ApiRepository from "../repositories/ApiRepository";

const InputSearch = (props) =>  {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);
  const [country, setCountry] = useState([]);

  const $inputSearch = document.getElementById("input-search");

  const HandleChange = ({ target: { value } }) => {
    if (value) {
      setError(false);
      $inputSearch.classList.remove("error");
    } else if (!value) {
      setError(true);
      $inputSearch.classList.add("error");
    }
    setQuery(value);
  };

  const GetCountry = async (e) => {
    if (e.key === 'Enter') {
      if (typeof query === "string" && query.length !== 0) {
        try {
          const { data:  [ country ] } =  await ApiRepository.getCountryByName(query);
          setCountry(country);
        } catch (e) {
          if (e.status === 404) {
            // eslint-disable-next-line no-undef
            $("#alert-search").modal({
              show: true,
            });
          }
          console.error(e);
        }
      }
    }
  }

  useEffect(() => {
    if (query.length === 0) {
      setCountry([]);
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
      { Object.keys(country).length  ?
        <div
        id="search-country" 
        className="search-country">
          <div className="country">
            <Country info={country} />
          </div>
        </div>
        : null
      }

    </Fragment>
  );
}
export default InputSearch;
