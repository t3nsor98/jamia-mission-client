import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Helpdesk = () => {
  const handleWriteEmail = () => {
    window.location.href = "mailto:Jamiacoaching2024@gmail.com";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-green-400 to-green-600 text-white min-h-screen flex items-center justify-center"
    >
      <div className="max-w-md w-full mx-auto p-8 bg-white shadow-lg rounded-lg">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800"
        >
          For any help, reach out to us
        </motion.h2>

        {/* Email Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-6"
        >
          <p className="text-lg mb-2 text-gray-800">
            Email: Jamiacoaching2024@gmail.com
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none transition duration-300"
            onClick={handleWriteEmail}
          >
            Write Email
          </motion.button>
        </motion.div>

        {/* Phone Numbers Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-6"
        >
          <p className="text-lg mb-2 text-gray-800">Phone Numbers:</p>
          <ul className="list-disc ml-6 text-gray-800">
            <li>+91 9643027784</li>
            <li>+91 7011327025</li>
            <li>+91 7011339746</li>
          </ul>
        </motion.div>

        {/* Back to School Link */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center"
        >
          <Link
            to="/"
            className="block text-blue-600 hover:underline focus:outline-none transition duration-300"
          >
            Back to Jamia Mission School
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Helpdesk;
