import React from "react";
import event1 from "../assets/event1.jpeg";
import event2 from "../assets/event2.jpeg";
import event3 from "../assets/event3.jpeg";
import event4 from "../assets/event4.jpeg";

const Events = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          We celebrate all the important events
        </h2>
        <p className="text-lg text-center text-gray-700 mb-8">
          At Jamia Mission School, we believe in fostering cultural awareness
          through celebration of various events throughout the year.
        </p>

        {/* Event Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src={event1} alt="Event 1" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <img src={event2} alt="Event 2" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <img src={event3} alt="Event 3" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <img src={event4} alt="Event 4" className="rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Description */}
        <div className="mt-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Our school celebrates various cultural, educational, and social
            events to enrich the learning experience of our students. These
            events not only promote cultural awareness but also foster
            creativity and community spirit.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Students actively participate in these events, gaining valuable
            skills and experiences that go beyond the classroom, preparing them
            for a well-rounded future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Events;
