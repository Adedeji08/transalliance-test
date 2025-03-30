import React from "react";

import gridImg1 from "../assets/grid/anthony.png";
import gridImg2 from "../assets/grid/woman.png";
import gridImg3 from "../assets/grid/man.png";
import gridImg4 from "../assets/grid/stock.png";

const grid = () => {
  return (
    <div className="relative lg:grid lg:grid-col-3 w-full  justify-center items-center gap-12 py-12 mx-48">
      {/* SEPA Instant, SEPA & SWIFT */}
      <div className="relative col-span-1 mt-4 lg:w-48 flex flex-col justify-center lg:h-48 border-2 lg:mt-0 w-full max-w-[350px] md:max-w-none  rounded-lg lg:-ml-20">
        <img className="rounded-lg w-full" src={gridImg1} alt="" />
        <span className="absolute bg-white/70 w-[90%] -bottom-7 left-2 px-1 py-2 rounded-xl text-[12px] font-semibold">
          SEPA Instant, SEPA & SWIFT
        </span>
      </div>
      <div className="relative col-span-1 col-start-3 lg:mt-0 mt-14  lg:w-60 lg:h-60 border-2 border-gray-400 rounded-lg">
        <img className="w-full h-full object-cover" src={gridImg2} alt="" />
        <span className="absolute bg-white/80 w-[90%] -bottom-7 -left-2 px-1 py-2 rounded-xl text-[12px] font-semibold text-center border-2 border-gray-300 shadow-md">
          Customer portal for live transaction monitoring
        </span>
      </div>
      <div className="relative border-2 border-gray-400 lg:w-52 lg:h-52 lg:mt-0 mt-14 rounded-lg col-span-1 col-start-2">
        <img className="absolute -top-7" src={gridImg3} alt="" />
        <span className="absolute -left-24 top-14 bg-white/80 w-[90%] px-1 py-2 rounded-xl text-[12px] font-semibold text-center border-2 border-gray-300 shadow-md">
          Danish FSA regulated
        </span>
      </div>
      <div className="relative lg:w-52 lg:h-52 lg:mt-0 mt-[30rem] rounded-lg border-gray-400 border-2">
        <img src={gridImg4} alt="" />
        <span className="absolute bg-white/85 w-[90%] -bottom-7 left-2 px-1 py-2 rounded-xl text-[12px] font-semibold text-center border-2 border-gray-300 shadow-md">
          90+ currencies served
        </span>
      </div>
    </div>
  );
};

export default grid;
