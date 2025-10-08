import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./ServicesCarousel.css";

import Popup from "../../components/Popup/Popup";
import EnquiryForm from "../../components/EnquiryForm/EnquiryForm";
import ad3d from "../../assets/s6.jpg";
import graphic from "../../assets/s5.jpg";
import video from "../../assets/s4.jpg";
import voice from "../../assets/s3.jpg";
import social from "../../assets/s2.jpg";
import web from "../../assets/s1.jpg";

const services = [
  {
    title: "3D Product Advertisement",
    description:
      "Immersive and visually compelling ads using cutting-edge 3D modeling, rendering, animation.",
    icon: "🎨",
    bgColor: "#F4B426",
    image: ad3d,
    moreInfo:
      "We create photorealistic 3D visuals and animations for products, helping your brand stand out with cinematic-quality promotional videos and dynamic presentations."
  },
  {
    title: "Graphic Design",
    description:
      "Striking visuals to elevate your brand – logos, posters, social media content, and marketing.",
    icon: "🖌️",
    bgColor: "#F3542A",
    image: graphic,
    moreInfo:
      "Our designers craft visually engaging and consistent branding materials, ensuring every design aligns with your identity and marketing goals."
  },
  {
    title: "Video Editing",
    description:
      "From raw footage to polished, professional edits that tell your story and captivate audiences.",
    icon: "🎬",
    bgColor: "#025F78",
    image: video,
    moreInfo:
      "We handle color grading, transitions, motion graphics, and audio enhancements to deliver seamless, high-quality video content for all platforms."
  },
  {
    title: "Voice Over",
    description:
      "High-quality narration for ads, explainer videos, e-learning, and more by professional voice artists.",
    icon: "🎤",
    bgColor: "#3C40C6",
    image: voice,
    moreInfo:
      "Our team offers multiple languages, tones, and voice styles, ensuring your message connects emotionally and sounds professional in every context."
  },
  {
    title: "Social Media Design Packages",
    description:
      "Custom-designed posts, banners, and stories that make your brand shine across social platforms.",
    icon: "📱",
    bgColor: "#E84393",
    image: social,
    moreInfo:
      "We provide monthly creative packages tailored to your brand, ensuring consistent and eye-catching social presence that drives engagement."
  },
  {
    title: "Website Design",
    description:
      "Visually stunning, responsive, and user-friendly websites that elevate your online presence.",
    icon: "💻",
    bgColor: "#00B894",
    image: web,
    moreInfo:
      "We combine UX strategy, modern UI design, and responsive development to create sites that not only look great but also convert visitors into customers."
  }
];

const ServicesCarousel = () => {
  const swiperRef = useRef(null);
  const [selectedService, setSelectedService] = useState(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const stopAutoplay = () => {
    const swiper = swiperRef.current?.swiper;
    if (swiper && swiper.autoplay?.running) {
      swiper.autoplay.stop();
      swiper.setTransition(0);
      if (swiper.wrapperEl) {
        swiper.wrapperEl.style.transitionDuration = "0ms";
      }
    }
  };

  const startAutoplay = () => {
    const swiper = swiperRef.current?.swiper;
    if (swiper?.autoplay) swiper.autoplay.start();
  };

  useEffect(() => {
    if (selectedService) stopAutoplay();
    else startAutoplay();
  }, [selectedService]);

  return (
    <div className="services-carousel-container">
      <Swiper
        ref={swiperRef}
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        loop={true}
        speed={6000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          576: { slidesPerView: 1.3 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div
              className="service-card"
              onMouseEnter={stopAutoplay}
              onMouseLeave={() => {
                if (!selectedService) startAutoplay();
              }}
              onClick={() => setSelectedService(service)}
            >
              <div
                className="icon-container"
                style={{ backgroundColor: service.bgColor }}
              >
                <span className="icon">{service.icon}</span>
              </div>
              <div className="text-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Reusable Popup for Service Details */}
     <Popup
  isOpen={!!selectedService}
  onClose={() => setSelectedService(null)}
  title={selectedService?.title}
  alldescription={selectedService?.moreInfo}
  shortDescription={selectedService?.description}
  image={selectedService?.image}
  onEnquiry={() => {
    setSelectedService(null);
    setIsEnquiryOpen(true);
  }}
/>


      {/* Enquiry Form Popup */}
      <EnquiryForm
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </div>
  );
};

export default ServicesCarousel;
