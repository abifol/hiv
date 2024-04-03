import React from "react";
import Background from "../../assets/background.png";
import Button from "../../assets/button.png";
import "./home-hero.css";

const hero = () => {
  return (
    <div className="image-container">
      <img src={Background} alt="" className="background-image" />
      <img src={Button} alt="" className="button-image" />
    </div>
  );
};

export default hero;
