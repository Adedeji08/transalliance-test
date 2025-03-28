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
      {/* Navigation */}
      {/* <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Transalliance Group.</div>
        <div className="hidden md:flex space-x-8">
          {['Home', 'About', 'Solutions', 'News & Insights', 'Contact Us'].map((item) => (
            <a key={item} href="#" className="hover:text-blue-300">{item}</a>
          ))}
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full font-medium">
          Get Started
        </button>
      </nav> */}

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
