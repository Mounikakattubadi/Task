// Features.jsx
import React from "react";
import "./Features.css";
import fastIcon from "./images/fastIcon.svg";
import shippingIcon from "./images/shippingIcon.svg";
import couponIcon from "./images/couponIcon.svg";
import tickIcon from "./images/tickIcon.jpg"; // tick icon for Online Prescription

const features = [
  { icon: fastIcon, title: "Fast Approval" },
  { icon: shippingIcon, title: "Free Shipping" },
  { icon: couponIcon, title: "Exclusive Coupons" },
  { icon: tickIcon, title: "Online Prescription" },
];

const Features = () => {
  return (
    <section className="features">
      <div className="features__container">
        {features.map((feature, index) => (
          <div className="feature" key={index}>
            <img src={feature.icon} alt={feature.title} className="feature__icon" />
            <span className="feature__title">{feature.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
