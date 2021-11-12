import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ city }) => {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    let source = axios.CancelToken.source();
    axios
      .get("http://api.weatherstack.com/current", {
        params: {
          access_key: process.env.REACT_APP_API_KEY,
          query: city,
        },
        cancelToken: source.token,
      })
      .catch((error) => {
        console.log("Request canceled", error.message);
        throw error;
      })
      .then((response) => {
        if (response.statusText === "OK") {
          setWeather(response.data);
        }
      })
      .catch((error) => {
        console.log(error.config);
      });

    return () => {
      source.cancel("weather component is unmountin");
    };
  }, [city, weather]);
  if (weather && weather.current) {
    return (
      <div>
        <h2>Weather in {weather.location.name}</h2>
        <div>
          <strong>temperature</strong>:{weather.current.temperature}
        </div>
        <img src={weather.current.weather_icons} alt="weather icon" />
        <div>
          <strong>wind</strong>: {weather.current.wind_speed}{" "}
          {weather.current.wind_degree} {weather.current.wind_dir}
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Weather;
