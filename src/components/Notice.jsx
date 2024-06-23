import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// add
import Slider from "react-slick";
import { motion } from "framer-motion";
import notice1 from "../assets/notice1.jpeg";
import notice2 from "../assets/notice2.jpeg";
import notice3 from "../assets/notice3.jpeg";
import notice4 from "../assets/notice4.jpeg";
import notice5 from "../assets/notice5.jpeg";
import notice6 from "../assets/notice6.jpeg";

const notices = [
  { message: "Annual sports meet on 25th June.", date: "2024-06-01" },
  { message: "Parent-teacher meeting on 5th July.", date: "2024-06-05" },
  { message: "Summer vacation starts from 10th July.", date: "2024-06-10" },
  {
    message: "Independence day celebration on 15th August.",
    date: "2024-06-15",
  },
  { message: "New admissions open from 1st September.", date: "2024-06-20" },
  { message: "Annual function on 10th December.", date: "2024-06-25" },
];

const Notice = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="bg-gradient-to-r from-green-400 to-green-600 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Image Carousel */}
        <div className="w-full md:w-1/2 p-4">
          <Slider {...settings}>
            <div>
              <img
                src={notice1}
                alt="Notice 1"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img
                src={notice2}
                alt="Notice 2"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img
                src={notice3}
                alt="Notice 3"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img
                src={notice4}
                alt="Notice 4"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img
                src={notice5}
                alt="Notice 5"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img
                src={notice6}
                alt="Notice 6"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </Slider>
        </div>

        {/* Notice Board */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Notice Board</h2>
          <div className="overflow-hidden h-64">
            <motion.div
              className="flex flex-col space-y-4"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              {notices.map((notice, index) => (
                <div
                  key={index}
                  className="bg-white text-green-600 p-4 rounded-lg shadow-lg"
                >
                  <p className="font-bold">{notice.date}</p>
                  <p>{notice.message}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notice;
