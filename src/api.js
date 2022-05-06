const API_URL = "https://api.weatherapi.com/v1/";

const endpoints = {
  current: "current.json",
};

const getURL = (endpoint, params) => {
  const queryParams = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  return `${API_URL}${endpoint}?key=${process.env.REACT_APP_WEATHER_API_KEY}&${queryParams}`;
};

const api = {
  fetchWeather: (city) => {
    return fetch(getURL(endpoints.current, { q: city })).then((response) =>
      response.json()
    );
  },
};

export default api;
