import React from "react";
import logo from "../assets/logo.jpg";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg">
      <div className="container mx-auto p-4">
        {/* Logo and School Name */}
        <div className="text-center mb-6">
          <img
            src={logo}
            alt="Logo"
            className="h-24 w-24 rounded-full inline-block mb-2"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">
            JAMIA MISSION SCHOOL
          </h1>
          <h2 className="text-xl md:text-2xl text-white">
            JAMIA COACHING CENTER
          </h2>
        </div>

        {/* Address */}
        <div className="text-center mb-8">
          <p className="text-base">
            R-85/8 near Hari Masjid, Joga Bai Extension, Jamia Nagar, Okhla,
            South Delhi - 110025
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
