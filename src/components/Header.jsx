import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg">
      <div className="container mx-auto p-4 flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="h-16 w-16 mr-4 rounded-full" />
          <div>
            <Link
              to="/"
              className="text-2xl md:text-4xl font-bold text-white hover:text-gray-200 transition duration-300 whitespace-nowrap"
            >
              JAMIA MISSION SCHOOL & JAMIA COACHING CENTER
            </Link>
            <p className="text-sm">
              R-85/8 near Hari Masjid, Joga Bai Extension, Jamia Nagar, Okhla,
              South Delhi - 110025
            </p>
          </div>
        </div>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>
      <nav className={`md:flex justify-center ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col md:flex-row bg-green-500 md:bg-transparent w-full md:w-auto justify-center">
          {[
            "HOME",
            "ABOUT US",
            "ADMISSION",
            "ACADEMICS",
            "EVENTS",
            "FACILITIES",
            "GALLERY",
            "ONLINE FEES",
            "E MAGAZINE",
            "FIT INDIA",
            "LIBRARY",
            "HELP DESK",
          ].map((item, index) => (
            <li key={item} className="flex items-center">
              <Link
                to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                className="block py-2 px-2 text-xs md:text-sm font-bold text-white hover:bg-green-700 md:hover:bg-transparent hover:text-gray-200 transition duration-300"
              >
                {item}
              </Link>
              {index < 11 && (
                <span className="hidden md:inline-block text-white mx-2">|</span>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
