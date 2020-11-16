import React, { Component} from "react";
import './home.scss'

import InputSearch from '../components/inputSearch'
import RegionList from '../components/regionList'
import Countries from '../components/country'
import axios from 'axios'
class Home extends Component {

  componentDidMount(){
    this.FecthData()
  }
  FecthData = async () => {
    const {data} = await axios.get("https://restcountries.eu/rest/v2/all")
    console.log(data)
  }
  render() {
    return (
    <div className ="container_home">
      <InputSearch/>
      <RegionList/>
      <Countries/>
    </div>
    )
  }
}

export default Home;
