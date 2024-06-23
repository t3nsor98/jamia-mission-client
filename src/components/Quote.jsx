import { motion } from "framer-motion";
import abdulKalamImage from "../assets/abdul_kalam.webp";

const Quote = () => {
  return (
    <section className="bg-gradient-to-r from-green-400 to-green-600 text-white p-8 md:p-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section - Image */}
        <div className="md:w-1/4 mb-8 md:mb-0">
          <motion.img
            src={abdulKalamImage}
            alt="Abdul Kalam"
            className="w-full h-auto rounded-lg shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Right Section - Quote */}
        <div className="md:w-3/4 md:pl-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="text-2xl md:text-3xl font-bold mb-4">
              "Education is the most powerful weapon which you can use to change
              the world."
            </p>
            <p className="text-lg md:text-xl">- APJ Abdul Kalam</p>
          </motion.div>

          {/* Headings and Paragraph */}
          <div className="mt-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We believe in Education
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Learning and Growing
            </h3>
            <p className="text-lg">
              The perfect place for your child to learn and grow, providing a
              nurturing environment for their educational journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
