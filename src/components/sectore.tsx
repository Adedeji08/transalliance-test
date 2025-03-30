import React from "react";

import ImageOne from "../assets/images/image1.sector.png";
import ImageTwo from "../assets/images/image2.sector.png";
import ImageThree from "../assets/images/image3.sector.png";
import ImageFour from "../assets/images/image4.sector.png";

const Sectors = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="flex flex-col px-4 md:px-16 font-dmSans">
        <h1 className="font-medium text-2xl md:text-3xl text-[#1D2939] font-gayathri">
          Sectors we serve
        </h1>
        <p className="max-w-full md:max-w-[600px] mt-6 md:mt-10 text-[#1D2939] opacity-65">
          We simplify the complexities of cross-border payments in some of the
          world's most demanding sectors. Learn more about who we serve and how
          we add value below.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-12 lg:gap-x-20 md:gap-y-16 py-10 md:py-20">
          
          {/* Financial Services */}
          <div className="relative flex justify-center md:justify-start">
            <div className="relative w-full max-w-[350px] md:max-w-none">
              <img src={ImageOne} alt="Financial Services" className="w-full" />
              <div className="absolute bottom-5 md:bottom-10 right-0 left-0 md:left-auto md:right-0 md:-translate-x-1/4 mx-auto md:mx-0 flex flex-col items-start justify-between px-4 py-2 w-64 rounded-2xl bg-white/60 shadow-lg text-[#1D2939] font-medium backdrop-blur-4xl bg-opacity-50">
                <h2 className="text-xl md:text-2xl font-medium">Financial Services</h2>
                <p className="flex justify-center gap-4 items-center mt-1">
                  Learn More{" "}
                  <span className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded-full bg-black text-green-400 border border-gray-500 text-base md:text-lg">
                    &gt;
                  </span>
                </p>
              </div>
            </div>
          </div>
          
          {/* iGaming */}
          <div className="relative flex justify-center md:justify-start">
            <div className="relative w-full max-w-[350px] md:max-w-none">
              <img src={ImageTwo} alt="iGaming" className="w-full" />
              <div className="absolute top-5 md:top-10 right-0 left-0 md:left-0 md:-translate-x-1/4 mx-auto md:mx-0 flex flex-col items-start justify-between px-4 py-2 w-64 rounded-2xl bg-white/60 shadow-lg text-[#1D2939] font-medium backdrop-blur-4xl bg-opacity-50">
                <h2 className="text-xl md:text-2xl font-medium">iGaming</h2>
                <p className="flex justify-center gap-4 items-center mt-1">
                  Learn More{" "}
                  <span className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded-full bg-black text-green-400 border border-gray-500 text-base md:text-lg">
                    &gt;
                  </span>
                </p>
              </div>
            </div>
          </div>
          
          {/* NGOs */}
          <div className="relative flex justify-center md:justify-start">
            <div className="relative w-full max-w-[350px] md:max-w-none">
              <img src={ImageThree} alt="NGOs" className="w-full" />
              <div className="absolute top-5 md:top-10 right-0 left-0 md:left-auto md:right-0 md:-translate-x-1/4 mx-auto md:mx-0 flex flex-col items-start justify-between px-4 py-2 w-64 rounded-2xl bg-white/60 shadow-lg text-[#1D2939] font-medium backdrop-blur-4xl bg-opacity-50">
                <h2 className="text-xl md:text-2xl font-medium">NGOs</h2>
                <p className="flex justify-center gap-4 items-center mt-1">
                  Learn More{" "}
                  <span className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded-full bg-black text-green-400 border border-gray-500 text-base md:text-lg">
                    &gt;
                  </span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Corporates */}
          <div className="relative flex justify-center md:justify-start">
            <div className="relative w-full max-w-[350px] md:max-w-none">
              <img src={ImageFour} alt="Corporates" className="w-full" />
              <div className="absolute bottom-5 md:bottom-0 md:-bottom-6 right-0 left-0 md:left-0 md:-translate-x-1/4 mx-auto md:mx-0 flex flex-col items-start justify-between px-4 py-2 w-64 rounded-2xl bg-white/60 shadow-lg text-[#1D2939] font-medium backdrop-blur-4xl bg-opacity-50">
                <h2 className="text-xl md:text-2xl font-medium">Corporates</h2>
                <p className="flex justify-center gap-4 items-center mt-1">
                  Learn More{" "}
                  <span className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded-full bg-black text-green-400 border border-gray-500 text-base md:text-lg">
                    &gt;
                  </span>
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Sectors;