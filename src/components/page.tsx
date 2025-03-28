import React from "react";
import Hero from "./hero";
import About from "./about";
import HeroSection from "./hero-section";
import Services from "./services";
import Portal from "./portal";
import Sectors from "./sectore";
import AnnualReport from "./annualReport";
import Contact from "./contact";
import Footer from "./footer";

// Images


const TransalliancePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      <About />
      <HeroSection />
      <Services />
      <Portal />
      <Sectors />
      <AnnualReport />
      <Contact />
      <Footer />
    </div>
  );
};

export default TransalliancePage;
