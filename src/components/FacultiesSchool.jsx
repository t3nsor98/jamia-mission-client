import React from "react";
import teacher1 from "../assets/teacher1.jpeg";
import teacher2 from "../assets/teacher2.jpeg";
import teacher3 from "../assets/teacher3.jpeg";
import teacher4 from "../assets/teacher4.jpeg";
import teacher5 from "../assets/teacher5.jpeg";
import teacher6 from "../assets/teacher6.jpeg";

const FacultiesSchool = () => {
  const faculties = [
    {
      id: 1,
      name: "Dr. Rahul Kushwaha",
      description:
        "Head of Management and Biology faculty with BAMS qualification",
      image: teacher1,
    },
    {
      id: 2,
      name: "Adeeba Khan",
      description:
        "She is a graduate with a major in Political Science and English, and she has two years of teaching experience at Tender Hearts School, where she taught English to students from grades 1 to 8.",
      image: teacher2,
    },
    {
      id: 3,
      name: "Farooq Ahmad Malik ",
      description:
        "He holds an MSc in Mathematics, a B Ed, and a PGDCA from Kashmir University, as well as an MA in Islamic Studies from MANUU Hyderabad. With 10 years of teaching experience, he has spent seven years at SEM College of Education, Management Studies, and Computer Sciences in Humhama Srinagar (J&K), where he taught BBA, BCA, ITI, and B Ed students. Additionally, he taught BSc IT, BCA, and MSc IT at NIELIT Srinagar for two years. He also has two years of experience as an academic counselor at IGNOU, a role in which he is still approved.",
      image: teacher3,
    },
    {
      id: 4,
      name: "Aquib Sir",
      description: "He holds an MSc and a BEd in Physics.",
      image: teacher4,
    },
    {
      id: 5,
      name: "Danish Sir",
      description: "He holds a BTech degree.",
      image: teacher5,
    },
    {
      id: 6,
      name: "Sahabuddin Sir",
      description: "He holds an MSc degree and a B.Ed in Chemistry.",
      image: teacher6,
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Our Faculties and Experts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculties.map((faculty) => (
            <div
              key={faculty.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={faculty.image}
                alt={faculty.name}
                className="w-full object-cover object-center"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{faculty.name}</h3>
                <p className="text-gray-700">{faculty.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacultiesSchool;
