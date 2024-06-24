import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import Helpdesk from "../components/Helpdesk";
import Onlinefees from "../components/Onlinefees";
import AboutUsC from "../components/AboutUsC"; // Updated import to AboutUsC
import AdmissionS from "../components/AdmissionS";
import Events from "../components/Events";
import FacultiesSchool from "../components/FacultiesSchool";
import Library from "../components/Library";
import Emagazines from "../components/Emagazines";

const navLinks = [
  "HOME",
  "ABOUT US",
  "ADMISSION",
  "EVENTS",
  "FACULTIES",
  "ONLINE FEES",
  "E MAGAZINE",
  "LIBRARY",
  "HELP DESK",
];

const Coaching = () => {
  const [showHelpDesk, setShowHelpDesk] = useState(false);
  const [showOnlineFees, setShowOnlineFees] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showAdmission, setShowAdmission] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [showFaculties, setShowFaculties] = useState(false);
  const [showLibrary, setShowLibrary] = useState(false);
  const [showEmagazines, setShowEmagazines] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = (link) => {
    switch (link) {
      case "HELP DESK":
        setShowHelpDesk(true);
        setShowOnlineFees(false);
        setShowAboutUs(false);
        setShowAdmission(false);
        setShowEvents(false);
        setShowFaculties(false);
        setShowLibrary(false);
        setShowEmagazines(false);
        setIsOpen(false);
        break;
      case "ONLINE FEES":
        setShowHelpDesk(false);
        setShowOnlineFees(true);
        setShowAboutUs(false);
        setShowAdmission(false);
        setShowEvents(false);
        setShowFaculties(false);
        setShowLibrary(false);
        setShowEmagazines(false);
        setIsOpen(false);
        break;
      case "ABOUT US":
        setShowHelpDesk(false);
        setShowOnlineFees(false);
        setShowAboutUs(true);
        setShowAdmission(false);
        setShowEvents(false);
        setShowFaculties(false);
        setShowLibrary(false);
        setShowEmagazines(false);
        setIsOpen(false);
        break;
      case "ADMISSION":
        setShowHelpDesk(false);
        setShowOnlineFees(false);
        setShowAboutUs(false);
        setShowAdmission(true);
        setShowEvents(false);
        setShowFaculties(false);
        setShowLibrary(false);
        setShowEmagazines(false);
        setIsOpen(false);
        break;
      case "EVENTS":
        setShowHelpDesk(false);
        setShowOnlineFees(false);
        setShowAboutUs(false);
        setShowAdmission(false);
        setShowEvents(true);
        setShowFaculties(false);
        setShowLibrary(false);
        setShowEmagazines(false);
        setIsOpen(false);
        break;
      case "FACULTIES":
        setShowHelpDesk(false);
        setShowOnlineFees(false);
        setShowAboutUs(false);
        setShowAdmission(false);
        setShowEvents(false);
        setShowFaculties(true);
        setShowLibrary(false);
        setShowEmagazines(false);
        setIsOpen(false);
        break;
      case "LIBRARY":
        setShowHelpDesk(false);
        setShowOnlineFees(false);
        setShowAboutUs(false);
        setShowAdmission(false);
        setShowEvents(false);
        setShowFaculties(false);
        setShowLibrary(true);
        setShowEmagazines(false);
        setIsOpen(false);
        break;
      case "E MAGAZINE":
        setShowHelpDesk(false);
        setShowOnlineFees(false);
        setShowAboutUs(false);
        setShowAdmission(false);
        setShowEvents(false);
        setShowFaculties(false);
        setShowLibrary(false);
        setShowEmagazines(true);
        setIsOpen(false);
        break;
      default:
        setShowHelpDesk(false);
        setShowOnlineFees(false);
        setShowAboutUs(false);
        setShowAdmission(false);
        setShowEvents(false);
        setShowFaculties(false);
        setShowLibrary(false);
        setShowEmagazines(false);
        setIsOpen(false);
        break;
    }
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
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-4">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => handleNavLinkClick(link)}
                className="text-white hover:text-gray-200 transition duration-300"
                style={{ cursor: "pointer" }}
              >
                {link}
              </button>
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <ul className="flex flex-col items-center py-4">
            {navLinks.map((link, index) => (
              <li key={index} className="mb-4">
                <button
                  onClick={() => handleNavLinkClick(link)}
                  className="text-white hover:text-gray-200 transition duration-300"
                  style={{ cursor: "pointer" }}
                >
                  {link}
                </button>
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
        {/* Conditional Rendering of Components */}
        {showHelpDesk && <Helpdesk />}
        {showOnlineFees && <Onlinefees />}
        {showAboutUs && <AboutUsC />} {/* Updated to use AboutUsC component */}
        {showAdmission && <AdmissionS />}
        {showEvents && <Events />}
        {showFaculties && <FacultiesSchool />}
        {showLibrary && <Library />}
        {showEmagazines && <Emagazines />} {/* Display Emagazines component */}
      </main>
    </div>
  );
};

export default Coaching;
