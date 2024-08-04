import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import notice1 from "../assets/notice1.jpeg";
import notice2 from "../assets/notice2.jpeg";
import notice3 from "../assets/notice3.jpeg";
import notice4 from "../assets/notice4.jpeg";
import notice5 from "../assets/notice5.jpeg";
import notice6 from "../assets/notice6.jpeg";

const notices = [
  { message: "Parent-teacher meeting on 7th August.Time- 8:30 AM to 1:30 PM", date: "2024-08-07" },
  {
    message: "Independence day celebration on 15th August.",
    date: "2024-06-15",
  },
  { message: "New admissions is currently going on.", date: "2024-06-20" },
];

const Notice = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
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
            <Slider
              dots={false}
              infinite={true}
              speed={500}
              slidesToShow={2}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={4000}
              vertical={true}
              verticalSwiping={true}
              cssEase="linear"
            >
              {notices.map((notice, index) => (
                <div key={index} className="p-4">
                  <motion.div
                    className="bg-white text-green-600 p-4 rounded-lg shadow-lg"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="font-bold">{notice.date}</p>
                    <p>{notice.message}</p>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notice;
