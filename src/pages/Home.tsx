import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="container mt-5">
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <Link to="/about" className="btn btn-primary">
        Go to About Page
      </Link>
    </div>
  );
};

export default Home;
