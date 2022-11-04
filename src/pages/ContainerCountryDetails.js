import React, { Component } from "react";
import CountryDetails from "../components/countryDetails";
import ThemeContext from '../themes/themes-context'
import ApiRepository from "../repositories/ApiRepository";
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
      const { data: country} = await ApiRepository.getCountryByCode(query.get("code"));
      if (country.borders && country.borders.length > 0) {
        const StringBorders = country.borders.reduce((a, b) => a.concat(";", b));
        const { data: borders } = await ApiRepository.getBordersCountryByCode(StringBorders);
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
    let { theme } = this.context
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
        theme = {theme}
      />
    );
  }
}
ContainerCountryDetails.contextType = ThemeContext
export default ContainerCountryDetails;
