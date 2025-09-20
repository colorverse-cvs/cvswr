import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import ServicesCarousel from '../../components/ServicesCarousel/ServicesCarousel';
import AboutUS from '../../components/AboutUs/AboutUs'
import ProjectStart from '../../components/ProjectStart/ProjectStart'
import Testimonial from '../../components/Testimonial/Testimonial'
import Showreel from '../../components/Showreel/Showreel'
import VideoShowcase from '../../components/VideoShowcase/VideoShowcase'


function Home() {
  return (
    <>
      <HeroSection/>
      <ServicesCarousel/>
      <AboutUS/>
      <Showreel/>
      <VideoShowcase/>
      <Testimonial/>
      <ProjectStart/>
    </>
  );
}

export default Home;
