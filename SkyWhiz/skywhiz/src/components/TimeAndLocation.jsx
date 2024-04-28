import React, { useState,useEffect } from "react";
import { DateTime } from "luxon";

const TimeAndLocation = ({city,country,date,time}) => {
 
  return (
    <div>
      <div className="mt-4 flex justify-center text-white text-sm">
        <p>{date} | Local Time: {time}</p>
      </div>
      <div className="text-white text-3xl font-semibold mt-3 text-center ">
        <p>{city}, {country}</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
