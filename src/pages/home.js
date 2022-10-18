import React, { Component } from "react";
import { ThemeContext } from "../themes/themes-context";

import Search from "../components/Search";
import RegionList from "../components/regionList";
import Countries from "../components/countries";
import AlertModal from "../components/AlertModal";

import ApiRepository from '../repositories/ApiRepository';
import "./home.scss";
class Home extends Component {

  state = {
    countries: [],
    countriesPerPage: [],
    perCountry: 8,
  }
  
  componentDidMount() {
    this.FecthData();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.countries.length !== this.state.countries.length ) {
      this.getCountriesPerPage(this.state.countries);
    }
  }

  //fetch all Countries
  FecthData = async () => {
    
    try {
      const { data } = await ApiRepository.getAllCountries();
      this.setState({ countries: data });

    } catch (error) {
      console.error(error);
    }
  };

  //fetch countries by Regions
  FetchRegions = async (region) => {
    try {
      const { data } = await ApiRepository.getCountriesByRegion(region);
      this.setState({
        countries: data,
      });
      
    } catch (error) {
      console.error(error);
    }
  };
  getCountriesPerPage(countries) {
    const perPage = this.state.countriesPerPage.length;
    if (countries.length) {
      const payload = countries.slice(perPage, this.state.perCountry);
      this.setState((prev) => ({
        countriesPerPage: [...prev.countriesPerPage , ...payload],
        perCountry: prev.perCountry + 8,
      }))
    }

  }

  render() {
    let { theme } = this.context;
    return (
      <div
        style={{ backgroundColor: theme.background }}
        className="container_home container mt-1"
      >
        <Search theme={theme} />
        <RegionList handleRegion={this.FetchRegions} theme={theme} />
        <Countries countries={this.state.countriesPerPage} theme={theme} />
        <AlertModal/>
      </div>
    );
  }
}
Home.contextType = ThemeContext;
export default Home;
