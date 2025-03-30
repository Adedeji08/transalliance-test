import React from "react";
import Laptop from "../assets/images/lapt.png";
import bgImage from "../assets/images/Travel.png";
const Hero = () => {
  return (
    <section className="my-gradient px-5 lg:px-0 lg:pb-48 pt-36 text-white lg:flex items-stretch justify-center gap-10 md:gap-32">
      <div className="max-w-2xl">
        <p className="text-blue-300 mb-4 bg-gradient-to-r from-[#F27405] to-[#D3BD00] bg-clip-text text-transparent font-dmSans">
          Simplified cross-border payments
        </p>
        <h1 className="lg:text-5xl text-[20px] font-bold mb-6 leading-tight font-gayathri">
          We are the <br />
          <span className="text-blue-400">payments people</span>
        </h1>
        <p className="text-lg mb-8 leading-relaxed max-w-[500px] font-dmSans">
          Transalliance Group's cross-border payments solutions connect
          organisations and communities globally to the network they need to
          thrive. Together, we make money move.
        </p>
        <div
          className="bg-cover bg-center h-[380px] flex flex-col rounded-3xl"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <button className="relative flex items-center ml-24 -mt-4 justify-between px-6 py-4 w-64 rounded-2xl bg-[#8A8A8A4D]  shadow text-white font-medium backdrop-blur-4xl  border border-[#fff] font-dmSans">
            <span>Discover More</span>
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-black text-green-400 border border-gray-500 text-lg">
              &gt;
            </span>
          </button>
        </div>
      </div>
      <div className="lg:w-[24rem] lg:mt-0 mt-20 relative">
        <img
          className="rounded-3xl border-slate-200 border-2 relative"
          src={Laptop}
          alt="LaptopPhoto"
        />
        <div className="border-2 rounded-lg bg-slate-50 px-4 py-2 absolute top-8 lg:-left-16 font-dmSans">
          <span>24/7, 365 transaction tracking</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
