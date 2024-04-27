import { useState, useEffect } from "react";
import { DateTime } from "luxon";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureDetails from "./components/TemperatureDetails";
import Forecast from "./components/Forecast";
import {
  getWeatherData,
  getWeatherForecast,
  forecastData,
  weatherData,
} from "./services/weatherService";

function App() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [weather, setWeather] = useState("");
  const [sunRise, setSunRise] = useState("");
  const [sunSet, setSunSet] = useState("");
  const [temp, setTemp] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [realFeel, setRealFeel] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const fetchWeather = async () => {
    const data = await getWeatherData("weather", { q: "shimla" });
    console.log(data);
    return data;
  };

  const fetchWeatherForecast = async () => {
    const data = await getWeatherForecast("forecast", {
      latitude: 28.4333,
      longitude: 77.3167,
    });
    return data;
  };

  const fetchHourlyData = async () => {
    const data = await fetchWeatherForecast();
    const hourlyData = forecastData(data);
    return hourlyData;
  };

  const fetchWeatherData = async () => {
    const data = await fetchWeather();

    const weatherDetails = weatherData(data);

    const tempCelsius = Math.floor(weatherDetails.temp - 273.15);
    const feelsLikeCelsius = Math.floor(weatherDetails.feels_like - 273.15);
    const maxTempCelsius = Math.floor(weatherDetails.temp_max - 273.15);
    const minTempCelsius = Math.floor(weatherDetails.temp_min - 273.15);
    const sunriseTime = DateTime.fromSeconds(weatherDetails.sunrise).toFormat(
      "hh:mm a"
    );
    const sunsetTime = DateTime.fromSeconds(weatherDetails.sunset).toFormat(
      "hh:mm a"
    );

    return {
      ...weatherDetails,
      temp: tempCelsius,
      feels_like: feelsLikeCelsius,
      temp_max: maxTempCelsius,
      temp_min: minTempCelsius,
      sunrise: sunriseTime,
      sunset: sunsetTime,
    };
  };

  fetchHourlyData();
  fetchWeatherData();

  //fetchWeather();
  //fetchWeatherForecast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weather = await fetchWeatherData();
        setCity(weather.name);
        setCountry(weather.country);
        setHumidity(weather.humidity);
        setMaxTemp(weather.temp_max);
        setMinTemp(weather.temp_min);
        setWindSpeed(weather.speed);
        setSunRise(weather.sunrise);
        setSunSet(weather.sunset);
        setTemp(weather.temp);
        setRealFeel(weather.feels_like);
        setWeather(weather.weather[0].main);
        const timestamp = weather.dt;
        const timeZoneOffset = weather.timezone;
        const formattedTime = DateTime.fromSeconds(timestamp)
          .plus({ seconds: timeZoneOffset })
          .toFormat("hh:mm a");
        const formattedDate = DateTime.fromSeconds(timestamp).toFormat("EEEE, dd LLLL yyyy")
        setTime(formattedTime);
        setDate(formattedDate);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="mx-auto max-w-screen-md mt-4 py-5 px-6 md:px-24 bg-gradient-to-br from-stone-700 to-black h-fit shadow-xl shadow-gray-400">
        <TopButtons />
        <Inputs />
        <TimeAndLocation city={city} country={country} time={time} date={date} />
        <TemperatureDetails
          weather={weather}
          temperature={temp}
          realFeel={realFeel}
          humidity={humidity}
          wind={windSpeed}
          minTemp={minTemp}
          maxTemp={maxTemp}
          sunRise={sunRise}
          sunSet={sunSet}
        />
        <Forecast />
      </div>
    </>
  );
}

export default App;
