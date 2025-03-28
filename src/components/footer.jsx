import React from "react";

const footer = () => {
  return (
    <footer className="bg-blue-900 py-12">
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
