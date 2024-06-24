import React from "react";

const Library = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          LIBRARY
        </h2>

        <p className="text-lg text-center mb-6">
          We take pride in our rich library offering a wide range of books and a
          calm environment conducive to learning.
        </p>

        <div className="max-w-3xl mx-auto">
          <ul className="list-disc pl-6 text-lg mb-8">
            <li>
              Access to a diverse collection of books across various genres.
            </li>
            <li>Quiet and conducive environment for studying and research.</li>
            <li>
              Opportunities for enhancing knowledge and expanding horizons.
            </li>
            <li>Support for academic and personal growth through reading.</li>
            <li>Guidance and assistance from knowledgeable library staff.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Library;
