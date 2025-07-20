import React from "react";
import Spline from "@splinetool/react-spline";
import "boxicons/css/boxicons.min.css";
import ButtonLink from "./buttonLink";

const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
      <div className="max-w-2xl ml-[5%] z-10 flex flex-col justify-start items-start min-h-[40vh]">
        {/* main heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold leading-tight mb-4 drop-shadow-xl">
          ByteMind <br />
          <span className="block">Tecnología y</span>
          <span
            className="block bg-gradient-to-r from-purple-600 to-pink-400 bg-clip-text text-transparent font-extrabold tracking-wide"
            style={{
              textShadow: "0 2px 32px rgba(128,0,128,0.22)",
              letterSpacing: "0.04em",
            }}
          >
            Creatividad
          </span>
        </h1>
        {/* tag box gradients border */}
        <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.5)] rounded-full">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1">
            <i className="bx bx-diamond"></i>
            Introducing
          </div>
        </div>

        {/* descripcion */}

        {/* buttons */}
        {/*
        <div className="flex gap-4 mt-1">
          <ButtonLink to="/servicios">
            Documentacions
            <i className="bx bx-link-external"></i>
          </ButtonLink>
          <ButtonLink to="/sobre">
            Persons
            <i className="bx bx-link-external"></i>
          </ButtonLink>
        </div>*/}
      </div>
      <Spline
        className="absolute top-[-20%] bottom-0 sm:left-[-2%] lg:top-0 lg:left-auto lg:right-0"
        scene="https://prod.spline.design/cpCiSO7m4VIW0CNS/scene.splinecode"
      />
    </main>
  );
};

export default Hero;
