import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ countriesPromise }) => {

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;


    return (
        <div>
            <div style={{  width: '80%', padding: '2rem' }} >

                <h1>All Countries- {countries.length}</h1>
                <div className='countries'>
                    {
                        countries.map((country, i) => <Country key={i} country={country} i={i} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Countries;