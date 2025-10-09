import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([]);

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    const handleVisitedCountries = (country) => {
        console.log(country.name.common);
        // setVisitedCountries(() =>{ return  [...visitedCountries, visitedCountries.push(country)]  });
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);

    }
    const handleVisitedFlag = (flag) => {
        const newVisitedFlag = [...visitedFlag, flag];
        setVisitedFlag(newVisitedFlag);
    }

    return (
        <div>
            <h2>All Countries- {countries.length}</h2>
            <h3>Total Country Visited: {visitedCountries.length} </h3>
            <ol>
                {visitedCountries.map((country, i) => <li key={i}>{country.name.common}</li>)
                }
            </ol>
            <div>
                <h3>Flags of Visited Countries:</h3>
               { 
               visitedFlag.map((flag,i)=><img style={{ width: '100px', borderRadius: '5px', marginLeft:'10px' }} key={i} src={flag}></img>)
               }
            </div>
            <div className='countries'>
                {
                    countries.map((country, i) =>
                        <Country
                            key={i}
                            country={country}
                            i={i}
                            handelVisitedCountries={handleVisitedCountries}
                            handelVisitedFlag={handleVisitedFlag}
                        />)
                }
            </div>
        </div>
    );
};

export default Countries;