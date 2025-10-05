// src/components/Testimonial.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./Testimonial.css";

import testimonial from "../../assets/testimonials.png";
import testimonials1 from "../../assets/testimonials1.png";
import testimonials2 from "../../assets/testimonials2.png";
import defaultAvatar from "../../assets/testimonials.png";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ullamcorper mattis lacus eu, ornare imperdiet men sana in condimentum...",
    name: "JAMES JOKOVIC",
    role: "IT CONSULTANT",
    image: testimonial,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ullamcorper mattis lacus eu, ornare imperdiet men sana in condimentum...",
    name: "SOPHIA SMITH",
    role: "PROJECT MANAGER",
    image: testimonials1,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ullamcorper mattis lacus eu, ornare imperdiet men sana in condimentum...",
    name: "LIAM JOHNSON",
    role: "UI/UX DESIGNER",
    image: testimonials2,
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial-section text-center">
      <p className="section-heading mt-md-5 mb-4">Testimony</p>
      <h2 className="fw-bold mb-md-5">What Do Our Clients Says <br /> About Us</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        className="testimonial-swiper"
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
          <div className="avatar-glow mx-auto mb-5">
  <div className="avatar-wrapper">
    <img
      src={item.image}
      alt={item.name}
      className="avatar"
      onError={(e) => (e.currentTarget.src = defaultAvatar)}
    />
  </div>
</div>


            <p className="testimonial-text mx-auto">{item.text}</p>

            <div className="author-info">
              <h6 className="mb-0 fw-bold mb-2">{item.name}</h6>
              <p className="text-secondary small">{item.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-pagination"></div>

      <div className="circle circle-left circle-lg"></div>
      <div className="circle circle-left circle-sm"></div>
      <div className="circle circle-left circle-xs"></div>
      <div className="circle circle-right circle-lg"></div>
      <div className="circle circle-right circle-sm"></div>
      <div className="circle circle-right circle-xs"></div>
    </section>
  );
};

export default Testimonial;
