import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon
import Footer from "./components/Footer";
import Header from "./components/Header";
import Message from "./components/Message";
import Notice from "./components/Notice";
import Count from "./components/Count";
import Gallery from "./components/Gallery";
import Schedule from "./components/Schedule";
import Quote from "./components/Quote";
import Widget from "./components/Widget";
// import Home from "./pages/Home";
import School from "./pages/School";
import Coaching from "./pages/Coaching";
import logo from "./assets/logo.jpg";

const WhatsAppButtons = () => {
  const openWhatsAppChat = (phoneNumber, message) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-2">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="bg-green-500 p-4 rounded-full shadow-lg cursor-pointer hover:bg-green-600 transition duration-300"
        onClick={() =>
          openWhatsAppChat(
            "7011339746",
            "Hello, I would like to know more about Jamia Mission School."
          )
        }
      >
        <FaWhatsapp className="text-white text-3xl" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="bg-green-500 p-4 rounded-full shadow-lg cursor-pointer hover:bg-green-600 transition duration-300"
        onClick={() =>
          openWhatsAppChat(
            "7011327025",
            "Hello, I would like to know more about Jamia Coaching Center."
          )
        }
      >
        <FaWhatsapp className="text-white text-3xl" />
      </motion.div>
    </div>
  );
};

const MainContent = () => {
  const location = useLocation();

  // Determine if the current path is /school or /coaching
  const isSchoolPage = location.pathname === "/school";
  const isCoachingPage = location.pathname === "/coaching";

  if (isSchoolPage || isCoachingPage) {
    return null;
  }

  return (
    <>
      <section className="bg-gradient-to-r from-green-400 to-green-600 text-white">
        <div className="container mx-auto p-4 flex flex-col md:flex-row items-center justify-between">
          {/* Left Section */}
          <motion.div
            className="flex flex-col items-center md:items-start mb-8 md:mb-0"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <img
              src={logo}
              alt="Jamia Mission School Logo"
              className="h-40 w-40 rounded-full mb-4"
            />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              JAMIA MISSION SCHOOL
            </h2>
            <Link to="/school">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white text-green-600 px-6 py-2 rounded-full mt-2 shadow-md hover:shadow-lg transition duration-300"
              >
                Know More
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="flex flex-col items-center md:items-end"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <img
              src={logo}
              alt="Jamia Coaching Center Logo"
              className="h-40 w-40 rounded-full mb-4"
            />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              JAMIA COACHING CENTER
            </h2>
            <Link to="/coaching">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white text-green-600 px-6 py-2 rounded-full mt-2 shadow-md hover:shadow-lg transition duration-300"
              >
                Know More
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
      <Notice />
      <Message />
      <Count />
      <Quote />
      <Schedule />
      <Gallery />
      <Widget />
    </>
  );
};

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Main Content */}
        <Route path="/" element={<MainContent />} />
        {/* School and Coaching pages */}
        <Route path="/school" element={<School />} />
        <Route path="/coaching" element={<Coaching />} />
      </Routes>
      <Footer />
      <WhatsAppButtons />
    </Router>
  );
}

export default App;
