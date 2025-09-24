
import React from "react";
import "./SpecialCard.css";
import roLogo from "./images/r1.svg"; // Replace with your logo image

const SpecialCard = () => {
  return (
    <div className="special-card">
      {/* Most Popular Tag */}
      <div className="special-card__badge">Most Popular</div>

      {/* Logo */}
      <div className="special-card__logo">
        <img src={roLogo} alt="Ro Logo" />
      </div>

      {/* Content */}
      <div className="special-card__content">
        <h2>Proven Weight Loss with Personalized Care</h2>
        <div className="special-card__offer">
          Get Started Online for Just $45
        </div>
        <ul>
          <li>No Hidden Fees</li>
          <li>Fastest Working GLP-1 for Half the List Price</li>
          <li>Potential to lose up to 20% of body weight a year</li>
          <li>Get Qualified for Ozempic®, Wegovy®, or Zepbound®</li>
        </ul>
      </div>

      {/* Score */}
      <div className="special-card__score">
        <span className="score">9.7</span>
        <span className="stars">★★★★★</span>
        <span className="label">Our score</span>
      </div>

      {/* Visit Site + Tooltip */}
      <div className="tooltips-container">
        <button className="visit-btn">Visit Site</button>
        <div className="tooltips">
          👤 42,731 people visited this site this month
        </div>
      </div>
    </div>
  );
};

export default SpecialCard;
