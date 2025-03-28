import React from "react";

import Cross from "../assets/banks/DanishCross.png";
import EightEight from "../assets/banks/888.png";
import Cimb from "../assets/banks/Cimb.png";
import Nuvei from "../assets/banks/nuvei.png";
import MoneyGram from "../assets/banks/moneyGram.png";
import RakBank from "../assets/banks/rakBank.png";

const partner = () => {
  return (
    <div className="bg-white/20 backdrop-blur-md shadow-2xl rounded-lg px-4 pt-10 pb-20 flex flex-col flex-wrap justify-center items-start border-2 mx-auto lg:-mb-28 h-fit max-w-screen-2xl  lg:w-[70%] gap-6 z-30 absolute -bottom-[63rem] lg:-bottom-[20rem]">
      <h1 className="px-8 text-2xl lg:max-w-[450px]">Send and Receive Money from all over with ease.</h1>
      <div className="grid lg:grid-cols-6 grid-cols-2 justify-center items-center">
        <img className="h-20 w-36 object-cover" src={Cross} alt="RedCross" />
        <img className="h-20 w-36 object-cover" src={EightEight} alt="888" />
        <img className="h-20 w-36 object-cover" src={Cimb} alt="Cimb" />
        <img className="h-20 w-36 object-cover" src={Nuvei} alt="Nuvei" />
        <img
          className="h-20 w-36 object-cover"
          src={MoneyGram}
          alt="MoneyGram"
        />
        <img className="h-20 w-36 object-cover" src={RakBank} alt="RakBank" />
      </div>
    </div>
  );
};

export default partner;
