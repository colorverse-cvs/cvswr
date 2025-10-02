// pages/Showreels.jsx
import React, { useRef } from "react";
import { reels } from "../../components/Showreel/Showreel";
import "../../components/Showreel/Showreel.css";
import "./Showreels.css";
import ProjectStart from "../../components/ProjectStart/ProjectStart";
import {
  FaHeart,
  FaRegComment,
  FaShare,
  FaHome,
  FaSearch,
  FaPlusSquare,
  FaVideo,
  FaUser,
  FaCheckCircle,
} from "react-icons/fa";
import perfectimg from "../../assets/reels.jpg";

// ✅ Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Showreels = () => {
  const videoRefs = useRef([]);

  return (
    <div className="showreels-page container">
      {/* Heading */}
      <div className="section-heading1">
        <h2 className="page-title">
          All <span>Creative Reels</span>
        </h2>
        <p className="page-subtitle">
          Dive into our full collection of reels that <span>inspire</span>,{" "}
          <span>engage</span>, and <span>elevate brands</span>.
        </p>
        <div className="heading-underline"></div>
      </div>

      {/* ✅ Swiper for Reels */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        pagination={{ clickable: true, el: ".swiper-pagination" }}
        className="showreel-swiper"
        breakpoints={{
          0: { slidesPerView: 1 },
          425: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 5 },
          1200: { slidesPerView: 6 },
        }}
      >
        {reels.map((reel, index) => (
          <SwiperSlide key={reel.id}>
            <div className="phone-frame">
              <div className="phone-notch">
                <div className="camera-dot"></div>
                <div className="speaker"></div>
              </div>

              <video
                ref={(el) => (videoRefs.current[index] = el)}
                controls
                autoPlay
                loop
                muted
                playsInline
                className="reel-video"
                onMouseEnter={() => videoRefs.current[index]?.play()}
                onMouseLeave={() => {
                  videoRefs.current[index]?.pause();
                  videoRefs.current[index].currentTime = 0;
                }}
              >
                <source src={reel.videoUrl} type="video/mp4" />
              </video>

              {/* Action Buttons */}
              <div className="action-buttons">
                <div className="icon-btn"><FaHeart /></div>
                <div className="icon-btn"><FaRegComment /></div>
                <div className="icon-btn"><FaShare /></div>
              </div>

              {/* Reel Info */}
              <div className="reel-info">
                <p className="username">@{reel.username}</p>
                <p className="caption">{reel.caption}</p>
                <p className="music">🎵 {reel.music}</p>
              </div>

              {/* Bottom Nav */}
              <div className="bottom-nav">
                <FaHome />
                <FaSearch />
                <FaPlusSquare />
                <FaVideo className="active" />
                <FaUser />
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* ✅ Swiper Controls (MUST be inside Swiper, not wrapped) */}
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>

      {/* ✅ Extra Section */}
      <section className="perfect-control-section">
        <div className="illustration">
          <img className="responsive-img" src={perfectimg} alt="Perfect Control" />
        </div>
        <div className="content">
          <h2>
            Let’s <span>Elevate Your Brand Today</span>
          </h2>
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
          <button className="cta-button">🚀 Get Started</button>
        </div>
      </section>

      {/* ✅ Project Start Section */}
      <ProjectStart
        title={<>We Design, Build <br /> and Elevate</>}
        buttonLabel="Contact Us"
      />
    </div>
  );
};

export default Showreels;
