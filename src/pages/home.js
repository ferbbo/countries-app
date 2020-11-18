import React, { Component } from "react";
import "./home.scss";

import InputSearch from "../components/inputSearch";
import RegionList from "../components/regionList";
import Countries from "../components/countries";
import Country from '../components/country'
import axios from "axios";
class Home extends Component {
  state = {
    countries: [],
    country:[],  
  };
  componentDidMount() {
    this.containerSearchCountry = document.getElementById('search-country')
    this.FecthData();
  }
  //fetch all Countries
  FecthData = async () => {
    const { data } = await axios.get("https://restcountries.eu/rest/v2/all");
    this.setState({ countries: data });
  };

  //fetch countries by Regions
  FetchRegions = async (region) => {
    const data = await fetch(
      `https://restcountries.eu/rest/v2/region/${region}`
    );
    const response = await data.json();
    console.log(response);
    if (!response) console.error("error in found regions");
    this.setState({
      countries: response,
    });
  };

  //fetch country trounght input search
  FetchCountry =  async (query) => {
    try {
      const response = await axios.get(`https://restcountries.eu/rest/v2/name/${query}`) 
      this.setState({country:response.data})
      this.containerSearchCountry.style.display = 'block'
    } catch (error) {
      alert(error)
    }
   
    }

  render() {
    const country =this.state.country
    console.log(this.state.countries);
    console.log(this.state.country)
    return (
      <div className="container_home">
        <InputSearch getCountry={this.FetchCountry} />
       <div id="search-country" className="search-country">
         <div className ="country">
          {country.length !== 0 ? <Country info={this.state.country}/>:null}
         </div>

        </div>
        <RegionList handleRegion={this.FetchRegions} />
        <Countries countries={this.state.countries} />
      </div>
    );
  }
}

export default Home;
