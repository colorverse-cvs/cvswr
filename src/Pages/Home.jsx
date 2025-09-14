import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import ServicesCarousel from '../components/ServicesCarousel/ServicesCarousel';
import AboutUS from '../components/AboutUs/AboutUs'
import ProjectStart from '../components/ProjectStart/ProjectStart'

function Home() {
  return (
    <>
      <HeroSection/>
      <ServicesCarousel/>
      <AboutUS/>
      <ProjectStart/>
    </>
  );
}

export default Home;
