import React, { useState } from "react";
import "./Navbar.css";
import logo from "./images/logo.jpg"; // ensure path is correct

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav container">
        <a className="nav__brand" href="/">
          <img src={logo} alt="BestWeight LossMeds" className="nav__logo" />
        </a>

        <button
          className={`nav__toggle ${open ? "open" : ""}`}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((s) => !s)}
        >
          <span className="hamburger" />
        </button>

        <ul className={`nav__links ${open ? "nav__links--open" : ""}`}>
          <li className="nav__item">
            <a className="nav__link" href="/knowledge">
              Knowledge
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/reviews">
              Reviews
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
