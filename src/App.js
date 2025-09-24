import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Cards from "./Cards";
import SpecialCard from "./SpecialCard";
import InfoPage from "./InfoPage";
import Footer from "./Footer"; // import footer
import ScrollToTopButton from './ScrollToTopButton';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Cards />
        <SpecialCard />
        <InfoPage /> {/* Long informational section */}
      </main>
      <Footer /> {/* Footer at the bottom */}
            <ScrollToTopButton />

    </>
  );
}

export default App;
