import React, { useEffect, useState } from "react";
import axios from "axios";

import List from "./components/List";
import CountryInfo from "./components/CountryInfo";

const App = () => {
  const [filter, setFilter] = useState("");
  const [countryData, setCountryData] = useState([]);
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setCountryData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (filter) {
      const result = countryData.filter((country) =>
        country.name.common.toLowerCase().includes(filter.toLowerCase())
      );
      setCountries(result);
    }
  }, [filter, countryData]);

  const handleChange = (event) => {
    const searchCountry = event.target.value;
    setFilter(searchCountry);
  };

  const showCountry = name => {
    setFilter(name);
  }

  return (
    <div>
      <div>
        find countries <input value={filter} onChange={handleChange} />
      </div>
      {countries.length === 1 ? (
        <CountryInfo countryInfo={countries[0]} />
      ) : filter ? (
        <List showCountry={showCountry} countries={countries} />
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
