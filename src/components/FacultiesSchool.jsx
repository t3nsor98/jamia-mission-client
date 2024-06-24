import React from "react";
import teacher1 from "../assets/teacher1.jpeg";
// import teacher2 from "../assets/teacher2.jpg";
// import teacher3 from "../assets/teacher3.jpg";
// import teacher4 from "../assets/teacher4.jpg";
// import teacher5 from "../assets/teacher5.jpg";
// import teacher6 from "../assets/teacher6.jpg";

const FacultiesSchool = () => {
  const faculties = [
    {
      id: 1,
      name: "Mr. John Doe",
      description: "Mathematics Expert with 15+ years of teaching experience.",
      image: teacher1,
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      description: "Science Specialist with a Ph.D. in Physics and Biology.",
      image: teacher1,
    },
    {
      id: 3,
      name: "Ms. Emily Brown",
      description:
        "English Language Mentor known for her innovative teaching methods.",
      image: teacher1,
    },
    {
      id: 4,
      name: "Mr. Michael Clark",
      description:
        "Computer Science Guru with expertise in coding and technology.",
      image: teacher1,
    },
    {
      id: 5,
      name: "Mrs. Sarah Johnson",
      description: "History Enthusiast who makes learning the past exciting.",
      image: teacher1,
    },
    {
      id: 6,
      name: "Ms. Olivia Williams",
      description:
        "Art and Music Teacher, nurturing creativity in young minds.",
      image: teacher1,
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
