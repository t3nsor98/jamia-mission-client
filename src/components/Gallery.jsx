import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpeg";
import image6 from "../assets/image6.jpeg";

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gradient-to-r from-green-400 to-green-600 text-white p-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
          PHOTO GALLERY
        </h2>
        <Slider {...settings}>
          {[image1, image2, image3, image4, image5, image6].map(
            (image, index) => (
              <div key={index} className="p-2">
                <div className="relative w-full h-96">
                  <img
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            )
          )}
        </Slider>
      </div>
    </section>
  );
};

export default Gallery;
