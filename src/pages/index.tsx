import React from "react";
import Hero from "../components/hero";
import About from "../components/about";
import HeroSection from "../components/hero-section";
import Services from "../components/services";
import Portal from "../components/portal";
import Sectors from "../components/sectore";
import AnnualReport from "../components/annualReport";
import Contact from "../components/contact";
import Footer from "../components/footer";

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
