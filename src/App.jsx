// App.jsx
import React from "react";
import Layout from "./Layout.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Showreels from "./Pages/Showreels.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Showreels" element={<Showreels />}/>
      </Route>
    </Routes>
  );
};

export default App;
