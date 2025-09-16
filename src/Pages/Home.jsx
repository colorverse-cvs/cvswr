import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import ServicesCarousel from '../components/ServicesCarousel/ServicesCarousel';
import AboutUS from '../components/AboutUs/AboutUs'
import ProjectStart from '../components/ProjectStart/ProjectStart'
import Testimonial from '../components/Testimonial/Testimonial'

function Home() {
  return (
    <>
      <HeroSection/>
      <ServicesCarousel/>
      <AboutUS/>
      <Testimonial/>
      <ProjectStart/>
    </>
  );
}

export default Home;
