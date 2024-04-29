import React, { useState } from "react";


const Inputs = ({ setQuery }) => {
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleClick = () => {
    if (city !== "") {
      setQuery({ q: city });
      setCity("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && city.trim() !== "") {
      setQuery({ q: city });
      setCity("");
    }
  };

  return (
    <div className="mt-4 gap-10 flex justify-center ">
      <div className="mt-4 gap-2 flex justify-center ">
        <input
          className="h-9 w-fit rounded-full focus:outline-none text-center focus:outline-amber-400"
          type="text"
          placeholder="Enter a City"
          value={city}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleClick}
          className="text-black bg-white my-auto rounded-full w-8 h-8 transition-transform transform hover:scale-110 active:scale-90"
        >
          Go
        </button>
      </div>
      
    </div>
  );
};

export default Inputs;
