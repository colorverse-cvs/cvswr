import React, { useRef } from "react";
import "./Showreel.css";
import { FaHeart, FaRegComment, FaShare, FaHome, FaSearch, FaPlusSquare, FaVideo, FaUser } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

export const reels = [
  { id: 1, videoUrl: "https://video.wixstatic.com/video/61fec8_624e060ddeca413d9547a0dd15ee3a4e/1080p/mp4/file.mp4", username: "john_doe", caption: "Exploring the city! 🌆 #Travel", music: "City Vibes - DJ Mix" },
  { id: 2, videoUrl: "https://video.wixstatic.com/video/61fec8_89d8b62469144162baa84953827d2e48/1080p/mp4/file.mp4", username: "nature_lover", caption: "Nature is so peaceful 🍃", music: "Calm Breeze - LoFi Beats" },
  { id: 3, videoUrl: "https://video.wixstatic.com/video/61fec8_50b1558380cc4515801d872b61df8259/1080p/mp4/file.mp4", username: "tech_guy", caption: "Testing the new phone! 📱", music: "Techno Beats - DJ Pro" },
  { id: 4, videoUrl: "https://video.wixstatic.com/video/61fec8_4adcfc24a72f4f2c9f873fb834a051c1/1080p/mp4/file.mp4", username: "foodie", caption: "Delicious dinner tonight! 🍲", music: "Chill Vibes - LoFi" },
  { id: 5, videoUrl: "https://video.wixstatic.com/video/61fec8_4adcfc24a72f4f2c9f873fb834a051c1/1080p/mp4/file.mp4", username: "gamer", caption: "Victory Royale! 🎮", music: "Epic Soundtrack" },
  { id: 6, videoUrl: "https://video.wixstatic.com/video/61fec8_50b1558380cc4515801d872b61df8259/1080p/mp4/file.mp4", username: "traveler", caption: "On the beach 🏖️", music: "Ocean Waves" },
  { id: 7, videoUrl: "https://video.wixstatic.com/video/61fec8_89d8b62469144162baa84953827d2e48/1080p/mp4/file.mp4", username: "nature_lover", caption: "Nature is so peaceful 🍃", music: "Calm Breeze - LoFi Beats" },
];

const Showreel = () => {
  const videoRefs = useRef([]);
  const navigate = useNavigate();

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
              <li>🎥 High-Quality Video Production</li>
              <li>✨ Trend-Focused & Brand-Aligned</li>
              <li>📈 Optimized for Engagement</li>
            </ul>
            <button className="agency-btn mt-3" onClick={() => navigate("/showreels")}>
              See All
            </button>
          </div>

          {/* Right Section – Swiper */}
          <div className="col-12 col-md-8">
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              loop={true} // ✅ Keep looping
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{ clickable: true }} // ✅ Always show dots
              modules={[Autoplay, Pagination]}
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
                      onMouseEnter={() => videoRefs.current[index]?.play()}
                      onMouseLeave={() => {
                        videoRefs.current[index].pause();
                        videoRefs.current[index].currentTime = 0;
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
                      <p className="username">@{reel.username}</p>
                      <p className="caption">{reel.caption}</p>
                      <p className="music">🎵 {reel.music}</p>
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
    </>
  );
};

export default Showreel;
