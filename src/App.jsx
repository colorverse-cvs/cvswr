import { useState } from 'react';
import './App.css';
import Header from "./Layout_Component/Header/Header";
import Footer from "./Layout_Component/Footer/Footer";
import Home from './Pages/Home';

function App() {
  return (
   <>
      <Header/>
      <Home/>
      <Footer/>
   </>
  );
}

export default App;
