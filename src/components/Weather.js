import { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../api";

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

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    api
      .fetchWeather(city)
      .then(({ current }) => setWeather(current))
      .catch((error) => setError(true));
  }, []);

  const weatherMessage = weather ? (
    <>
      <span> {weather.temp_c} °C</span>
      <img src={weather.condition.icon} alt="weather icon" />
    </>
  ) : (
    <span>trwa pobieranie... </span>
  );

  return (
    <WeatherContainer>
      Prognoza pogody:
      {error ? <span>Coś poszło nie tak</span> : weatherMessage}
    </WeatherContainer>
  );
};

export default Weather;
