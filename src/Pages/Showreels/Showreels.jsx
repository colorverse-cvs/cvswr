// pages/Showreels.jsx
import React, { useRef, useState } from "react";
import { reels } from "../../components/Showreel/Showreel";
import "../../components/Showreel/Showreel.css";
import "./Showreels.css";
// import VideoShowcase from "../../components/VideoShowcase/VideoShowcase";
import ProjectStart from "../../components/ProjectStart/ProjectStart";
import AiGenerated from "../../components/AiGenerated/AiGenerated";
import EnquiryForm from "../../components/EnquiryForm/EnquiryForm"; 

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

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Showreels = () => {
  const videoRefs = useRef([]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
const swiperRef = useRef(null);


  // ✅ State for Enquiry Form
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const openEnquiry = () => setIsEnquiryOpen(true);
  const closeEnquiry = () => setIsEnquiryOpen(false);

  return (
    <div className="showreels-page">
      {/* Heading */}
      <div className="container">
        <div className="section-heading1">
          <h2 className="page-title">
            Creative <span> Reels</span>
          </h2>
          <p>
            Dive into our full collection of reels that <span>inspire</span>,{" "}
            <span>engage</span>, and <span>elevate brands</span>.
          </p>
          <div className="heading-underline"></div>
        </div>

        {/* ✅ Swiper for Reels */}
        <div className="showreel-swiper-wrapper">
          <div
            ref={prevRef}
            className="showreels-custom-button showreels-custom-prev"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </div>
          <div
            ref={nextRef}
            className="showreels-custom-button showreels-custom-next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
            </svg>
          </div>

          <Swiper
           onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            pagination={{ clickable: true }}
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

    {/* YouTube embed with sound */}
    <iframe
      ref={(el) => (videoRefs.current[index] = el)}
      className="reel-video"
      src={`${reel.videoUrl}?enablejsapi=1&autoplay=0&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1&playsinline=1&loop=1&playlist=${reel.videoUrl.split("/embed/")[1]}`}
      title={`YouTube video ${reel.id}`}
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
      onMouseEnter={() => {
        const iframe = videoRefs.current[index];
        if (iframe && iframe.contentWindow) {
          iframe.contentWindow.postMessage(
            JSON.stringify({ event: "command", func: "unMute", args: [] }),
            "*"
          );
          iframe.contentWindow.postMessage(
            JSON.stringify({ event: "command", func: "playVideo", args: [] }),
            "*"
          );
        }
        if (swiperRef.current?.autoplay) swiperRef.current.autoplay.stop();
      }}
      onMouseLeave={() => {
        const iframe = videoRefs.current[index];
        if (iframe && iframe.contentWindow) {
          iframe.contentWindow.postMessage(
            JSON.stringify({ event: "command", func: "pauseVideo", args: [] }),
            "*"
          );
          iframe.contentWindow.postMessage(
            JSON.stringify({ event: "command", func: "mute", args: [] }),
            "*"
          );
        }
        if (swiperRef.current?.autoplay) swiperRef.current.autoplay.start();
      }}
    ></iframe>

    <div className="action-buttons">
      <div className="icon-btn"><FaHeart /></div>
      <div className="icon-btn"><FaRegComment /></div>
      <div className="icon-btn"><FaShare /></div>
    </div>

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

            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </div>
{/* 
      <section>
        <div>
          <div className="section-heading1">
            <h2 className="page-title">
              AI Generated<span> Videos</span>
            </h2>
            <p>
              Explore our collection of <span>AI-powered</span> videos that{" "}
              <span>captivate</span>, <span>innovate</span>, and{" "}
              <span>transform storytelling</span>.
            </p>
            <div className="heading-underline"></div>
          </div>

          <VideoShowcase showHeader={false} showButton={false} />
        </div>
      </section> */}

      <section>
        <AiGenerated/>
      </section>

      {/* ✅ Perfect Control Section */}
      <section className="perfect-control-section">
        <div className="illustration">
          <img
            className="responsive-img"
            src={perfectimg}
            alt="Perfect Control"
          />
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

          {/* ✅ Click to open enquiry form */}
          <button className="btn-enquiry" onClick={openEnquiry}>
            Get Started
          </button>
        </div>
      </section>

      <ProjectStart
        title={<>We Design, Build <br /> and Elevate</>}
        buttonLabel="Contact Us"
      />

      {/* ✅ Enquiry Form Popup */}
      <EnquiryForm isOpen={isEnquiryOpen} onClose={closeEnquiry} />
    </div>
  );
};

export default Showreels;
