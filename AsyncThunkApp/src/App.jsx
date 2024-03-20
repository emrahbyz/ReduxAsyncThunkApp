import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import SinglePage from "./components/SinglePage";
import Footer from "./components/Footer";
import Film from "./components/Film";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="single-page" element={<SinglePage />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Film />
      <Footer />

      <h1 className="text-3xl font-bold underline"></h1>
    </div>
  );
};

export default App;
