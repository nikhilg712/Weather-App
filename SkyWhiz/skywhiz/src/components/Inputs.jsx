import React from "react";
import Search from "../assets/icons/Search.svg";
import Location from "../assets/icons/Location.svg";

const Inputs = () => {
  return (
    <div className="mt-4 gap-10 flex justify-center ">
      <div className="mt-4 gap-1 flex justify-center ">
        <img src={Search} alt="Search" className="h-7 w-7 mt-1" />
        <input
          className="h-9 w-fit rounded-full focus:outline-none text-center focus:outline-amber-400"
          type="text"
          placeholder="Enter a City"
        />
        <img
          src={Location}
          alt="Location"
          className="cursor-pointer h-7 w-7 mt-1 transition ease-out hover:scale-125"
        />
      </div>
      <div className="flex text-white mt-5 gap-2 text-lg font-medium">
        <button className="transition ease-out hover:scale-125">°C</button>
        <h1>|</h1>
        <button className="transition ease-out hover:scale-125">°F</button>
      </div>
    </div>
  );
};

export default Inputs;
