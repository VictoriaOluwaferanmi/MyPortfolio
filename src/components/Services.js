import React from "react";
import image from "../assests/passport.png";
import Experience from "./Experience";
const Services = () => {
  return (
    <div className="  px-10 md:px-20 md:py-10" id="services">
      <section className="container items-center lg:flex">
        <div className="flex-1 w-full space-y-4 sm:text-center lg:text-left md:w-1/2 md:mt-20">
          <h1 className="w-full text-4xl md:text-[72px] font-bold text-transparent leading-2 pr-[5px] bg-clip-text bg-gradient-to-r from-fuchsia-800 via-red-500 to-orange-400 md:py-10">
            I build things
            <div className="text-white md:pt-8 ">for the web</div>
          </h1>

          <p className="max-w-xl text-[20px] md:first-line:leading-relaxed text-gray-300 sm:mx-auto lg:ml-0 pb-4 ">
            Hi! I'm Victoria, a Frontend developer based in Nigeria. I'm
            passionate and focused on building user Interfaces.
          </p>

          <div className="items-center justify-center space-y-3 sm:space-x-6 sm:space-y-2 sm:flex lg:justify-start ">
            <button
              className="block px-6 py-2 text-center text-white transition ease-out delay-150 bg-gradient-to-r from-fuchsia-800 via-red-500 to-orange-400 hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300  rounded-md  "
              href="#contact"
            >
              Book a call
            </button>
            <a
              href="https://drive.google.com/file/d/1f7ylDkG1AQay27S2pHQC4ClNAO4vHpoi/view?usp=sharing"
              download
            >
              <button className="block px-6 py-2 text-center text-gray-500  bg-white rounded-md ">
                Download CV
              </button>
            </a>
          </div>
        </div>
        <div className="md: w-1/2">
          <img
            src={image}
            alt="passport"
            className=" mx-auto mt-20 object-contain h-100 w-96 "
          />
        </div>
      </section>
      <Experience />
    </div>
  );
};

export default Services;
