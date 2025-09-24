// Hero.jsx
import React from "react";
import "./Hero.css";
import heroBg from "./images/header.jpg";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover", // show full image
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero__content">
        <h1 className="hero__title">Best Weight Loss Injections 2025</h1>
        <p className="hero__desc">
          Tired of overeating? Compare top weight loss brands to find the best
          fit for your unique needs. Explore treatment plans, such as{" "}
          <strong>Ozempic®</strong> and pick a weight loss med to get on track
          and kickstart a healthier you.
        </p>    
        <p className="hero__updated">
          <span className="dot"></span> Last Updated: September 2025
        </p>
      </div>
    </section>
  );
};

export default Hero;
