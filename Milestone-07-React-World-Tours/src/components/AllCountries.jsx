import './style.css';
import { useState } from 'react';
import Country from './Country';
import { useEffect } from 'react';

const AllCountries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://restcountries.com/v3.1/all');
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.log('Error fetching data', error);
      }
    };
    fetchData();
  }, []);

  const handleVisitedCountries = (name) => {
    const newCountries = [...visitedCountries, name]
    setVisitedCountries(newCountries)
  };
  const handleVisitedFlags = (flag) => {
    const newFlags = [...visitedFlags, flag];
    setVisitedFlags(newFlags)
  };

  return (
    <div>
      <h3>Countries: {countries.length} </h3>
      {/* visited countries */}
      <div>
        <h3>Visited Countries : {visitedCountries.length}</h3>
          <ol>
          {
            visitedCountries.map(visitedCountry => <li>{visitedCountry}</li>)
}
          </ol>
        
      </div>
      {/* flag container */}
      <div className='flag-container'>
        <h3>Flags : {visitedFlags.length}</h3>
        {
          visitedFlags.map(visitedFlag => <img src={visitedFlag}></img>)
        }
      </div>
      {/* visited countries */}
      <div className='country-container'>
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default AllCountries;
