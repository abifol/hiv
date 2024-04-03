// import React from "react";
import Time from "../../assets/Time.png";
import Cell from "../../assets/Cellular.png";
import Wifi from "../../assets/Wifi.png";
import Battery from "../../assets/Battery.png";

import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [time, setTime] = useState(formatTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatTime());
    }, 1000); // Update time every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  function formatTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }`;
  }

  return (
    <div>
      <div
        className="topnav"
        style={{
          backgroundColor: "#00000066",
          height: "40px",
          textAlign: "center",
          paddingTop: "20px",
          color: "white",
        }}
      >
        {time}

        <img src={Cell} style={{ paddingLeft: "250px" }} alt="" />
        <img src={Wifi} style={{ paddingLeft: "5px" }} alt="" />
        <img src={Battery} style={{ paddingLeft: "5px" }} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
