import React, { Component } from "react";
import axios from "axios";
import CountryDetails from "../components/countryDetails";
class ContainerCountryDetails extends Component {
  state = {
    country: [],
    borderCountries: [],
  };

  UseQuery = () => new URLSearchParams(this.props.location.search);

  componentDidMount() {
    this.FecthData();
  }

  FecthData = async () => {
    try {
      let query = this.UseQuery();
      const response = await fetch(
        `https://restcountries.eu/rest/v2/alpha/${query.get("code")}`
      );
      const country = await response.json();

      if (country.borders.length !== 0) {
        const StringBorder = country.borders.reduce((a, b) => a.concat(";", b));
        const { data: borders } = await axios.get(
          `https://restcountries.eu/rest/v2/alpha?codes=${StringBorder}`
        );
        this.setState({
          country: country,
          borderCountries: borders,
        });
      } else {
        this.setState({
          country: country,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const country = this.state.country;
    let code = this.UseQuery();
    const borderCountries = this.state.borderCountries;
    if (country.length === 0) {
      return null;
    }
    return (
      <CountryDetails
        country={country}
        onFetch={this.FecthData}
        codeCountry={code.get('code')}
        borders={borderCountries}
      />
    );
  }
}
export default ContainerCountryDetails;
