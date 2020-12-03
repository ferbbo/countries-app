import React from "react";
import { Link } from "react-router-dom";
import "./country.scss";

import Country from "./country";

const Countries = (props) => (
  <div className="container-country">
    {props.countries.map((country) => (
      <Link
        to={{
          pathname: "/country",
          search: `?code=${country.alpha3Code}`,
        }}
        className="country"
        key={country.alpha2Code}
        style={{
          backgroundColor: props.theme.fontBackground,
          color: props.theme.colortext,
        }}
      >
        <Country theme={props.theme} info={country} />
      </Link>
    ))}
  </div>
);
export default Countries;
