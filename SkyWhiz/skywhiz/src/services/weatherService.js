const API_KEY = "27833c492a38984299945862d17e760b";

const baseUrl = "https://api.openweathermap.org/data/2.5/";

export const getWeatherData = async (infoType, searchParams) => {
  const url = new URL(baseUrl + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  const response = await fetch(url);
  const data = response.json();
  return data;
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
