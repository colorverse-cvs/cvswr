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
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

import reel1 from "../../assets/RegulerReels/Suhani-Magic-With-Mortal-Edit.mp4";
import reel2 from "../../assets/RegulerReels/Futurehome-Edit.mp4";
import reel3 from "../../assets/RegulerReels/Sagar-Sir-Diet-Edit.mp4";
import reel4 from "../../assets/RegulerReels/Suhani-Mera-Kharcha-dhar-Edit.mp4";
import reel5 from "../../assets/RegulerReels/Kudige-Sir-Maclaren-Edit.mp4";
import reel6 from "../../assets/RegulerReels/Dr.Shivani-Skincare-Edit.mp4";
import reel7 from "../../assets/RegulerReels/Volkswagen-Ppf-Edit.mp4";
import reel8 from "../../assets/RegulerReels/Wellness-Wave-Edit.mp4";
import reel9 from "../../assets/RegulerReels/Rashi-Chaudhari-Paytm-Edit.mp4";
import reel10 from "../../assets/RegulerReels/Rashi-Chaudhari-Zomunk-Edit.mp4";
import reel11 from "../../assets/RegulerReels/Metrology-Law-India-Edit.mp4";
import reel12 from "../../assets/RegulerReels/Lawsakhi-Digital-Arrest-Edit.mp4";
import reel13 from "../../assets/RegulerReels/Ishita-Arun-Ganpati-Edit.mp4";
import reel14 from "../../assets/RegulerReels/grv-jajk-wcx.mp4";




export const reels = [
  { id: 1, videoUrl: reel1, username: "", caption: "", music: "" },
  { id: 2, videoUrl: reel2, username: "", caption: "", music: "" },
  { id: 3, videoUrl: reel3, username: "", caption: "", music: "" },
  { id: 4, videoUrl: reel4, username: "", caption: "", music: "" },
  { id: 5, videoUrl: reel5, username: "", caption: "", music: "" },
  { id: 6, videoUrl: reel6, username: "", caption: "", music: "" },
  { id: 7, videoUrl: reel7, username: "", caption: "", music: "" },
  { id: 8, videoUrl: reel8, username: "", caption: "", music: "" },
  { id: 9, videoUrl: reel9, username: "", caption: "", music: "" },
  { id: 10, videoUrl: reel10, username: "", caption: "", music: "" },
  { id: 11, videoUrl: reel11, username: "", caption: "", music: "" },
  { id: 12, videoUrl: reel12, username: "", caption: "", music: "" },
  { id: 13, videoUrl: reel13, username: "", caption: "", music: "" },
  { id: 14, videoUrl: reel14, username: "", caption: "", music: "" },


];

const Showreel = () => {
  const videoRefs = useRef([]);
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

  return (
    <>
      <h2 className="section-heading text-center pb-md-4 pt-md-5">Showreel</h2>
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-12 col-md-4 d-flex flex-column justify-content-center text-center text-md-start mb-4 mb-md-0 agency-left">
            <h3 className="agency-title">
              <span className="highlight">Creative Reels</span> That Inspire
            </h3>
            <p className="agency-text">
              We create <strong>visually stunning, scroll-stopping reels</strong> that elevate your brand presence.
              From smooth animations to high-quality edits, our reels are designed to <strong>engage, convert, and impress</strong>.
            </p>
            <ul className="agency-list">
              <li> High-Quality Video Production</li>
              <li> Trend-Focused & Brand-Aligned</li>
              <li> Optimized for Engagement</li>
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
          <div className="col-12 col-md-8" style={{ overflow: "visible" }}>
            <div className="showreel-swiper-wrapper">
              {/* Custom buttons */}
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
                  425: { slidesPerView: 2 },
                  768: { slidesPerView: 2 },
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

                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        className="reel-video"
                        muted
                        onMouseEnter={() => {
                          const video = videoRefs.current[index];
                          if (video) {
                            video.muted = false; // Unmute on hover
                            video.play();
                          }
                          // Stop Swiper autoplay
                          if (swiperRef.current && swiperRef.current.autoplay) {
                            swiperRef.current.autoplay.stop();
                          }
                        }}
                        onMouseLeave={() => {
                          const video = videoRefs.current[index];
                          if (video) {
                            video.muted = true; // Mute again
                            video.pause();
                            video.currentTime = 0;
                          }
                          // Resume Swiper autoplay
                          if (swiperRef.current && swiperRef.current.autoplay) {
                            swiperRef.current.autoplay.start();
                          }
                        }}
                      >
                        <source src={reel.videoUrl} type="video/mp4" />
                      </video>


                      <div className="action-buttons">
                        <div className="icon-btn"><FaHeart /></div>
                        <div className="icon-btn"><FaRegComment /></div>
                        <div className="icon-btn"><FaShare /></div>
                      </div>

                      <div className="reel-info">
                        <p className="username">{reel.username}</p>
                        <p className="caption">{reel.caption}</p>
                        <p className="music">{reel.music}</p>
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
