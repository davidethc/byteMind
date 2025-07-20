import React from "react";
import Spline from "@splinetool/react-spline";
import "boxicons/css/boxicons.min.css";

const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
      <div className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0 ">
        {/* tag box gradients border */}
        <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.5)] rounded-full">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1">
            <i className="bx bx-diamond"></i>
            Introducing
          </div>
        </div>
        {/* main heading */}
        <h1 className="mt-6">
          BUSCAS UNA WEB <br />
          UNA AUTOMATIZACION?
        </h1>
        {/* descripcion */}
        <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]">
          BYTE MIND lo tiene todo desde apps webs disenos softwar etc ideal para
          gente inteligente mmhuevo
        </p>
        {/* buttons */}
        <div className="flex gap-4 mt-1">
          <a
            className="mt-4 inline-block border border-[#2a2a2a]
              py-1.5 sm:py-2 px-4 sm:px-6 rounded-full
              text-sm sm:text-base font-semibold
              tracking-wider transition-all duration-300
              hover:bg-[#1a1a1A] bg-gray-300 text-black hover:text-white
              flex items-center gap-2"
            href="#"
          >
            Documentacions
            <i className="bx bx-link-external"></i>
          </a>
          <a
            className="mt-4 inline-block border border-[#2a2a2a]
              py-1.5 sm:py-2 px-4 sm:px-6 rounded-full
              text-sm sm:text-base font-semibold
              tracking-wider transition-all duration-300
              hover:bg-[#1a1a1A] bg-gray-300 text-black hover:text-white
              flex items-center gap-2"
            href="#"
          >
            Persons
            <i className="bx bx-link-external"></i>
          </a>
        </div>
      </div>
      <Spline
        className="absolute top-[-20%] bottom-0 sm:left-[-2%] lg:top-0 lg:left-auto lg:right-0"
        scene="https://prod.spline.design/cpCiSO7m4VIW0CNS/scene.splinecode"
      />
    </main>
  );
};

export default Hero;
