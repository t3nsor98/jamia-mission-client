import React from "react";
// show swiggy mini store using iframe 
const emagazines = [
  {
    name: "Tenses (English) - Success Darpan",
    link: "https://drive.google.com/uc?export=download&id=1g6KoYt9pGtCMy8JeHEBwQifV9zUw39NK",
  },
  {
    name: "Spoken English (English) - Success Darpan",
    link: "https://drive.google.com/uc?export=download&id=1b8j8JAW36VupWSlIwkxUDsYGPiYnBEKW",
  },
  {
    name: "Jamia ENG",
    link: "https://drive.google.com/uc?export=download&id=1AypgUoG5IbgEw1yMYLH8Kmce2bN1htjo",
  },
  {
    name: "Jamia Coaching Center_Booster_E_Nov22",
    link: "https://drive.google.com/uc?export=download&id=1afM8fsDVVf6SLVZPee5I3FHty9ygYUZd",
  },
  {
    name: "Interview Blueprint (English) - Success Darpan",
    link: "https://drive.google.com/uc?export=download&id=17wbIovIwfjg6nAfqRaIV0WTyLxBOGqBc",
  },
  {
    name: "English Grammer (English) - Success Darpan",
    link: "https://drive.google.com/uc?export=download&id=1whVpMVIkfcAf6CgusRHzH3ZAGQwQqYZc",
  },
  {
    name: "1000 Verb Forms (English) - Success Darpan",
    link: "https://drive.google.com/uc?export=download&id=1Qz78pft2LY4C8bYf-ioWh-k1gSmXWoN-",
  },
  {
    name: "Email Writing Ebook - Success Darpan",
    link: "https://drive.google.com/uc?export=download&id=1AUzJgW7Zi5F4yjqTrKpoeUHmH4ldKEW0",
  },
  {
    name: "One word Substitution (Hindi) - Success Darpan",
    link: "https://drive.google.com/uc?export=download&id=1nj0sNyvoxRRL0VZZ-QHj707_aJOBWg8a",
  },
  {
    name: "Idioms and Phrases (Hindi) - Success Darpan",
    link: "https://drive.google.com/uc?export=download&id=1ZBpQHSXWU4KNMTKPuy2nCqlfolmsW8FW",
  },
  {
    name: "Antonyms and Synonyms (Hindi) - Success Darpan",
    link: "https://drive.google.com/uc?export=download&id=1G6XicebgbooB_uMkXs9TgwIHxO0LaFcR",
  },
  {
    name: "Interview Blueprint Ebook (Hindi) - Success Darpan",
    link: "https://drive.google.com/uc?export=download&id=1nnW_0cFqA2sbU_Xe3S2lZ2ORM_6nhaUM",
  },
  {
    name: "Spoken English Ebook (Hindi) - Success Darpan",
    link: "https://drive.google.com/uc?export=download&id=1YtfNvZuIiMeJQ-UqYr45-H_TUENtajvp",
  },
  {
    name: "Verb Form Vocab Hindi Meaning (Hindi) - Success Darpan",
    link: "https://drive.google.com/uc?export=download&id=1NrEbbJuZ-iheAAX2qwFuTi3Cu45Nn8vf",
  },
  {
    name: "Basic Voabulary Ebook (Hindi) - Success Darpan",
    link: "https://drive.google.com/uc?export=download&id=1VtL8KioJt2c-2Uea4w-07bN2B1KBp0kL",
  },
  {
    name: "Tense with Exercises (Hindi) - Success Darpan",
    link: "https://drive.google.com/uc?export=download&id=10kYOZSj5jyozCqt2IS0PvpexiOQYVEH1",
  },
  {
    name: "English Grammar Ebook (Hindi) - Success Darpan",
    link: "https://drive.google.com/uc?export=download&id=1kEzhTI5qbmrXlcodMGmleMd-YwSLC2YD",
  },
  {
    name: "3000 Daily Use Sentences with Pronunciation (Hindi) - Success Darpan",
    link: "https://drive.google.com/uc?export=download&id=1JSkHYJZJ5tLwBq_rikQgnfxycd71PleQ",
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
