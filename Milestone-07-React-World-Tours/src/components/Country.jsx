import { useState } from "react";

const Country = ({
  country,
  handleVisitedCountries,
  handleVisitedFlags}) => {
  const {
    name,
    capital,
    flags,
    latlng,
    currencies,
    languages,
    population,
    area,
    cca3,
  } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`${visited ? 'visited' : 'country'}`}>
      <h5 style={{ color: visited ? 'wheat' : 'blue' }}>
        Name: {name.common}{' '}
      </h5>
      <h5>Capital: {capital} </h5>
      <img src={flags.png} alt={name.common} width={200} />
      <h6>
        Latitude: {latlng[0]}, longitude: {latlng[1]}
      </h6>
      <p>Languages: {languages && Object.values(languages).join(', ')} </p>
      <p>Currencies: {currencies && Object.values(currencies)[0].name} </p>
      <p>Population: {population / 1000000} million</p>
      <div>
        <p>
          <small>
            Area: {area} km , Code: {cca3}{' '}
          </small>
        </p>
        <hr />
        <button onClick={() => handleVisitedCountries(country.name.common)}>Bucket List</button>
        <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
        <hr />
        <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
        {visited ? 'I have visited' : 'I wanna visit'}
      </div>
    </div>
  );
};

export default Country;