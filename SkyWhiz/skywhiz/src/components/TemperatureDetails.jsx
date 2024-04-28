import React, { useState, useEffect } from "react";
import Sunny from "../assets/icons/Sunny.svg";
import Cloud from "../assets/icons/Cloud.svg";
import Thunderstorm from "../assets/icons/Thunderstorm.svg";
import Haze from "../assets/icons/Haze.svg";
import Rain from "../assets/icons/rain.svg";
import Snow from "../assets/icons/snow.svg";
import Smoke from "../assets/icons/Smoke.svg";
import Thermo from "../assets/icons/Thermometer.svg";
import Humidity from "../assets/icons/Humidity.svg";
import Wind from "../assets/icons/Wind.svg";
import Max from "../assets/icons/MaxTemp.svg";
import Rise from "../assets/icons/Sunrise.svg";
import Set from "../assets/icons/Sunset.svg";
import Min from "../assets/icons/MinTemp.svg";

const TemperatureDetails = ({
  weather,
  temperature,
  realFeel,
  humidity,
  wind,
  sunRise,
  sunSet,
  maxTemp,
  minTemp,
}) => {
  const [src, setSrc] = useState("");
  


  useEffect(() => {
    if (weather === "Clear") {
      setSrc(Sunny);
    } else if (weather === "Snow") {
      setSrc(Snow);
    } else if (weather === "Clouds") {
      setSrc(Cloud);
    } else if (weather === "Rain") {
      setSrc(Rain);
    } else if (weather === "Thunderstorm") {
      setSrc(Thunderstorm);
    } else if (weather === "Haze") {
      setSrc(Haze);
    } else if (weather === "Smoke") {
      setSrc(Smoke);
    }
  }, [weather]);

  return (
    <div>
      <div className="mt-4 flex justify-center text-[#e9e94f] text-base">
        <p>{weather}</p>
      </div>
      <div className="mt-4 flex justify-between">
        <img
          src={src}
          alt=""
          className={`h-12 w-12 my-auto ${weather !== "Clear" ? "invert" : ""}`}
        />
        <p className="text-3xl text-white my-auto">
        {temperature}°C
        </p>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1">
            <img src={Thermo} className="h-5 w-5" />
            <p className="text-white text-sm">Feels Like: {realFeel}°C</p>
          </div>
          <div className="flex gap-1">
            <img src={Humidity} className="h-5 w-5" />
            <p className="text-white text-sm">Humidity: {humidity}%</p>
          </div>
          <div className="flex gap-1">
            <img src={Wind} className="h-5 w-5" />
            <p className="text-white text-sm">Wind: {wind} km/h</p>
          </div>
        </div>
      </div>
      <div className="flex mt-7 justify-between ">
        <div className="flex gap-1">
          <img src={Rise} className="h-5 w-5" />
          <p className="text-white text-sm">Rise: {sunRise}</p>
        </div>
        <div className="flex gap-1">
          <img src={Set} className="h-5 w-5" />
          <p className="text-white text-sm">Set: {sunSet} </p>
        </div>
        <div className="flex gap-1">
          <img src={Max} className="h-4 w-4" />
          <p className="text-white text-sm">High: {maxTemp}°C</p>
        </div>
        <div className="flex gap-1">
          <img src={Min} className="h-4 w-4" />
          <p className="text-white text-sm">Low: {minTemp}°C</p>
        </div>
      </div>
      
    </div>
  );
};

export default TemperatureDetails;
