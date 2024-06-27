import React from "react";

const emagazines = [
  {
    img: "path/to/image1.jpg",
    name: "Book Name 1",
    link: "http://example.com/download1",
  },
  {
    img: "path/to/image2.jpg",
    name: "Book Name 2",
    link: "http://example.com/download2",
  },
  {
    img: "path/to/image3.jpg",
    name: "Book Name 3",
    link: "http://example.com/download3",
  },
  {
    img: "path/to/image4.jpg",
    name: "Book Name 4",
    link: "http://example.com/download4",
  },
  {
    img: "path/to/image5.jpg",
    name: "Book Name 5",
    link: "http://example.com/download5",
  },
  {
    img: "path/to/image6.jpg",
    name: "Book Name 6",
    link: "http://example.com/download6",
  },
  {
    img: "path/to/image6.jpg",
    name: "Book Name 7",
    link: "http://example.com/download6",
  },
];

const EmagCoaching = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">E-Magazines</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {emagazines.map((book, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4">
            <img
              src={book.img}
              alt={book.name}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-lg font-bold mb-2">{book.name}</h3>
            <a
              href={book.link}
              download
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
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
