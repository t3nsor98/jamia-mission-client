import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Widget = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const calculateRotation = (unit, max) => (unit / max) * 360;

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourRotation = calculateRotation(hours % 12, 12) + minutes / 2;
  const minuteRotation = calculateRotation(minutes, 60);
  const secondRotation = calculateRotation(seconds, 60);

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Div: Analog Clock */}
          <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-lg">
            {/* Analog Clock */}
            <div className="clock w-80 h-80 relative">
              <svg viewBox="0 0 100 100" width="100%" height="100%">
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  stroke="black"
                  strokeWidth="2"
                  fill="white"
                />
                {Array.from({ length: 12 }).map((_, i) => {
                  const angle = (i + 1) * 30;
                  const x = 50 + 40 * Math.cos((angle - 90) * (Math.PI / 180));
                  const y = 50 + 40 * Math.sin((angle - 90) * (Math.PI / 180));
                  return (
                    <text
                      key={i}
                      x={x}
                      y={y}
                      textAnchor="middle"
                      alignmentBaseline="middle"
                      fontSize="6"
                    >
                      {i + 1}
                    </text>
                  );
                })}
                <line
                  x1="50"
                  y1="50"
                  x2="50"
                  y2="20"
                  stroke="black"
                  strokeWidth="2"
                  style={{
                    transformOrigin: "50% 50%",
                    transform: `rotate(${hourRotation}deg)`,
                  }}
                />
                <line
                  x1="50"
                  y1="50"
                  x2="50"
                  y2="10"
                  stroke="black"
                  strokeWidth="1"
                  style={{
                    transformOrigin: "50% 50%",
                    transform: `rotate(${minuteRotation}deg)`,
                  }}
                />
                <line
                  x1="50"
                  y1="50"
                  x2="85"
                  y2="50"
                  stroke="red"
                  strokeWidth="1"
                  style={{
                    transformOrigin: "50% 50%",
                    transform: `rotate(${secondRotation}deg)`,
                  }}
                />
              </svg>
            </div>
          </div>

          {/* Right Div: Calendar */}
          <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              Important Dates & Holidays
            </h2>
            <Calendar className="w-full" />
            <ul className="mt-4 text-left list-disc pl-6">
              <li>January 26: Republic Day</li>
              <li>August 15: Independence Day</li>
              <li>October 2: Gandhi Jayanti</li>
              <li>December 25: Christmas Day</li>
              {/* Add more important dates here */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
