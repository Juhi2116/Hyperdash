import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-black text-white">
      {/* Left Navigation Links */}
      <nav className="hidden md:flex gap-6">
        <a href="#" className="hover:text-gray-400">
          Air X
        </a>
        <a href="#" className="hover:text-gray-400">
          Lexo Z
        </a>
        <a href="#" className="hover:text-gray-400">
          Gravity 9
        </a>
      </nav>

      {/* Logo */}
      <div className="flex items-center">
        <img
          src="../logo.png"
          alt="HyperDash Logo"
          className="w-auto h-6"
        />
      </div>

      {/* Right Links and Menu Icon */}
      <div className="flex items-center gap-6">
        {/* Shop and Account Links */}
        <div className="hidden md:flex gap-6">
          <a href="#" className="hover:text-gray-400">
            Shop
          </a>
          <a href="#" className="hover:text-gray-400">
            Account
          </a>
        </div>

        {/* Options Icon */}
        <button className="flex items-center gap-2 hover:text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Menu Icon */}
        <button className="block md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
