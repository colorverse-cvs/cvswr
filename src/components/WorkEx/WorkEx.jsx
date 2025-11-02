import React from "react";
import "./WorkEx.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import workex1 from "../../assets/bmcm.jpg";
import workex2 from "../../assets/kalki.jpg";
import workex3 from "../../assets/emergency.jpg";
import workex4 from "../../assets/bmcm.jpg";
import workex5 from "../../assets/midan.jpg";
import workex6 from "../../assets/tehran.jpg";
import workex7 from "../../assets/yudra.jpg";
import workex8 from "../../assets/salar.jpg";
import workex9 from "../../assets/mp.jpg";
import workex10 from "../../assets/ls.jpg";

const WorkEx = () => {
  const works = [
    { img: workex1, title: "BMCM" },
    { img: workex2, title: "Kalki" },
    { img: workex3, title: "Emergency" },
    { img: workex4, title: "BMCM 2" },
    { img: workex5, title: "Midan" },
    { img: workex6, title: "Tehran" },
    { img: workex7, title: "Yudra" },
    { img: workex8, title: "Salar" },
    { img: workex9, title: "Giant Beasts" },
    { img: workex10, title: "LS Project" },
  ];

  return (
    <section className="workex-section">
      <div className="container">
        <div className="workex-wrapper">
          <div className="section-heading1">
            <h2 className="page-title">
              Bollywood <span>Work Experience</span>
            </h2>
            <p>
              A showcase of our cinematic journey — from <span>feature films</span>,{" "}
              <span>OTT originals</span>, and <span>music videos</span> to{" "}
              <span>commercials</span> that bring stories to life on screen.
            </p>
            <div className="heading-underline"></div>
          </div>

          <div className="workex-slider">
            <div className="workex-navigation">
              <div className="workex-button-prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </div>
              <div className="workex-button-next">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
                </svg>
              </div>
            </div>

            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              slidesPerView={5}
              spaceBetween={20}
              loop={true}
              navigation={{
                nextEl: ".workex-button-next",
                prevEl: ".workex-button-prev",
              }}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: { slidesPerView: 1 },
                480: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 5 },
              }}
              className="workex-swiper"
            >
              {works.map((work, index) => (
                <SwiperSlide key={index}>
                  <div className="workex-item">
                    <img src={work.img} alt={work.title} className="workex-img" />
                    <p className="workex-title">{work.title}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkEx;
