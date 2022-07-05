import React from "react";
import "./index.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Error from "./components/Error";
import Logement from "./pages/Logement";

class Routing extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/Logement/:id" element={<Logement />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
}

export default Routing;
