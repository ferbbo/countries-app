import React, { Component } from "react";
import "./home.scss";

import InputSearch from "../components/inputSearch";
import RegionList from "../components/regionList";
import Countries from "../components/countries";
import Country from '../components/country'
import axios from "axios";
import notFind  from '../images/notFind.png'
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
  FetchCountry =  async (query, enable) => {
    try {
      const {data:{0: data}}= await axios.get(`https://restcountries.eu/rest/v2/name/${query}`) 
      this.setState({country:data})
      this.handleResultSearch(enable)
    } catch (error) {
      $('#alert-search').modal({
        show: true
      })
    }
   
    }
  handleResultSearch = (enable) =>{
    if(enable){
      this.containerSearchCountry.style.display = 'block'
    }else {
      this.containerSearchCountry.style.display = 'none'
    }
  }

  
  render() {
    const alert = (
      <div className="modal" tabIndex="-1" role="dialog" id ="alert-search">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <figure className="d-flex justify-content-center">
          <img className="img-fluid w-50 h-50" src={notFind} alt="img-notFind"/>

          </figure>
          <h1 className="modal-title text-center">Upps...!</h1>
          <h6 className="text-center">We didn't have find nothing! </h6>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
    )
    const country =this.state.country
    return (
      <div className="container_home">
        <InputSearch getCountry={this.FetchCountry} onEnable={this.handleResultSearch} />
       <div id="search-country" className="search-country">
         <div className ="country">
          {country.length !== 0 ? <Country info={country}/>:null}
         </div>

        </div>
        <RegionList handleRegion={this.FetchRegions} />
        <Countries countries={this.state.countries} />
      {alert}
      </div>
    );
  }
}

export default Home;
