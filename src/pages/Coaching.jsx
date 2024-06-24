// components/Coaching.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const navLinks = [
  "HOME",
  "ABOUT US",
  "ADMISSION",
  "EVENTS",
  "FACULTIES",
  "GALLERY",
  "ONLINE FEES",
  "E MAGAZINE",
  "FIT INDIA",
  "LIBRARY",
  "HELP DESK",
];

const Coaching = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg">
        <div className="container mx-auto p-4 flex items-center justify-between">
          {/* Logo and School Name */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-16 w-16 mr-4 rounded-full"
            />
            <h1 className="text-2xl md:text-3xl font-bold text-white hover:text-gray-200 transition duration-300">
              Jamia Coaching Center
            </h1>
          </div>

          {/* Hamburger Menu */}
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

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={
                  link === "HOME"
                    ? "/"
                    : `/${link.toLowerCase().replace(/ /g, "-")}`
                }
                className="text-white hover:text-gray-200 transition duration-300"
              >
                {link}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`md:hidden bg-green-500 ${
            isOpen ? "block" : "hidden"
          } absolute top-20 inset-x-0 z-10`}
        >
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 text-white"
            onClick={closeMenu}
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
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <ul className="flex flex-col items-center py-4">
            {navLinks.map((link, index) => (
              <li key={index} className="mb-4">
                <Link
                  to={
                    link === "HOME"
                      ? "/"
                      : `/${link.toLowerCase().replace(/ /g, "-")}`
                  }
                  className="text-white hover:text-gray-200 transition duration-300"
                  onClick={closeMenu}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Welcome to Jamia Coaching Center
        </h2>
        <p className="text-lg">
          Jamia Coaching Center (JCC), nestled in the heart of Batla House,
          Jamia Nagar, Okhla, New Delhi, stands as a beacon of academic
          excellence since its inception in 2017. Specializing in preparing
          students for esteemed entrance exams like JMI, AMU, BHU, and more, JCC
          has consistently achieved top-notch results year after year. Our
          dedicated faculty, composed of highly qualified educators with
          extensive experience, ensures each student receives personalized
          attention and guidance. We cultivate a supportive yet competitive
          environment that motivates students to strive for greatness. At JCC,
          we believe in simplifying complex concepts without compromising depth,
          enabling students to grasp challenging subjects effectively. Join us
          at Jamia Coaching Center and embark on a journey towards academic
          success and personal development.
        </p>
      </main>
    </div>
  );
};

export default Coaching;
