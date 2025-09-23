import React, { useState } from "react";
import ProjectStart from "../../components/ProjectStart/ProjectStart";
import Popup from "../../components/Popup/Popup";
import EnquiryForm from "../../components/EnquiryForm/EnquiryForm";
import "./Digital.css";
import ProductAdvertisement from "../../assets/s6.jpg";
import GraphicDesign from "../../assets/s5.jpg";
import VideoEditing from "../../assets/s4.jpg";
import VoiceOver from "../../assets/s3.jpg";
import SocialMedia from "../../assets/s2.jpg";
import WebsiteDesign from "../../assets/s1.jpg";




import { FaCubes, FaPaintBrush, FaVideo, FaMicrophone, FaFacebookF, FaGlobe } from "react-icons/fa";

const services = [
  { icon: <FaCubes />,
     title: "3D Product Advertisement",
     description: "Immersive and visually compelling ads with cutting-edge 3D modeling, texturing, and animation.", 
     alldescription: "Our 3D product advertisement service elevates your product marketing by creating immersive and visually compelling ads. We use cutting-edge 3D modeling, texturing, and animation to bring your products to life",
     image: ProductAdvertisement
    },
  { icon: <FaPaintBrush />,
     title: "Graphic Design",
     description: "Striking visuals to elevate your brand – logos, banners, infographics, and social media content.",
     alldescription: "Our video editing service transforms raw footage into polished, professional content that captivates and engages your audience. We handle every aspect of the editing process",
     image: GraphicDesign
     },
  { icon: <FaVideo />,
    title: "Video Editing", 
    description: "From raw footage to polished, engaging content. Professional edits that captivate audiences.",
    alldescription: "Our Social Media Design Packages offer comprehensive solutions for creating eye-catching and effective social media content. Each package includes custom-designed graphics for posts, stories, and banners",
    image: VideoEditing
 },
  { icon: <FaMicrophone />,
    title: "Voice Over", 
    description: "High-quality narration for commercials, videos, e-learning, and more by talented voice artists.",
    alldescription: "Our graphic design and social media design services deliver visually striking and impactful content that enhances your brand's presence online. We craft custom graphics, including logos, banners, infographics, and social media posts",
    image: VoiceOver
  },
  { icon: <FaFacebookF />, 
    title: "Social Media Design Packages", 
    description: "Custom posts, banners, and story graphics that make your brand shine on all platforms.",
    alldescription: "Our voice-over services provide professional, high-quality narration that enhances your audio and visual content. Whether for commercials, explainer videos, e-learning modules, or any other project, our talented voice artists deliver clear, engaging, and expressive voice work",
    image: SocialMedia
 },
  { icon: <FaGlobe />, 
    title: "Website Design", 
    description: "Visually stunning, user-friendly websites that drive conversions and elevate your online presence.",
    alldescription:"Our website design service creates visually stunning and highly functional websites tailored to your brand's needs. We focus on delivering user-friendly designs that enhance user experience and drive conversions",
    image: WebsiteDesign

   },
];

function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <div className="services-page">
      <section className="services-list container py-5">
        <div className="services-row mt-5">
          {services.map((service, idx) => (
            <div key={idx} className="service-item text-center my-4">
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button
                className="btn-enquiry"
                onClick={() => setSelectedService(service)}
              >
                View More
              </button>
            </div>
          ))}
        </div>
      </section>

      <ProjectStart
        title={<>Start Your Creative <br /> Journey With Us</>}
        buttonLabel="Contact Us"
      />

      {/* Popup for Service Details */}
      <Popup
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title}
        alldescription={selectedService?.alldescription}
        image={selectedService?.image}
        onEnquiry={() => {
          setSelectedService(null);
          setIsEnquiryOpen(true);
        }}
      />

      {/* Enquiry Form */}
      <EnquiryForm
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </div>
  );
}

export default Services;
