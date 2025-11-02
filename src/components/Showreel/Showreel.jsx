import React, { useRef, useEffect } from "react";
import "./Showreel.css";
import {
  FaHeart,
  FaRegComment,
  FaShare,
  FaHome,
  FaSearch,
  FaPlusSquare,
  FaVideo,
  FaUser,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

// ✅ YouTube Reels
export const reels = [
  { id: 1, videoUrl: "https://www.youtube.com/embed/NjbvtPvckes" },
  { id: 2, videoUrl: "https://www.youtube.com/embed/O9AUZd5A7LA" },
  { id: 3, videoUrl: "https://www.youtube.com/embed/3v6ZQe1epE0" },
  { id: 4, videoUrl: "https://www.youtube.com/embed/01gEgJ5Dc1w" },
  { id: 5, videoUrl: "https://www.youtube.com/embed/cwWk7_9zdlg" },
  { id: 6, videoUrl: "https://www.youtube.com/embed/j_p6InjwQN4" },
  { id: 7, videoUrl: "https://www.youtube.com/embed/vUvVgNAq4ko" },
  { id: 8, videoUrl: "https://www.youtube.com/embed/CCOKiSpPOfQ" },
  { id: 9, videoUrl: "https://www.youtube.com/embed/7frwpPVoThI" },
  { id: 10, videoUrl: "https://www.youtube.com/embed/CMN6jE0sYgg" },
  { id: 11, videoUrl: "https://www.youtube.com/embed/vTsHN7WPD-0" },
  { id: 12, videoUrl: "https://www.youtube.com/embed/6ytsbJaMzBc" },
  { id: 13, videoUrl: "https://www.youtube.com/embed/GbPVtbk8vcY" },
  { id: 14, videoUrl: "https://www.youtube.com/embed/qpNjoSsnuBU" },




];

const Showreel = () => {
  const iframeRefs = useRef([]);
  const navigate = useNavigate();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;
    if (prevRef.current && nextRef.current) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      if (swiper.navigation) {
        try {
          swiper.navigation.destroy();
        } catch (e) { }
      }
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  // ✅ Control YouTube video via postMessage API
  const controlVideo = (iframe, command) => {
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: command, args: [] }),
        "*"
      );
    }
  };

  return (
    <>
      <h2 className="section-heading text-center pb-md-4 pt-md-5">Showreel</h2>
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-12 col-lg-4 d-flex flex-column justify-content-center text-center text-md-start mb-4 mb-md-0 agency-left">
            <h3 className="agency-title">
              <span className="highlight">Creative Reels</span> That Inspire
            </h3>
            <p className="agency-text">
              We create <strong>visually stunning, scroll-stopping reels</strong> that elevate your brand presence.
              From smooth animations to high-quality edits, our reels are designed to{" "}
              <strong>engage, convert, and impress</strong>.
            </p>
            <ul className="agency-list">
              <li>High-Quality Video Production</li>
              <li>Trend-Focused & Brand-Aligned</li>
              <li>Optimized for Engagement</li>
            </ul>
            <div className="d-flex justify-content-md-left">
              <button
                className="btn-enquiry showreel-btn mt-3"
                onClick={() => navigate("/showreels")}
              >
                See All
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-12 col-lg-8" style={{ overflow: "visible" }}>
            <div className="showreel-swiper-wrapper">
              {/* Navigation Buttons */}
              <button ref={prevRef} className="showreel-custom-swiper-button custom-prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </button>
              <button ref={nextRef} className="showreel-custom-swiper-button custom-next">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
                </svg>
              </button>

              {/* Swiper */}
              <Swiper
                onSwiper={(s) => (swiperRef.current = s)}
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={4}
                spaceBetween={20}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                className="showreel-swiper"
                breakpoints={{
                  0: { slidesPerView: 1 },
                  425: { slidesPerView: 1 },
                  768: { slidesPerView: 3 },
                  992: { slidesPerView: 3 },
                  1200: { slidesPerView: 4 },
                }}
              >
                {reels.map((reel, index) => (
                  <SwiperSlide key={reel.id}>
                    <div className="phone-frame">
                      <div className="phone-notch">
                        <div className="camera-dot"></div>
                        <div className="speaker"></div>
                      </div>

                      {/* ✅ YouTube Embed behaving like <video> */}
                      <iframe
                        ref={(el) => (iframeRefs.current[index] = el)}
                        className="reel-video"
                        src={`${reel.videoUrl}?enablejsapi=1&autoplay=0&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&iv_load_policy=3&fs=0&disablekb=1&playsinline=1&playlist=${reel.videoUrl.split("/embed/")[1]}`}
                        title={`YouTube video ${reel.id}`}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        onMouseEnter={() => {
                          const iframe = iframeRefs.current[index];
                          controlVideo(iframe, "unMute"); // 🔊 Unmute on hover
                          controlVideo(iframe, "playVideo"); // ▶️ Play
                          if (swiperRef.current?.autoplay) swiperRef.current.autoplay.stop();
                        }}
                        onMouseLeave={() => {
                          const iframe = iframeRefs.current[index];
                          controlVideo(iframe, "pauseVideo");
                          controlVideo(iframe, "mute"); // 🔇 Mute again
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
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Showreel;
