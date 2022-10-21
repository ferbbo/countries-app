import React, { Component } from "react";
import { ThemeContext } from "../themes/themes-context";

import Search from "../components/Search";
import RegionList from "../components/regionList";
import Countries from "../components/countries";
import AlertModal from "../components/AlertModal";
import LoadingScroll from '../components/loadingScroll';

import ApiRepository from '../repositories/ApiRepository';
import "./home.scss";
class Home extends Component {

  state = {
    countries: [],
    countriesPerPage: [],
    perCountry: 12,
  }

  handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setTimeout(() => this.getCountriesPerPage() , 500);
    }
  }
  observer = new IntersectionObserver(this.handleObserver, { root: null, threshold: 0 });

  async componentDidMount() {
    await this.FecthData();
    const loader = document.querySelector('div#loader');
    if (loader) this.observer.observe(loader);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.countries.length !== this.state.countries.length ) {
      this.getCountriesPerPage();
    }
    if (this.state.countriesPerPage.length >= this.state.countries.length) {
      const loader = document.querySelector('div#loader');
      loader.classList.add('d-none');
      this.observer.unobserve(loader);
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
  getCountriesPerPage() {
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
          
          className="container_home container mt-1"
        >
          <Search theme={theme} />
          <RegionList handleRegion={this.FetchRegions} theme={theme} />
          <Countries countries={this.state.countriesPerPage} theme={theme} />
          <AlertModal/>
          <div id="loader" className="px-5 mt-3 w-100 text-center">
            <LoadingScroll/>
          </div>
        </div>
    );
  }
}
Home.contextType = ThemeContext;
export default Home;
