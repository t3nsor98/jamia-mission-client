import React from "react";

const Schedule = () => {
  return (
    <section className="bg-gradient-to-r from-green-400 to-green-600 text-white py-12 px-4 md:px-0">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          SCHEDULE A VISIT
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Make An Appointment For Your Child.
        </p>
        <a
          href="tel:+917011339746"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg transform hover:scale-105"
        >
          Call +91 7011339746
        </a>
      </div>
    </section>
  );
};

export default Schedule;
