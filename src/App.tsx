import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // добавляем файл стилей

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
