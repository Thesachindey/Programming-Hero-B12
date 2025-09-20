import React, { useState } from 'react';
import './Country.css'

const Country = ({ country, i, handelVisitedCountries,handelVisitedFlag }) => {
    const [visited, setVisited] = useState(false);


    // const {name}=country;
    // const{common,official}=name;
    // console.log(country)

    const handelVisited = () => {
        //    visited ? setVisited(false) : setVisited(true);
        // setVisited(visited ? false : true);
        setVisited(!visited);
        handelVisitedCountries(country);

    }
    return (
        // <div className={`cardStyle ${visited ? 'visited-country': ''}`}>
        <div className={`cardStyle ${visited && 'visited-country'}`}>
            <h2>Country: {i + 1}</h2>
            <img style={{ width: '100%', borderRadius: '10px' }} src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h3> Name: {country.name.common}</h3>
            <h3>Capital: {country.capital.capital}</h3>
            <h3>Population: {country.population.population}</h3>
            <button onClick={handelVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
            <button onClick={() => {  handelVisitedFlag(country?.flags?.flags?.png) }}>Visited Flag</button>
        </div>
    );
};

export default Country;