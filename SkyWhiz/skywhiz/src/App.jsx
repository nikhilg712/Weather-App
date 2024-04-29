import { useState, useEffect } from "react";
import { DateTime} from "luxon";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureDetails from "./components/TemperatureDetails";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getWeatherData,
  weatherData,
} from "./services/weatherService";

function App() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [weather, setWeather] = useState(null);
  const [sunRise, setSunRise] = useState("");
  const [sunSet, setSunSet] = useState("");
  const [temp, setTemp] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [realFeel, setRealFeel] = useState("");
  const [background, setBackground] = useState("from-[#ffa50a] to-[#c50909]");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [query, setQuery] = useState({ q: "gurugram" });

 



   
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await getWeatherData("weather", query);
        toast.success("weather fetched for " + query.q);
        console.log(data)
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

        setCity(weatherDetails.name);
        setCountry(weatherDetails.country);
        setHumidity(weatherDetails.humidity);
        setMaxTemp(maxTempCelsius);
        setMinTemp(minTempCelsius);
        setWindSpeed(weatherDetails.speed);
        setSunRise(sunriseTime);
        setSunSet(sunsetTime);
        setTemp(tempCelsius);
        setRealFeel(feelsLikeCelsius);
        setWeather(weatherDetails.weather[0].main);

        const timestamp = weatherDetails.dt;
        const timeZoneOffset = weatherDetails.timezone;
        const formattedTime = DateTime.fromSeconds(timestamp)
          .plus({ seconds: timeZoneOffset })
          .toFormat("hh:mm a");
        const parsedTime = DateTime.fromFormat(formattedTime, "hh:mm a");
        const adjustedTime = parsedTime.minus({ hours: 5, minutes: 30 });
        const adjustedFormattedTime = adjustedTime.toFormat("hh:mm a");
        const formattedDate = DateTime.fromSeconds(timestamp).toFormat("EEEE, dd LLLL yyyy");

        setTime(adjustedFormattedTime);
        setDate(formattedDate);

        if (weatherDetails.weather[0].main === "Snow") {
          setBackground("from-[#acaeb7] to-[#9ab7ffab]");
        } else if (weatherDetails.weather[0].main === "Clouds") {
          setBackground("from-[#747e8a] to-[#444444]");
        } else if (weatherDetails.weather[0].main === "Rain") {
          setBackground("from-[#34353a] to-[#6080cdab]");
        } else if (weatherDetails.weather[0].main === "Thunderstorm") {
          setBackground("from-[#000000] to-[#004bffab]");
        } else if (weatherDetails.weather[0].main === "Haze") {
          setBackground("from-[#ffa50a] to-[#c50909]");
        } else if (weatherDetails.weather[0].main === "Smoke") {
          setBackground("from-[#393939] to-[#0000005c]");
        } else if (weatherDetails.weather[0].main === "Clear") {
          setBackground("from-[#1e04f9] to-[#1636d55c]");
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, [query]);

  


  return (
    <>
      <div
        className={`mx-auto max-w-screen-md mt-20 py-5 px-6 md:px-24 bg-gradient-to-br ${background} h-fit shadow-xl shadow-gray-400`}
      >
        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          
        />
        
        <TopButtons setQuery={setQuery} />
        <Inputs setQuery={setQuery} />
        <TimeAndLocation
          city={city}
          country={country}
          time={time}
          date={date}
        />
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
      </div>
    </>
  );
}

export default App;
