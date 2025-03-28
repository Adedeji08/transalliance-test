import React from "react";

import Logo from "../assets/images/logo.svg";
import Icon from "../assets/icon";

const footer = () => {
  return (
    <footer className="py-12 font-dmSans w-full md:flex justify-center items-center px-10 text-black">
      <div className="flex justify-center flex-col gap-10">
        <div>
          <img src={Logo} alt="Logo" />
          <h1 className="text-4xl font-gayathri">Transalliance Group.</h1>
        </div>
        <button className="bg-gradient-to-l from-[#5AAF87] from-10% via-[#24343E] to-[#5AAF87] flex items-center md:ml-24 -mt-4 justify-between px-6 py-4 w-64 rounded-2xl bg-[#8A8A8A4D]  shadow font-medium backdrop-blur-4xl border border-[#fff] font-dmSans">
          <span>Contact Us</span>
          <span className="w-7 h-7 flex items-center justify-center rounded-full bg-black text-green-400 border border-gray-500 text-lg">
            &gt;
          </span>
        </button>
      </div>
      <div className="container mx-auto px-6 text-black">
        <div className="md:grid md:grid-cols-4 grid grid-cols-2 gap-8 mt-4">
          <div>
            <h3 className="text-xl font-bold mb-4">Offices</h3>
            <p className="mb-2">Denmark:</p>
            <p className="mb-4">
              Toldbodgade 55B
              <br />
              1253, Copenhagen
            </p>

            <p className="mb-2">United Kingdom:</p>
            <p>
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
                  <a href="#" className="hover:text-white">
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
                    <a href="#" className="hover:text-white">
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
                  <a href="#" className="hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-black/75 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>Social Media</p>
          </div>
          <div className="flex space-x-4">
           <Icon name="facebookIcon" />
           <Icon name="xIcon" />
           <Icon name="igIcon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
