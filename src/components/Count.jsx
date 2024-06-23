import CountUp from "react-countup";
import { motion } from "framer-motion";

const Count = () => {
  return (
    <section className="bg-gradient-to-r from-green-400 to-green-600 text-white p-6">
      <div className="container mx-auto text-center">
        {/* Counter Section */}
        <motion.div
          className="bg-white text-green-600 p-6 rounded-lg shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3}}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            The Number of Students Make Their Career Here
          </h3>
          <CountUp
            start={0}
            end={250}
            duration={5}
            suffix="+"
            className="text-5xl md:text-6xl font-bold mb-2"
          />
          <p className="text-sm md:text-lg">What is stopping you?</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Count;
