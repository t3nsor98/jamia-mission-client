import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/school">
        <button>School</button>
      </Link>
      <Link to="/coaching">
        <button>Coaching</button>
      </Link>
    </div>
  );
};

export default Home;
