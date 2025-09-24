import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Cards from "./Cards";
import SpecialCard from "./SpecialCard";
import InfoPage from "./InfoPage";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";
import "./App.css"; // add this

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Hero />
        <Features />
        <Cards />
        <SpecialCard />
        <InfoPage />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
