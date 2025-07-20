import React from "react";
import "boxicons/css/boxicons.min.css";

const Header = () => {
  return (
    <header className="justify-between flex items-center py-4 px-4 lg:px-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-light m-0">
        ByteMind
      </h1>
      <nav>
        <a
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50 "
          href="#"
        >
          QuieneSomos
        </a>
        <a
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50 "
          href="#"
        >
          Contacta
        </a>
        <a
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50 "
          href="#"
        >
          Contrata
        </a>
      </nav>
      <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor pointer scale-z-50">
        ENTRAR
      </button>
      {/* mobile menu button - visible only on moblie */}
      <button className="md:hidden text-3xl p-2 z-50">
        <i className="bx bx-menu"></i>
      </button>
    </header>
  );
};

export default Header;
