import React from "react";

import ContactImg from "../assets/images/image.contact.png";

const contact = () => {
  return (
    <section className="container bg-[#ddd] lg:flex justify-center items-center gap-20 mx-auto px-6 py-20">
      <div>
        <img src={ContactImg} alt="" />
      </div>
      <div className="max-w-2xl bg-white mx-auto p-12 rounded-3xl">
        <h2 className="text-3xl font-bold mb-8">Speak to Sales</h2>
        <form>
          <div className="">
            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                className="w-full border-black/40 outline-none border-2 rounded-lg px-4 py-3"
              />
            </div>
            <div>
              <label className="block mb-2">First Name</label>
              <input
                type="text"
                className="w-full border-black/40 outline-none border-2 rounded-lg px-4 py-3"
              />
            </div>
            <div>
              <label className="block mb-2">Last Name</label>
              <input
                type="text"
                className="w-full border-black/40 outline-none border-2 rounded-lg px-4 py-3"
              />
            </div>
            <div>
              <label className="block mb-2">Message</label>
              <textarea className="w-full border-black/40 outline-none border-2 rounded-lg px-4 py-3 h-full"></textarea>
            </div>
          </div>

          <div className="flex items-start mb-6">
            <input type="checkbox" id="consent" className="mt-1 mr-2" />
            <label htmlFor="consent" className="text-sm">
              I agree to receiving payment news and trends from Inpay, including
              updates to our products and services. I am aware that I can
              withdraw this consent at any time by contacting Inpay or
              unsubscribing via email. I agree to Inpay processing my personal
              data in accordance with its Privacy Policy.
            </label>
          </div>

          <button className="relative flex items-center justify-between px-6 py-4 w-64 rounded-2xl bg-gradient-to-r from-[#D3BD00] from-10% via-[#F27405] to-[#5FB083] shadow-lg text-white font-medium backdrop-blur-4xl bg-opacity-50 border border-gray-500">
            <span>Submit</span>
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-black text-green-400 border border-gray-500 text-lg">
              &gt;
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default contact;
