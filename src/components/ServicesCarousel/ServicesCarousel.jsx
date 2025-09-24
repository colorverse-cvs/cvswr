import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./ServicesCarousel.css";

import Popup from "../../components/Popup/Popup";
import EnquiryForm from "../../components/EnquiryForm/EnquiryForm";

const services = [
  {
    title: "Design",
    description:
      "Lorem ipsum dolor sit amet, conse adipiscing elit. Curabi sed metus id et viverra augue.",
    icon: "🖌️",
    bgColor: "#F4B426",
    moreInfo:
      "Our design service includes UX research, wireframing, prototyping, and high-fidelity UI design.",
  },
  {
    title: "Development",
    description:
      "Lorem ipsum dolor sit amet, conse adipiscing elit. Curabi sed metus id et viverra augue.",
    icon: "🧩",
    bgColor: "#F3542A",
    moreInfo:
      "We develop full-stack applications using modern frameworks and best practices.",
  },
  {
    title: "Testing & QA",
    description:
      "Lorem ipsum dolor sit amet, conse adipiscing elit. Curabi sed metus id et viverra augue.",
    icon: "☑️",
    bgColor: "#025F78",
    moreInfo:
      "Our QA team ensures your product is bug-free through automation and manual testing.",
  },
  {
    title: "Deployment",
    description:
      "Lorem ipsum dolor sit amet, conse adipiscing elit. Curabi sed metus id et viverra augue.",
    icon: "🚀",
    bgColor: "#3C40C6",
    moreInfo:
      "We handle CI/CD pipelines, server configuration, and post-deployment monitoring.",
  },
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
        description={selectedService?.moreInfo}
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
