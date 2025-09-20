import React from "react";
import Layout from "./Layout.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Showreels from "./Pages/Showreels/Showreels.jsx";
import Clients from "./Pages/Clients/Clients.jsx";
import Digital from "./Pages/Digital/Digital.jsx";
import Contact from "./Pages/Contact/Contact.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="showreels" element={<Showreels />} />
        <Route path="clients" element={<Clients />} />
        <Route path="digital" element={<Digital />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
