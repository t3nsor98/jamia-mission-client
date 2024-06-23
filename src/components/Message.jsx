import React from "react";
import { motion } from "framer-motion";
import directorPhoto from "../assets/director-photo.jpeg";

const Message = () => {
  return (
    <section className="bg-gradient-to-r from-green-400 to-green-600 text-white">
      <div className="container mx-auto p-4 flex flex-col md:flex-row items-center justify-between">
        {/* Director's Photo */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={directorPhoto}
            alt="Director"
            className="h-64 md:h-auto w-auto rounded-full shadow-lg"
          />
        </motion.div>

        {/* Director's Message */}
        <motion.div
          className="w-full md:w-2/3 p-4"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Director's Message
          </h2>
          <p className="text-lg md:text-xl mb-4">
            The unique way of education. Jamia Coaching Center made a modest
            beginning in 2017 at Batla House, Jamia Nagar, Okhla, New Delhi. It
            is a premier coaching institute for the preparation of JMI, AMU,
            BHU, JNU, DU, IP, PUSA. We are well regarded for high-quality
            entrance exam preparation and producing the best results year after
            year. At JCC, we provide the best academic support and personal care
            to the students to help them meet their career goals and objectives.
            Our highly qualified and experienced faculties are committed to
            students' success, and we offer a competitive environment that
            fosters an ambitious spirit. Experience the unique ecosystem within
            JCC that will help you stay ahead of the curve and experience the
            learning journey that you will get nowhere. You can choose the
            course that aligns with your goals and builds your foundational
            knowledge over a year. A good teacher is a master of simplification
            and enemy of simplism.
          </p>
          <p
            className="text-xl md:text-xl font-bold"
            style={{ fontWeight: "bold", fontStyle: "italic" }}
          >
            Director's Name: Mohd Shazid Khan
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Message;
