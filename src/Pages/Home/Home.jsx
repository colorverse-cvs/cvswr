import React, { useState } from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import ServicesCarousel from '../../components/ServicesCarousel/ServicesCarousel';
import AboutUS from '../../components/AboutUs/AboutUs';
import ProjectStart from '../../components/ProjectStart/ProjectStart';
import Testimonial from '../../components/Testimonial/Testimonial';
import Showreel from '../../components/Showreel/Showreel';
// import VideoShowcase from '../../components/VideoShowcase/VideoShowcase';
import { FaCheckCircle } from "react-icons/fa";
import perfectimg from "../../assets/reels.jpg";
import EnquiryForm from "../../components/EnquiryForm/EnquiryForm"; 

function Home() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const openEnquiry = () => setIsEnquiryOpen(true);
  const closeEnquiry = () => setIsEnquiryOpen(false);

  return (
    <>
      <HeroSection />
      <ServicesCarousel />
      <AboutUS />
      <Showreel />
      {/* <VideoShowcase /> */}

      <section className="perfect-control-section">
        <div className="illustration">
          <img className="responsive-img" src={perfectimg} alt="Perfect Control" />
        </div>
        <div className="content">
          <h2>Let’s <span>Elevate Your Brand Today</span></h2>
          <p className="subtitle">
            Building lasting connections while delivering exceptional experiences.
          </p>
          <p className="description">
            Elevate your brand with creativity, precision, and innovation. Our
            solutions are designed to captivate audiences and create unforgettable
            experiences.
          </p>
          <div className="features">
            <p><FaCheckCircle className="icon" /> Seamless User Experience</p>
            <p><FaCheckCircle className="icon" /> Scalable & Flexible Design</p>
            <p><FaCheckCircle className="icon" /> Optimized Performance</p>
            <p><FaCheckCircle className="icon" /> Modern & Trendy Look</p>
          </div>

          <button className="btn-enquiry" onClick={openEnquiry}>
            Get Started
          </button>
        </div>
      </section>

      <EnquiryForm isOpen={isEnquiryOpen} onClose={closeEnquiry} />

      <Testimonial />
      <ProjectStart />
    </>
  );
}

export default Home;
