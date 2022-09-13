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
  };
  componentDidMount() {
    this.FecthData();
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

  render() {
    let { theme } = this.context;
    return (
      <div
        style={{ backgroundColor: theme.background }}
        className="container_home container mt-1"
      >
        <Search theme={theme} />
        <RegionList handleRegion={this.FetchRegions} theme={theme} />
        <Countries countries={this.state.countries} theme={theme} />
        <AlertModal/>
      </div>
    );
  }
}
Home.contextType = ThemeContext;
export default Home;
