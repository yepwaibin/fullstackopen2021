import React from "react";
import Weather from './Weather'

const CountryInfo = ({ countryInfo }) => {
  return (
    <div>
      <h2>{countryInfo.name.common}</h2>
      <div>Capital:{countryInfo.capital}</div>
      <div>population:{countryInfo.population}</div>
      <h3>languages</h3>
      <ul>
        {Object.keys(countryInfo.languages).map((key) => (
          <li key={countryInfo.languages[key]}>{countryInfo.languages[key]}</li>
        ))}
      </ul>
      <img src={countryInfo.flags.svg} alt="flag" />
      <Weather city={countryInfo.name.common} />
    </div>
  );
};

export default CountryInfo;
