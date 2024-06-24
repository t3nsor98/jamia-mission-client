import React from "react";
import Image from "../assets/about-us-school.jpeg"; // Replace with your actual image path
import { motion } from "framer-motion";

const AboutUsS = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-green-400 to-green-600 text-white py-12 px-4 md:px-16 lg:px-32"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Section: Image */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={Image}
              alt="Jamia Mission School"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right Section: Content */}
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About Jamia Mission School
            </h2>
            <p className="text-lg mb-4 leading-relaxed">
              The Unique Way of Education
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              Jamia Coaching Center (JCC), established in 2017 in the heart of
              Batla House, Jamia Nagar, Okhla, New Delhi, has rapidly become a
              premier coaching institute for prestigious entrance exams like
              JMI, AMU, BHU, JNU, DU, IP, and PUSA.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              At JCC, we pride ourselves on delivering exceptional entrance exam
              preparation, consistently achieving top results year after year.
              Our commitment to excellence is reflected in the comprehensive
              academic support and personalized care we offer each student,
              helping them achieve their career goals and objectives.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              Our faculty comprises highly qualified and experienced educators
              dedicated to student success. We foster a competitive yet
              nurturing environment that inspires ambition and excellence.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              Experience the unique and dynamic ecosystem at JCC, designed to
              keep you ahead of the curve. Our diverse course offerings allow
              you to choose the path that aligns with your aspirations, building
              a solid foundation for your future.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              A good teacher is a master of simplification and an enemy of
              simplism. At JCC, we embody this philosophy, ensuring that complex
              concepts are made accessible, not oversimplified.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              Join us at Jamia Coaching Center and embark on a transformative
              educational journey that promises an unparalleled learning
              experience.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUsS;
