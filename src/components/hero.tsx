import React from "react";
import Laptop from "../assets/images/lapt.png";
import bgImage from "../assets/images/Travel.png";

const Hero = () => {
  return (
    <section className="my-gradient px-5 pb-16 md:pb-24 lg:pb-48 pt-20 md:pt-28 lg:pt-36 text-white">
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-10 md:gap-16 lg:gap-32 max-w-7xl mx-auto">
        <div className="w-full lg:max-w-2xl">
          <p className="text-blue-300 mb-3 md:mb-4 bg-gradient-to-r from-[#F27405] to-[#D3BD00] bg-clip-text text-transparent font-dmSans text-sm md:text-base">
            Simplified cross-border payments
          </p>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight font-gayathri">
            We are the <br className="hidden md:block" />
            <span className="text-blue-400">payments people</span>
          </h1>
          <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed max-w-full md:max-w-[500px] font-dmSans">
            Transalliance Group's cross-border payments solutions connect
            organisations and communities globally to the network they need to
            thrive. Together, we make money move.
          </p>
          <div
            className="bg-cover bg-center h-[250px] md:h-[300px] lg:h-[380px] flex flex-col rounded-2xl md:rounded-3xl w-full mt-4 relative"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <button className="absolute top-0 left-0 md:left-6 lg:left-24 -translate-y-1/2 flex items-center justify-between px-4 md:px-6 py-3 md:py-4 w-56 md:w-64 rounded-xl md:rounded-2xl bg-[#8A8A8A4D] shadow text-white font-medium backdrop-blur-4xl border border-[#fff] font-dmSans text-sm md:text-base">
              <span>Discover More</span>
              <span className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded-full bg-black text-green-400 border border-gray-500 text-base md:text-lg">
                &gt;
              </span>
            </button>
          </div>
        </div>
        
        <div className="w-full max-w-xs md:max-w-sm lg:w-[24rem] mt-12 md:mt-16 lg:mt-0 relative">
          <img
            className="rounded-2xl md:rounded-3xl border-slate-200 border-2 w-full"
            src={Laptop}
            alt="Laptop showing transaction tracking"
          />
          <div className="border-2 rounded-lg bg-slate-50 px-3 py-2 md:px-4 md:py-2 text-[#122038] absolute top-4 md:top-6 lg:top-8 left-0 md:-left-8 lg:-left-16 text-xs md:text-sm font-dmSans shadow-md">
            <span>24/7, 365 transaction tracking</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;