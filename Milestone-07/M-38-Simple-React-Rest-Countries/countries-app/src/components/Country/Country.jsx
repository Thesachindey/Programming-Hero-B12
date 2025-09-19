import React from 'react';

const Country = ({ country, i }) => {
    // const {name}=country;
    // const{common,official}=name;
    console.log(country)

    return (
        <div className='cardStyle'>
            <h2>Country: {i + 1}</h2>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt}  />
            <h3> Name: {country.name.common}</h3>
            <h3>Capital: {country.capital.capital}</h3>
            <h3>Population: {country.population.population}</h3>
        </div>
    );
};

export default Country;