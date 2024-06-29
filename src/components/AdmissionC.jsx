import React from "react";

const images = [];
for (let i = 1; i <= 27; i++) {
  images.push(`/assets/Image_${String(i).padStart(3, "0")}.jpeg`);
}

const AdmissionC = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Our Coaching Offers Various Courses
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={img}
              alt={`Course ${index + 1}`}
              className="w-full h-160 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdmissionC;
