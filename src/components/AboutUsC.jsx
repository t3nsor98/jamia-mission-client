import React from "react";
import Image from "../assets/about-us-coaching.jpeg";
import { motion } from "framer-motion";

const AboutUsC = () => {
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
              alt="Jamia Coaching Center"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right Section: Content */}
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About Jamia Coaching Center
            </h2>
            <p className="text-lg mb-4 leading-relaxed">
              Jamia Coaching Center (JCC), established in 2017 in the heart of
              Batla House, Jamia Nagar, Okhla, New Delhi, is a leading coaching
              institute dedicated to preparing students for prestigious entrance
              exams such as JMI, AMU, BHU, JNU, DU, IP, and PUSA.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              At JCC, we are committed to excellence in education, providing
              comprehensive support and personalized attention to each student.
              Our faculty consists of highly qualified educators with extensive
              experience in their respective fields, ensuring top-notch academic
              guidance.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              We nurture a competitive yet supportive environment that motivates
              students to achieve their academic goals and aspirations. Our
              diverse range of courses empowers students to choose a career path
              that aligns with their interests and ambitions.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              At JCC, we believe in simplifying complex concepts without
              compromising on depth, preparing students not just for exams but
              also for lifelong learning and success in their chosen fields.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              Join us at Jamia Coaching Center and embark on a transformative
              educational journey that promises unparalleled learning and
              growth.
            </p>
          </div>
        </div>

        {/* New Section: Entrance Preparation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Entrance Preparation For
          </h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            {[
              "Class 6th to 9th",
              "11th Arts Commerce Science",
              "Diploma Engineering",
              "Political Science",
              "History",
              "BBA",
              "B.Com",
              "BA",
              "Economics",
              "Psychology",
              "Geography",
              "Sociology",
              "BA LLB",
              "Hotel Management",
              "Mass Media",
              "Languages Courses",
            ].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                className="transition-transform duration-300"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutUsC;
