import React from "react";
import Sunny from "../assets/icons/Sunny.svg";
import Thermo from "../assets/icons/Thermometer.svg";
import Humidity from "../assets/icons/Humidity.svg";
import Wind from "../assets/icons/Wind.svg";
import Max from "../assets/icons/MaxTemp.svg"
import Rise from "../assets/icons/Sunrise.svg"
import Set from "../assets/icons/Sunset.svg"
import Min from "../assets/icons/MinTemp.svg"

const TemperatureDetails = () => {
  return (
    <div>
      <div className="mt-4 flex justify-center text-[#e9e94f] text-base">
        <p>Clear</p>
      </div>
      <div className="mt-4 flex justify-between">
        <img src={Sunny} alt="" className="h-12 w-12 my-auto" />
        <p className="text-3xl text-white my-auto">42°C</p>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1">
            <img src={Thermo} className="h-5 w-5" />
            <p className="text-white text-sm">Real Felt: 44°C</p>
          </div>
          <div className="flex gap-1">
            <img src={Humidity} className="h-5 w-5" />
            <p className="text-white text-sm">Humidity: 42%</p>
          </div>
          <div className="flex gap-1">
            <img src={Wind} className="h-5 w-5" />
            <p className="text-white text-sm">Wind: 3 km/h</p>
          </div>
        </div>
      </div>
      <div className="flex mt-7 justify-between ">
      <div className="flex gap-1">
            <img src={Rise} className="h-5 w-5" />
            <p className="text-white text-sm">Rise: 5:27 AM</p>
          </div>
          <div className="flex gap-1">
            <img src={Set} className="h-5 w-5" />
            <p className="text-white text-sm">Set: 6:53 PM</p>
          </div>       
          <div className="flex gap-1">
            <img src={Max} className="h-4 w-4" />
            <p className="text-white text-sm">High: 44°C</p>
          </div>        
          <div className="flex gap-1">
            <img src={Min} className="h-4 w-4" />
            <p className="text-white text-sm">Low: 34°C</p>
          </div>        
      </div>
    </div>
  );
};

export default TemperatureDetails;
