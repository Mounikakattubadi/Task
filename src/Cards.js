import React from "react";
import "./Cards.css";
import r1 from "./images/r1.svg";
import r2 from "./images/r2.svg";
import r3 from "./images/r3.svg";
import r4 from "./images/r4.svg";
import r5 from "./images/r5.svg";
import r6 from "./images/r6.svg";
import r7 from "./images/r7.svg";

const cardsData = [
    {
        id: 1,
        logo: r1,
        title: "Proven Weight Loss with Personalized Care",
        coupon: "Get Started Online for Just $45",
        features: [
            "No Hidden Fees",
            "Fastest Working GLP-1 for Half the List Price",
            "Potential to lose up to 20% of body weight a year",
            "Get Qualified for Ozempic®, Wegovy®, or Zepbound®",
        ],
        score: "9.7",
        stars: "★★★★★",
        popular: true,
    },
    {
        id: 2,
        logo: r2,
        title: "Lose 10% in 4 months or your money back",
        features: [
            "Free 2-minute quiz to get pre-approved",
            "Prescriptions in 24 hr, medication shipped in 48 hr",
            "Same active ingredient as Ozempic® and Wegovy®",
        ],
        score: "9.4",
        stars: "★★★★☆",
    },
    {
        id: 3,
        logo: r3,
        title: "Budget-Friendly Weight Loss Backed by Experts",
        features: [
            "Save $120 and receive free shipping",
            "Trusted by over 500,000 weight loss patients",
            "Includes unlimited doctor visits and 24/7 support",
        ],
        score: "9.4",
        stars: "★★★★☆",
    },
    {
        id: 4,
        logo: r4,
        title: "$70 Off Your First Month",
        features: [
            "No Membership Fees",
            "Shipped in 1 week or less",
            "180 day satisfaction guarantee",
        ],
        score: "8.8",
        stars: "★★★★☆",
    },
    {
        id: 5,
        logo: r5,
        title: "Get $50 off your 1st month after 2 min quiz",
        features: [
            "Prescriptions delivered in 24 hours or less",
            "Easily cancel or switch medications anytime",
            "100% online care, optimized for zero hassle",
        ],
        score: "8.7",
        stars: "★★★★☆",
    },
    {
        id: 6,
        logo: r6,
        title: "No Hidden Fees - Oral Meds Start at $69/mo",
        features: [
            "100% online, no insurance required",
            "Save 30% on average with FSA/HSA",
            "Same active ingredient as Ozempic® and Wegovy®",
        ],
        score: "7.4",
        stars: "★★★☆☆",
    },
    {
        id: 7,
        logo: r7,
        title: "24/7 access to a care team",
        features: [
            "100% online, no office visits",
            "Personalized, doctor-trusted treatment plans",
            "GLP-1 injections & oral medication kits available",
        ],
        score: "7.3",
        stars: "★★★☆☆",
    },
];

const Cards = () => {
    return (
        <>
            {cardsData.map((card) => (
                <div className="card1" key={card.id}>
  {/* Number */}
  <div className="card1__number">{card.id}</div>

  {/* Most Popular tag only for 1st card */}
  {card.popular && <div className="card1__tag">Most Popular</div>}

  {/* Logo */}
  <div className="card1__logo">
    <img src={card.logo} alt="logo" />
  </div>

  {/* Main content */}
  <div className="card1__content">
    {card.title && <h2 className="card1__title">{card.title}</h2>}

    {card.coupon && <div className="card1__coupon">{card.coupon}</div>}

    <ul className="card1__features">
      {card.features.map((feature, idx) => (
        <li key={idx}>{feature}</li>
      ))}
    </ul>
  </div>

  {/* Score + Button */}
  <div className="card1__right">
    <div className="card1__score">
      <span className="card1__score-value">{card.score}</span>
      <span className="card1__stars">{card.stars}</span>
      <div className="card1__score-text">Our score ⓘ</div>

      {/* New Tooltip for Score (desktop only) */}
      {card.id === 1 && (
        <div className="score-tooltip">
          <div className="tooltip-item">
            <strong>Trustpilot Score</strong>
            <p>Based on 1,09,855 reviews</p>
            <span className="tooltip-score green">9.8</span>
          </div>
          <hr />
          <div className="tooltip-item">
            <strong>Brand Reputation</strong>
            <p>Based on web trends</p>
            <span className="tooltip-score blue">9.6</span>
          </div>
        </div>
      )}
    </div>

    {/* Visit Site button */}
    <div className="tooltip-container">
      <button className="card1__button">Visit Site</button>
      {card.id === 1 && (
        <div className="tooltip desktop-only">
          👤 42,731 people visited this site this month
        </div>
      )}
    </div>
  </div>

  {/* 📱 Static info bar for mobile */}
  {card.id === 1 && (
    <div className="mobile-info">
      👤 Over 2194 people visited this site today
    </div>
  )}
</div>

            ))}
        </>
    );
};

export default Cards;
