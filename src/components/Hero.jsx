import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Hero = () => {
  return (
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
            {" "}
            {/* Adjusted Link to point to "/school" */}
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
          <Link to="/coaching-center">
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
  );
};

export default Hero;
