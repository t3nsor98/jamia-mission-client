import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center"
      style={{
        backgroundColor: "#85FFBD",
        backgroundImage: "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)",
      }}
    >
      <h1 className="text-4xl font-bold mb-8">Home Page</h1>
      <div className="space-x-4">
        <Link to="/school">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            School
          </button>
        </Link>
        <Link to="/coaching">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Coaching
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
