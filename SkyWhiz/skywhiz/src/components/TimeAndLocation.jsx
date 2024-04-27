import React, { useState,useEffect } from "react";
import { DateTime } from "luxon";

const TimeAndLocation = ({city,country,date,time}) => {
  // const [formattedDate, setFormattedDate] = useState("");
  // useEffect(() => {
  //   const updateDateTime = () => {
  //     const now = DateTime.now();
  //     const formattedDate = now.toFormat("EEEE, dd LLLL yyyy | hh:mm a");
  //     setFormattedDate(formattedDate);
  //   };

  //   updateDateTime();

  //   setInterval(updateDateTime, 1000);


  // }, []); 

  return (
    <div>
      <div className="mt-4 flex justify-center text-white text-sm">
        <p>{date} | Local Time: {time}</p>
      </div>
      <div className="text-white text-3xl font-semibold mt-3 ml-[200px]">
        <span>{city}, {country}</span>
      </div>
    </div>
  );
};

export default TimeAndLocation;
