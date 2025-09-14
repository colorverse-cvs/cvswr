import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './ServicesCarousel.css';

const services = [
  {
    title: 'Design',
    description: 'Lorem ipsum dolor sit amet, conse adipiscing elit. Curabi sed metus id et viverra augue.',
    icon: '🖌️',
    bgColor: '#F4B426',
    moreInfo: 'Our design service includes UX research, wireframing, prototyping, and high-fidelity UI design.',
  },
  {
    title: 'Development',
    description: 'Lorem ipsum dolor sit amet, conse adipiscing elit. Curabi sed metus id et viverra augue.',
    icon: '🧩',
    bgColor: '#F3542A',
    moreInfo: 'We develop full-stack applications using modern frameworks and best practices.',
  },
  {
    title: 'Testing & QA',
    description: 'Lorem ipsum dolor sit amet, conse adipiscing elit. Curabi sed metus id et viverra augue.',
    icon: '☑️',
    bgColor: '#025F78',
    moreInfo: 'Our QA team ensures your product is bug-free through automation and manual testing.',
  },
  {
    title: 'Deployment',
    description: 'Lorem ipsum dolor sit amet, conse adipiscing elit. Curabi sed metus id et viverra augue.',
    icon: '🚀',
    bgColor: '#3C40C6',
    moreInfo: 'We handle CI/CD pipelines, server configuration, and post-deployment monitoring.',
  },
];

const ServicesCarousel = () => {
  const swiperRef = useRef(null);
  const [selectedService, setSelectedService] = useState(null);

const stopAutoplay = () => {
  const swiper = swiperRef.current?.swiper;
  if (swiper && swiper.autoplay?.running) {
    swiper.autoplay.stop();

    swiper.setTransition(0);
    if (swiper.wrapperEl) {
      swiper.wrapperEl.style.transitionDuration = '0ms';
    }
  }
};


  const startAutoplay = () => {
    const swiper = swiperRef.current?.swiper;
    if (swiper?.autoplay) swiper.autoplay.start();
  };


  useEffect(() => {
    if (selectedService) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  }, [selectedService]);

  const handleCardClick = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };
  

  return (
    <div className="services-carousel-container">
 <Swiper
  ref={swiperRef}
  modules={[Pagination, Autoplay]}
  spaceBetween={40}
  slidesPerView={3}
  loop={true}
  speed={6000} 
  autoplay={{
    delay: 0, 
    disableOnInteraction: false,
  }}
  pagination={{ clickable: true }}
  
>

        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div
              className="service-card"
              onMouseEnter={stopAutoplay}
              onMouseLeave={() => {
                if (!selectedService) startAutoplay();
              }}
              onClick={() => handleCardClick(service)}
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

      {selectedService && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedService.title}</h2>
            <p>{selectedService.moreInfo}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesCarousel;
