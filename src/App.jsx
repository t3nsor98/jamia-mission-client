import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Message from "./components/Message";
import Notice from "./components/Notice";
import Count from "./components/Count";
import Gallery from "./components/Gallery";
import Schedule from "./components/Schedule";

function App() {
  return (
    <Router>
      <Header />
      <Hero />
      <Notice />
      <Message />
      <Count />
      <Schedule />
      <Gallery />
      <div className="app">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
