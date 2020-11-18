import React from "react";
import { Link } from "react-router-dom";
import "./country.scss";

import Country from "./country";

const Countries = (props) => (
  <div className="container-country">
    {props.countries.map((country) => (
      <Link
        exact="true"
        to={{
          pathname: "/country",
          search: `?code=${country.alpha3Code}`,
        }}
        className="country"
        key={country.alpha2Code}
      >
        <Country info={country} />
      </Link>
    ))}
  </div>
);
export default Countries;
