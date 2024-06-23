import CountUp from "react-countup";
import { motion } from "framer-motion";

const Count = () => {
  return (
    <section className="bg-gradient-to-r from-green-400 to-green-600 text-white p-6">
      <div className="container mx-auto text-center">
        {/* Paragraph Section */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            The Unique Way of Education
          </h2>
          <p className="text-sm md:text-lg">
            Jamia Coaching Center (JCC), established in 2017 in the heart of
            Batla House, Jamia Nagar, Okhla, New Delhi, has rapidly become a
            premier coaching institute for prestigious entrance exams like JMI,
            AMU, BHU, JNU, DU, IP, and PUSA.
            <br />
            <br />
            At JCC, we pride ourselves on delivering exceptional entrance exam
            preparation, consistently achieving top results year after year. Our
            commitment to excellence is reflected in the comprehensive academic
            support and personalized care we offer each student, helping them
            achieve their career goals and objectives.
            <br />
            <br />
            Our faculty comprises highly qualified and experienced educators
            dedicated to student success. We foster a competitive yet nurturing
            environment that inspires ambition and excellence.
            <br />
            <br />
            Experience the unique and dynamic ecosystem at JCC, designed to keep
            you ahead of the curve. Our diverse course offerings allow you to
            choose the path that aligns with your aspirations, building a solid
            foundation for your future.
            <br />
            <br />
            A good teacher is a master of simplification and an enemy of
            simplism. At JCC, we embody this philosophy, ensuring that complex
            concepts are made accessible, not oversimplified.
            <br />
            <br />
            Join us at Jamia Coaching Center and embark on a transformative
            educational journey that promises an unparalleled learning
            experience.
          </p>
        </motion.div>

        {/* Counter Section */}
        <motion.div
          className="bg-white text-green-600 p-6 rounded-lg shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
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
