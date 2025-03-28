import React from "react";

import Partner from "../assets/services/partner.png";
import Network from "../assets/services/network.png";
import Security from "../assets/services/security.png";
import Expertise from "../assets/services/expertise.png";
import First from "../assets/services/first.png";
import Img from "../assets/services/image.png";

const services = () => {
  return (
    <section className="flex justify-center py-24 px-16 gap-48 bg-gray-200">
      <div className="flex flex-col gap-8 pt-10">
        <h1 className="text-2xl">Our Services</h1>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-start justify-center gap-4">
            <img
              className="bg-green-600 rounded-md p-1 h-16 w-16 object-fit"
              src={Partner}
              alt=""
            />
            <div>
              <h1 className="font-[700] text-2xl">
                We are your trusted partner
              </h1>
              <p className="max-w-[350px]">
                We are a dedicated and diligent team of payments specialists
                that’s committed to helping you unlock opportunity, create value
                and make payments happen, together.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-4">
            <img
              className="bg-green-600 rounded-md p-1 h-16 w-16 object-fit"
              src={Network}
              alt=""
            />
            <div>
              <h1 className="font-[700] text-2xl">
                We provide the network you need
              </h1>
              <p className="max-w-[350px]">
                We open access to a resilient global network spanning 90+
                countries that’s built to simplify complex challenges and move
                money at speed.
              </p>
            </div>
          </div>
          <div>
            <img
              className="bg-green-600 rounded-md p-1 h-16 w-16 object-fit"
              src={Security}
              alt=""
            />
            <div>
              <h1 className="font-[700] text-2xl">
                We bring certainty through compliance
              </h1>
              <p className="max-w-[350px]">
                We were born with compliance at our heart. Licensed by the
                globally trusted Danish FSA, when we move money you can be
                confident that it gets to the right place with absolute
                accuracy.
              </p>
            </div>
          </div>
          <div>
            <img
              className="bg-green-600 rounded-md p-1 h-16 w-16 object-fit"
              src={Expertise}
              alt=""
            />
            <div>
              <h1 className="font-[700] text-2xl">We execute with expertise</h1>
              <p className="max-w-[350px]">
                We complete an industry-leading 99% of payments for customers in
                the fast-changing financial services, iGaming, corporate and NGO
                sectors, drawing on 16 years of proven expertise. .
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[500px] flex flex-col items-start gap-4">
        <h1 className="font-[600] text-4xl max-w-[500px]">
          The Transalliance Group. difference
        </h1>
        <p className="text-xl opacity-60">
          Our global payments network is powered by passionate people,
          transparent customer relationships, and leading-edge technology.
        </p>
        <div className="mt-36 relative">
          <div className="flex ">
            <img
              className="w-60 h-80 object-cover rounded-b-lg rounded-tl-lg"
              src={First}
              alt=""
            />
            <div>
              <img
                className="w-60 h-60 object-cover rounded-b-lg rounded-tr-lg"
                src={Img}
                alt=""
              />
              <h1 className="max-w-[200px] text-[#1D2939] text-xl px-6 mt-4 font-medium">Meet our best financial experts</h1>
            </div>
          </div>
          <div className="absolute top-8 -left-8 bg-white/50 rounded-md py-4 px-2">
            <p>OUR TEAM</p>
            <p>Over 200 Experts </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default services;
