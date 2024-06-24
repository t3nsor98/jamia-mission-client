import React from "react";
import Image1 from "../assets/admission-image1.jpeg";
import Image2 from "../assets/admission-image2.jpeg";
import Image3 from "../assets/admission-image3.jpeg";
import { motion } from "framer-motion";

const AdmissionS = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-green-400 to-green-600 text-white py-12 px-4 md:px-16 lg:px-32"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Section: Large Image */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={Image1}
              alt="Admission Image 1"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right Section: Content */}
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Admission at Jamia Mission School
            </h2>
            <p className="text-lg mb-4 leading-relaxed">
              At Jamia Mission School, we believe in a streamlined admission
              process that ensures accessibility and ease for all aspiring
              students.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              Follow these simple steps to secure admission:
            </p>
            <ol className="list-decimal pl-6 mb-4 text-lg">
              <li>Visit our school's admission office.</li>
              <li>Fill out the admission form.</li>
              <li>Submit required documents.</li>
              <li>Attend a brief interview session.</li>
              <li>Receive admission confirmation.</li>
            </ol>
            <p className="text-lg mb-4 leading-relaxed">
              Our admission process is designed to be straightforward and
              supportive, ensuring every student has an equal opportunity to
              join our educational community.
            </p>
          </div>
        </div>

        {/* Additional Images Section */}
        <div className="flex flex-col md:flex-row justify-between mt-8">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img
              src={Image2}
              alt="Admission Image 2"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img
              src={Image3}
              alt="Admission Image 3"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AdmissionS;
