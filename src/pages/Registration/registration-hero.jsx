import React from "react";
import Background from "../../assets/registration-background.png";
import "./registration-hero.css";
import Form from "./form";

const hero = () => {
  return (
    <div className="image-container">
      <img src={Background} alt="" className="background-image" />
      <div className="form-image">
        <h1>Enter Phone Number</h1>
        <Form />
      </div>
    </div>
  );
};

export default hero;
