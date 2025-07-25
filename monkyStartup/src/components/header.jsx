import React from "react";
import "boxicons/css/boxicons.min.css";
import { Link } from "react-router-dom";

const Header = () => {
  const toggleMenu = () => {
    const menu = document.getElementById("mobilMenu");
    // if it has the hidden class remove t otherwise  add it
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  };

  return (
    <header className="justify-between flex items-center py-4 px-4 lg:px-20">
      <Link
        to="/"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="text-3xl md:text-4xl lg:text-5xl font-light m-0"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        ByteMind
      </Link>
      <nav className="gap-6 flex items-center hidden md:flex">
        <Link
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50 "
          to="/sobre"
        >
          QuieneSomos
        </Link>
        <Link
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50 "
          to="/contacto"
        >
          Contacta
        </Link>
        <Link
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50 "
          to="/servicios"
        >
          Contrata
        </Link>
      </nav>
      <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor pointer scale-z-50">
        ENTRAR
      </button>
      {/* mobile menu button - visible only on moblie */}
      <button onClick={toggleMenu} className="md:hidden text-3xl p-2 z-50">
        <i className="bx bx-menu"></i>
      </button>
      {/* mobile menu - visible only on moblie */}
      <div
        id="mobilMenu"
        className=" hidden fixed top-20 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur md"
      >
        <nav className="flex flex-col gap-6 items-center">
          <Link
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50 "
            to="/sobre"
            onClick={toggleMenu}
          >
            QuieneSomos
          </Link>
          <Link
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50 "
            to="/contacto"
            onClick={toggleMenu}
          >
            Contacta
          </Link>
          <Link
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50 "
            to="/servicios"
            onClick={toggleMenu}
          >
            Contrata
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
