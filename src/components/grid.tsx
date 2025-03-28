import React from "react";

import gridImg1 from "../assets/grid/anthony.png";
import gridImg2 from "../assets/grid/woman.png";
import gridImg3 from "../assets/grid/man.png";
import gridImg4 from "../assets/grid/stock.png";

const grid = () => {
  return (
    <div className="relative grid grid-col-3 items-center gap-12 py-12 mx-48">
      {/* SEPA Instant, SEPA & SWIFT */}
      <div className="relative col-span-1 mt-4 w-48 h-48 border-2 rounded-lg -ml-20">
        <img className="rounded-lg" src={gridImg1} alt="" />
        <span className="absolute bg-white/70 w-[90%] -bottom-7 left-2 px-1 py-2 rounded-xl text-[12px] font-semibold">
          SEPA Instant, SEPA & SWIFT
        </span>
      </div>
      <div className="relative col-span-1 col-start-3 w-60 h-60 border-2 border-gray-400 rounded-lg">
        <img className="w-full h-full object-cover" src={gridImg2} alt="" />
        <span className="absolute bg-white/80 w-[90%] -bottom-7 -left-2 px-1 py-2 rounded-xl text-[12px] font-semibold text-center border-2 border-gray-300 shadow-md">
          Customer portal for live transaction monitoring
        </span>
      </div>
      <div className="relative border-2 border-gray-400 w-52 h-52 rounded-lg col-span-1 col-start-2">
        <img className="absolute -top-7" src={gridImg3} alt="" />
        <span className="absolute -left-24 top-14 bg-white/80 w-[90%] px-1 py-2 rounded-xl text-[12px] font-semibold text-center border-2 border-gray-300 shadow-md">
          Danish FSA regulated
        </span>
      </div>
      <div className="relative w-52 h-52 rounded-lg border-gray-400 border-2">
        <img src={gridImg4} alt="" />
        <span className="absolute bg-white/85 w-[90%] -bottom-7 left-2 px-1 py-2 rounded-xl text-[12px] font-semibold text-center border-2 border-gray-300 shadow-md">
          90+ currencies served
        </span>
      </div>
    </div>
  );
};

export default grid;
