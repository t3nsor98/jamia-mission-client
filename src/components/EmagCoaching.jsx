import React from "react";

const emagazines = [
  {
    name: "Tenses (English) - Success Darpan",
    link: "https://drive.google.com/file/d/1g6KoYt9pGtCMy8JeHEBwQifV9zUw39NK/view?usp=sharing",
  },
  {
    name: "Spoken English (English) - Success Darpan",
    link: "https://drive.google.com/file/d/1b8j8JAW36VupWSlIwkxUDsYGPiYnBEKW/view?usp=sharing",
  },
  {
    name: "Book Name 3",
    link: "http://example.com/download3",
  },
  {
    name: "Book Name 4",
    link: "http://example.com/download4",
  },
  {
    name: "Book Name 5",
    link: "http://example.com/download5",
  },
  {
    name: "Book Name 6",
    link: "http://example.com/download6",
  },
  {
    name: "Book Name 7",
    link: "http://example.com/download7",
  },
];

const EmagCoaching = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">E-Magazines</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {emagazines.map((book, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center"
          >
            <h3 className="text-lg font-bold mb-2">{book.name}</h3>
            <a
              href={book.link}
              download
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300 mt-auto"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmagCoaching;
