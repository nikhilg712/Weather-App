import React from "react";

const TopButtons = () => {
  const cities = [
    { id: 1, title: "Delhi" },
    { id: 2, title: "Mumbai" },
    { id: 3, title: "Shimla" },
    { id: 4, title: "Bengaluru" },
    { id: 5, title: "Guwahati" },
    { id: 6, title: "Sikkim" },
  ];
  return (
    <div className="flex justify-center gap-7">
      {cities.map((city) => (
        <button
          className="text-white font-medium transition ease-out hover:scale-125"
          key={city.id}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
