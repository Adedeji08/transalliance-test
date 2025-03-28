import React from "react";


import Laptop from "../assets/images/laptop.jpg";
const Hero = () => {
  return (
    <section className="container pb-48 pt-20 mt-[80px] flex items-stretch justify-center gap-10 md:gap-32 bg-[#ed224e]">
      <div className="max-w-2xl">
        <p className="text-blue-300 mb-4 bg-gradient-to-r from-[#F27405] to-[#D3BD00] bg-clip-text text-transparent">
          Simplified cross-border payments
        </p>
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          We are the <br />
          <span className="text-blue-400">payments people</span>
        </h1>
        <p className="text-lg mb-8 leading-relaxed max-w-[500px]">
          Transalliance Group's cross-border payments solutions connect
          organisations and communities globally to the network they need to
          thrive. Together, we make money move.
        </p>
        <button className="relative flex items-center justify-between px-6 py-4 w-64 rounded-2xl bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 shadow-lg text-white font-medium backdrop-blur-4xl bg-opacity-50 border border-gray-500">
          <span>Discover More</span>
          <span className="w-7 h-7 flex items-center justify-center rounded-full bg-black text-green-400 border border-gray-500 text-lg">
            &gt;
          </span>
        </button>
      </div>
      <div className="w-[24rem] relative">
        <img
          className="rounded-3xl border-slate-200 border-2 relative"
          src={Laptop}
          alt="LaptopPhoto"
        />
        <div className="border-2 rounded-lg bg-slate-50 px-4 py-2 absolute top-8 -left-16">
          <span>24/7, 365 transaction tracking</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
