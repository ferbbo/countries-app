import React from 'react'
import './country.scss'
const Country = (props) =>(

<div className="container-country">

    <div className="country">
        <img  className="img-fluid"src="" alt=""/>
        <div className="details__container">
            <h3 className="name-country"></h3>
            <div className="details__description">

            <div className="details__description__container">
                <h5 className="details__description">Population:</h5>
                <h5 className="details__description">Region:</h5>
                <h5 className="details__description">Capital:</h5>

            </div>
            <div  className="details__content__container">
                
                <p className="details__content"></p>
                <p className="details__content"></p>
                <p className="details__content"></p>
            </div>
            </div>
            </div>
            </div>
</div>
)
export default Country