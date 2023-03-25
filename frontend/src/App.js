import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Blogs from "./pages/Blogs/Blogs";
import TreesCount from "./pages/TreesCount/TreesCount";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import About from "./pages/About/About";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/TreesCount" element={<TreesCount />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
