import React from "react";

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
        ></a>
      </nav>
    </header>
  );
};

export default Header;
