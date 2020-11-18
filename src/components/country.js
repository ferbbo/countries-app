import React ,{ Fragment }from 'react'

import './country.scss'
const Country = (props) =>(
   <Fragment>
       <figure>
        <img className="img-flag img-fluid" src={props.info.flag} alt={props.info.name} />
       </figure>

    <div className="details__container">
    <h6 className="name-country">{props.info.name}</h6>
      <div className="details__description">
        <div className="details__description__container">
          <h6 className="details__description__items">Population:</h6>
          <h6 className="details__description__items">Region:</h6>
          <h6 className="details__description__items">Capital:</h6>
        </div>
        <div className="details__content__container">
<p className="details__content">{props.info.population}</p>
<p className="details__content">{props.info.region}</p>
          <p className="details__content">{props.info.capital}</p>
        </div>
      </div>
    </div>
   </Fragment>

)

export default Country