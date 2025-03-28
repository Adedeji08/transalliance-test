import React from "react";

import Logo from "../assets/images/logo.svg";

const footer = () => {
  return (
    <footer className="bg-blue-900 py-12 font-dmSans flex justify-center items-center px-10">
      <div className="flex justify-start border-2 border-red-600 items-start flex-col gap-10">
        <div>
          <img src={Logo} alt="Logo" />
          <h1 className="text-4xl font-gayathri">Transalliance Group.</h1>
        </div>
        <button className="flex items-center ml-24 -mt-4 justify-between px-6 py-4 w-64 rounded-2xl bg-[#8A8A8A4D]  shadow text-white font-medium backdrop-blur-4xl  border border-[#fff] font-dmSans">
          <span>Contact Us</span>
          <span className="w-7 h-7 flex items-center justify-center rounded-full bg-black text-green-400 border border-gray-500 text-lg">
            &gt;
          </span>
        </button>
      </div>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Offices</h3>
            <p className="mb-2">Denmark:</p>
            <p className="text-blue-300 mb-4">
              Toldbodgade 55B
              <br />
              1253, Copenhagen
            </p>

            <p className="mb-2">United Kingdom:</p>
            <p className="text-blue-300">
              1Poultry
              <br />
              EC2R 8EJ, London
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {["Money Out", "Money In"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-blue-300 hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Sectors</h3>
            <ul className="space-y-2">
              {["Financial Services", "Corporates", "NGOs", "iGaming"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="text-blue-300 hover:text-white">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Other</h3>
            <ul className="space-y-2">
              {[
                "About Us",
                "Compliance",
                "Careers",
                "News & Insights",
                "Contact us",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-blue-300 hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-blue-700 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>info@inpay.com</p>
            <p>Phone: +45 88 610 600</p>
          </div>
          <div className="flex space-x-4">
            {["f", "y", "in", "t"].map((icon) => (
              <a
                key={icon}
                href="#"
                className="bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
