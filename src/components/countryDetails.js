import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./countryDetails.scss";

function CountryDetails(props) {
  let history = useHistory();
    useEffect(()=>{
        props.onFetch()},[props.codeCountry])
  return (
    <div className="country__container">
      <div className="w-100">
        <button className="btn-goBack" onClick={history.goBack}>
          <i className="fas fa-arrow-left"></i>Back
        </button>
      </div>

      <div className="country__details">
        <figure className="flag__container">
          <img
            className="img-fluid flag"
            src={props.country.flag}
            alt={props.country.name}
          />
        </figure>
        <div className="country__description">
          <h3 className="country__description-name">{props.country.name}</h3>
          <div className="row row__container">
            <div className="col-6 col__container">
              <h6 className="country__content">
                Native Name:
                <p className="country__results">{props.country.nativeName}</p>
              </h6>
              <h6 className="country__content">
                Population:
                <p className="country__results">{props.country.population}</p>
              </h6>
              <h6 className="country__content">
                Region:
                <p className="country__results">{props.country.region}</p>
              </h6>
              <h6 className="country__content">
                Sub Region:
                <p className="country__results">{props.country.subregion}</p>
              </h6>
              <h6 className="country__content">
                Capital:
                <p className="country__results">{props.country.capital}</p>
              </h6>
            </div>

            <div className="col-6 col__container">
              <h6 className="country__content">
                Top Level Domain:
                <p className="country__results">{props.country.topLevelDomain}</p>
              </h6>
              <h6 className="country__content">
                Currencies:
                <p className="country__results">{props.country.currencies[0].name}</p>
              </h6>
              <h6 className="country__content">
                Languages:
                <p className="country__results">{props.country.languages[0].name}</p>
              </h6>
            </div>
          </div>
          <div className="country__borders-container">
            <h6>Border Countries:</h6>
            <div className="country__borders-countries">
              {props.borders.length !== 0
                ? props.borders.map((border) => (
                    <Link
                      className="border-country"
                      to={{
                        pathname: "/country",
                        search: `?code=${border.alpha2Code}`,
                      }}
                      key={border.alpha2Code}
                    >
                      {border.name}
                    </Link>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
