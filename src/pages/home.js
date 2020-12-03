import React, { Component } from "react";
import "./home.scss";
import { ThemeContext } from "../themes/themes-context";

import Search from "../components/Search";
import RegionList from "../components/regionList";
import Countries from "../components/countries";
import axios from "axios";
import notFind from "../images/notFind.png";
class Home extends Component {
  state = {
    countries: [],
  };
  componentDidMount() {
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

  render() {
    const alert = (
      <div className="modal" tabIndex="-1" role="dialog" id="alert-search">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <figure className="d-flex justify-content-center">
                <img
                  className="img-fluid w-50 h-50"
                  src={notFind}
                  alt="img-notFind"
                />
              </figure>
              <h1 className="modal-title text-center">Upps...!</h1>
              <h6 className="text-center">We didn't have find nothing! </h6>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
    let { theme } = this.context;
    return (
      <div
        style={{ backgroundColor: theme.background }}
        className="container_home"
      >
        <Search theme={theme} />
        <RegionList handleRegion={this.FetchRegions} theme={theme} />
        <Countries countries={this.state.countries} theme={theme} />
        {alert}
      </div>
    );
  }
}
Home.contextType = ThemeContext;
export default Home;
