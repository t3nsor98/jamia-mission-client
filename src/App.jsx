import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import School from "./pages/School";
import Coaching from "./pages/Coaching";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/school" element={<School />} />
          <Route path="/coaching" element={<Coaching />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
