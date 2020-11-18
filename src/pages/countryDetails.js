import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./countryDetails.scss";
class CountryDetails extends Component {
  state = {
    country: [],
    name: "Colombia",
    borderCountries: [],
  };
  componentDidMount() {
    this.FecthData();
  }
  FecthData = async () => {
    try {
      const {
        data: { 0: country },
      } = await axios.get(`https://restcountries.eu/rest/v2/name/Colombia`);
      this.setState({ country: country });

      const StringBorder = country.borders.reduce((a, b) => a.concat(";", b));
      console.log(StringBorder);

      const { data: borders } = await axios.get(
        `https://restcountries.eu/rest/v2/alpha?codes=${StringBorder}`
      );
      this.setState({
        borderCountries: borders,
      });
    } catch (error) {
      //   alert(error);
      console.error(error);
    }
  };

  render() {
    const country = this.state.country;
    const borderCountries = this.state.borderCountries;
    console.log(country);
    console.log(borderCountries);
    if (country.length === 0 || borderCountries.length === 0) {
      return null;
    }
    return (
      <div className="country__container">
        <div className="country__details">
          <figure className="flag__container">
            <img
              className="img-fluid flag"
              src={country.flag}
              alt={country.name}
            />
          </figure>
          <div className="country__description">
    <h3 className="country__description-name">{country.name}</h3>
            <div className="row">
              <div className="col-6">
                <h6 className="country__content">
                  Native Name:
                  <p className="country__results">{country.nativeName}</p>
                </h6>
                <h6 className="country__content">
                  Population:
                  <p className="country__results">{country.population}</p>
                </h6>
                <h6 className="country__content">
                  Region:
                  <p className="country__results">{country.region}</p>
                </h6>
                <h6 className="country__content">
                  Sub Region:
                  <p className="country__results">{country.subregion}</p>
                </h6>
                <h6 className="country__content">
                  Capital:
                  <p className="country__results">{country.capital}</p>
                </h6>
              </div>

              <div className="col-6">
                <h6 className="country__content">
                  Top Level Domain:
                  <p className="country__results">{country.topLevelDomain}</p>
                </h6>
                <h6 className="country__content">
                  Currencies:
                  <p className="country__results">{country.currencies[0].name}</p>
                </h6>
                <h6 className="country__content">
                  Languages:
                  <p className="country__results">{country.languages[0].name}</p>
                </h6>
              </div>
            </div>
            <div className="country__borders-container">
              <h6>Border Countries:</h6>
              <div className="country__borders-countries">
                {borderCountries.map((border) => (
                  <Link
                    className="border-country"
                    exact="true"
                    to="/country"
                    key={border.alpha2Code}
                  >
                    {border.nativeName}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CountryDetails;
