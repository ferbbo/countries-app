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

  handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setTimeout(() => this.getCountriesPerPage() , 500);
    }
  }
  componentDidMount() {
    const loader = document.querySelector('div#loader');
    const observer = new IntersectionObserver(this.handleObserver, { root: null, threshold: 0 });
    if (loader) observer.observe(loader);
    this.FecthData();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.countries.length !== this.state.countries.length ) {
      this.getCountriesPerPage();
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
    if (this.state.countries.length) {
      const payload = this.state.countries.slice(perPage, this.state.perCountry);
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
        <div id="loader" className="px-5 mt-3 w-100 text-center">...loading</div>
      </div>
    );
  }
}
Home.contextType = ThemeContext;
export default Home;
