import { useEffect, useState } from "react";
import styled from "styled-components";

const WeatherContainer = styled.div`
  color: white;
  display: flex;
  align-items: center;

  span {
    padding: 0 5px;
  }

  img {
    width: 30px;
  }
`;

const city = "Wroclaw";
const url = `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}`;

const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(({ current }) => setWeather(current));
  }, []);

  return (
    <WeatherContainer>
      Prognoza pogody:
      {weather ? (
        <>
          <span> {weather.temp_c} °C</span>
          <img src={weather.condition.icon} alt="weather icon" />
        </>
      ) : (
        <span>trwa pobieranie... </span>
      )}
    </WeatherContainer>
  );
};

export default Weather;
