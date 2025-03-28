import React from "react";

import ImageOne from "../assets/images/image1.sector.png";
import ImageTwo from "../assets/images/image2.sector.png";
import ImageThree from "../assets/images/image3.sector.png";
import ImageFour from "../assets/images/image4.sector.png";

const sectore = () => {
  return (
    <section className="py-20">
      <div className="flex flex-wrap justify-center items-start flex-col px-16">
        <h1 className="font-medium text-3xl text-[#1D2939]">Sectors we serve</h1>
        <p className="max-w-[600px] mt-10 text-[#1D2939] opacity-65">
          We simplify the complexities of cross-border payments in some of the
          world’s most demanding sectors. Learn more about who we serve and how
          we add value below.
        </p>
        <div className="flex flex-wrap justify-center items-stretch gap-y-16 gap-x-52 py-20">
          <div className="w-[30rem] rounded-3xl relative">
            <img src={ImageOne} alt="" />
            <span className="absolute bottom-32 -right-20 flex flex-col items-start justify-between px-6 py-2 w-64 rounded-2xl bg-white/60 shadow-lg text-[#1D2939] font-medium backdrop-blur-4xl bg-opacity-50">
              <h1 className="text-2xl font-medium">Financial Services</h1>
              <p className="flex justify-center gap-4">
                Learn More{" "}
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-black text-green-400 border border-gray-500 text-lg">
                  &gt;
                </span>
              </p>
            </span>
          </div>
          <div className="w-[30rem] rounded-3xl relative">
            <img src={ImageTwo} alt="" />
            <span className="absolute top-6 -left-20 flex flex-col items-start justify-between px-6 py-2 w-64 rounded-2xl bg-white/60 shadow-lg text-[#1D2939] font-medium backdrop-blur-4xl bg-opacity-50">
              <h1 className="text-2xl font-medium">iGaming</h1>
              <p className="flex justify-center gap-4">
                Learn More{" "}
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-black text-green-400 border border-gray-500 text-lg">
                  &gt;
                </span>
              </p>
            </span>
          </div>
          <div className="w-[30rem] rounded-3xl relative">
            <img src={ImageThree} alt="" />
            <span className="absolute top-6 -right-20 flex flex-col items-start justify-between px-6 py-2 w-64 rounded-2xl bg-white/60 shadow-lg text-[#1D2939] font-medium backdrop-blur-4xl bg-opacity-50">
              <h1 className="text-2xl font-medium">NGOs</h1>
              <p className="flex justify-center gap-4">
                Learn More{" "}
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-black text-green-400 border border-gray-500 text-lg">
                  &gt;
                </span>
              </p>
            </span>
          </div>
          <div className="w-[30rem] rounded-3xl relative">
            <img src={ImageFour} alt="" />
            <span className="absolute -bottom-6 -left-20 flex flex-col items-start justify-between px-6 py-2 w-64 rounded-2xl bg-white/60 shadow-lg text-[#1D2939] font-medium backdrop-blur-4xl bg-opacity-50">
              <h1 className="text-2xl font-medium">Coporates</h1>
              <p className="flex justify-center gap-4">
                Learn More{" "}
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-black text-green-400 border border-gray-500 text-lg">
                  &gt;
                </span>
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default sectore;
