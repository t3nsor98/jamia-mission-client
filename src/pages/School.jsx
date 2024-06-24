import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import Helpdesk from "../components/Helpdesk";
import Onlinefees from "../components/Onlinefees";
import AboutUsS from "../components/AboutUsS";
import AdmissionS from "../components/AdmissionS";
import Events from "../components/Events";
import FacultiesSchool from "../components/FacultiesSchool";
import Library from "../components/Library";
import Emagazines from "../components/Emagazines"; // Import Emagazines component

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

const School = () => {
  const [showHelpDesk, setShowHelpDesk] = useState(false);
  const [showOnlineFees, setShowOnlineFees] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showAdmission, setShowAdmission] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [showFaculties, setShowFaculties] = useState(false);
  const [showLibrary, setShowLibrary] = useState(false);
  const [showEmagazines, setShowEmagazines] = useState(false); // State for Emagazines component
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
              Jamia Mission School
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
          Welcome to Jamia Mission School
        </h2>
        <p className="text-lg">
          Jamia Mission School, inspired by the success of Jamia Coaching Center
          (JCC), continues to redefine education in Batla House, Jamia Nagar,
          Okhla, New Delhi. Since its establishment, Jamia Coaching Center has
          excelled in preparing students for prestigious entrance exams such as
          JMI, AMU, BHU, and more. Known for its dedicated faculty and
          personalized approach, JCC ensures every student receives the academic
          support needed to achieve their career aspirations. At Jamia Mission
          School, this commitment to excellence and nurturing environment
          continues, providing a unique educational experience designed to
          empower students and foster their academic and personal growth. Join
          us at Jamia Mission School and embark on a transformative journey
          towards a brighter future.
        </p>
        {/* Conditional Rendering of Components */}
        {showHelpDesk && <Helpdesk />}
        {showOnlineFees && <Onlinefees />}
        {showAboutUs && <AboutUsS />}
        {showAdmission && <AdmissionS />}
        {showEvents && <Events />}
        {showFaculties && <FacultiesSchool />}
        {showLibrary && <Library />}
        {showEmagazines && <Emagazines />} {/* Display Emagazines component */}
      </main>
    </div>
  );
};

export default School;
