const API_KEY = "27833c492a38984299945862d17e760b";
const forecastUrl = "https://api.open-meteo.com/v1";
const baseUrl = "https://api.openweathermap.org/data/2.5/";

export const getWeatherData = async (infoType, searchParams) => {
  const url = new URL(baseUrl + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  const response = await fetch(url);
  const data = response.json();
  return data;
};

export const getWeatherForecast = async (infoType, searchParams) => {
  const url = new URL(forecastUrl + "/" + infoType);
  url.search = new URLSearchParams({
    ...searchParams,
    hourly: "temperature_2m",
    forecast_days: 1,
  });
  const response = await fetch(url);
  const data = response.json();
  return data;
};

export const forecastData = (data) => {
  const {
    hourly: { time, temperature_2m },
  } = data;
  return { time, temperature_2m };
};

export const weatherData = (data) => {
  const {
    main: { feels_like, humidity, temp, temp_min, temp_max },
    wind: { speed },
    name,
    sys: { country, sunrise, sunset },
    weather,
    dt,
    timezone,
  } = data;
  return {
    feels_like,
    humidity,
    temp,
    temp_min,
    temp_max,
    speed,
    country,
    sunrise,
    sunset,
    name,
    weather,
    dt,
    timezone,
  };
};
