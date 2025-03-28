import React from "react";

import Partner from "./partner";
import Grid from "./grid";

const about = () => {
  return (
    <section className="flex justify-center lg:mt-32 mt-[33rem] items-center flex-col">
      <Partner />
      <div className="lg:flex justify-center items-stretch  lg:ml-32 ml-8 mr-36 gap-48 p-8">
        <div className="flex flex-col justify-between">
          <h1 className="font-[500] opacity-65 text-xl font-gayathri">About Us</h1>
          <button className="relative flex items-center justify-between px-6 py-4 w-64 rounded-2xl bg-gradient-to-r from-[#D3BD00] from-10% via-[#F27405] to-[#5FB083] shadow-lg text-white font-medium backdrop-blur-4xl bg-opacity-50 border border-gray-500 font-dmSans">
            <span>Money Out</span>
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-black text-green-400 border border-gray-500 text-lg">
              &gt;
            </span>
          </button>
        </div>
        <div className="flex justify-center items-start flex-col gap-4">
          <h1 className="max-w-[350px] text-3xl font-[700] font-dmSans">
            Payment Pathways, built for you
          </h1>
          <p className="opacity-50 w-full text-lg font-dmSans">
            Transalliance Group. Money Out and Money In solutions give our
            customers the ability to complete cross-border, multi-currency
            transactions securely and at speed. And with a single provider for
            both payouts and pay-ins, say goodbye to the operational headaches
            of multi-supplier management
          </p>
        </div>
      </div>
      <Grid />
      <div className="flex justify-end w-[50%]">
        <button className="relative flex items-center justify-between px-6 py-4 w-64 rounded-2xl bg-gradient-to-l from-[#D3BD00] from-10% via-[#5FB083] to-[#5FB083] shadow-lg text-white font-medium backdrop-blur-4xl bg-opacity-50 border border-gray-500 font-dmSans">
          <span>Learn More</span>
          <span className="w-7 h-7 flex items-center justify-center rounded-full bg-black text-green-400 border border-gray-500 text-lg">
            &gt;
          </span>
        </button>
      </div>
    </section>
  );
};

export default about;
