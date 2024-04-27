import React from "react";
import DayCloud from "../assets/icons/DayCloud.svg";

const Forecast = () => {
  return (
    <div className=" mt-7 text-white ">
      <p className="text-xl uppercase">Hourly Forecast</p>
      <hr className="mt-2" />

      <div className="flex justify-between mt-3">
        <div className="flex flex-col justify-center">
          <p className="mx-auto">12:00 PM</p>
          {/* <img src={DayCloud} alt="" className="h-8 w-8 invert mx-auto" /> */}
          <p className="mx-auto">35°C</p>
        </div>
        <div className="flex flex-col justify-center">
          <p className="mx-auto">2:00 PM</p>
          {/* <img src={DayCloud} alt="" className="h-8 w-8 invert mx-auto" /> */}
          <p className="mx-auto">39°C</p>
        </div>
        <div className="flex flex-col justify-center">
          <p className="mx-auto">4:00 PM</p>
          {/* <img src={DayCloud} alt="" className="h-8 w-8 invert mx-auto" /> */}
          <p className="mx-auto">41°C</p>
        </div>
        <div className="flex flex-col justify-center">
          <p className="mx-auto">6:00 PM</p>
          {/* <img src={DayCloud} alt="" className="h-8 w-8 invert mx-auto" /> */}
          <p className="mx-auto">38°C</p>
        </div>
        <div className="flex flex-col justify-center">
          <p className="mx-auto">8:00 PM</p>
          {/* <img src={DayCloud} alt="" className="h-8 w-8 invert mx-auto" /> */}
          <p className="mx-auto">34°C</p>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
