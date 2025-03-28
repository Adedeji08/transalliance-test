import React from "react";

import newLogo from "../assets/images/logo.svg";
import Portal from "../assets/images/image.portal.png";

const portal = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-6 items-end min-h-[60vh] relative mt-36">
      {/* Left Content */}
      <div className="relative bg-[#0F1D40] text-white p-32 rounded-tr-[3rem] col-span-4">
        <img src={Portal} alt="Business Woman" className="h-80 w-[50rem]" />

        {/* Floating Logo */}
        <img
          src={newLogo}
          alt="Company Logo"
          className="absolute top-5 left-10 w-10"
        />
      </div>

      {/* Right Image Section */}
      <div className="bg-green-600 flex flex-col justify-center items-start py-10 px-10 col-span-2">
        <h2 className="text-3xl font-bold text-gray-900 font-gayathri">
          One portal,
          <br /> every transaction
        </h2>
        <ul className="text-gray-800 mt-4 list-disc font-dmSans">
          <p className="max-w-[300px]">Our customer portal provides an intuitive interface to access all of
          our services via a simple, single login.</p>
          <li>Real-time, 24/7, 365 transaction tracking</li>
          <li>Customizable & downloadable reports</li>
          <li>Rich data analysis</li>
          <li>Multiple integration methods, built to suit your needs</li>
        </ul>
      </div>
    </section>
  );
};

export default portal;
