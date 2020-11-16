import React from 'react'
import { Link } from 'react-router-dom'
import './regionList.scss'
const RegionList = (props) => (
    <div className="dropdown container-regions">
        <button  type="button"className="btn btn-region dropdown-toggle" id="dropdownMenuButton" data-toggle = "dropdown" aria-haspopup="true" aria-expanded="false">
            Filter by Region
        </button>
        
        <div className="dropdown-menu"aria-labelledby="dropdownMenuButton">
            <Link className="dropdown-item" to="#">Africa</Link>
            <Link className="dropdown-item"to="#">America</Link>
            <Link className="dropdown-item"to="#">Asia</Link>
            <Link className="dropdown-item"to="#">Europe</Link>
            <Link className="dropdown-item"to="#">Oceania</Link>
        </div>
    </div>
)

export default RegionList