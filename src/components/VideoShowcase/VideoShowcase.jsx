import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./VideoShowcase.css";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

// ✅ Import local video files
import bigVideo1 from "../../assets/AIREELS/Mahindra-Car-Ai.mp4";
import bigVideo2 from "../../assets/AIREELS/Mahindra-Car-Ai.mp4";
import topRightVideo from "../../assets/AIREELS/Mahindra-Car-Ai.mp4";
import bottomLeftVideo from "../../assets/AIREELS/Mahindra-Car-Ai.mp4";
import bottomRightVideo from "../../assets/AIREELS/Mahindra-Car-Ai.mp4";

const bigVideos = [
  {
    src: bigVideo1,
    title: "Sketchable Plus",
    description: "Streamlined controls & workflow",
  },
  {
    src: bigVideo2,
    title: "Sketchable Pro",
    description: "More brushes & layers",
  },
];

const rightVideos = {
  topRight: {
    src: topRightVideo,
    title: "Microsoft 365",
  },
  bottomLeft: {
    src: bottomLeftVideo,
    text: "Futurama - New season",
  },
  bottomRight: {
    src: bottomRightVideo,
    text: "You can now view Snaps on your computer",
  },
};

const VideoShowcase = ({ showHeader = true, showButton = true }) => {
  const navigate = useNavigate();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="video-showcase container">
      {/* Header */}
      {showHeader && (
        <div className="text-center fade-in">
          <h2 className="fw-bold section-heading pt-5 pb-md-4 gradient-text">
            AI Generated Video
          </h2>
        </div>
      )}

      <div className="row g-4 align-items-start mt-1">
        {/* Left Big Video Carousel */}
        <div className="col-lg-7">
          <div ref={prevRef} className="video-showcase-custom-button video-showcase-custom-prev">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </div>
          <div ref={nextRef} className="video-showcase-custom-button video-showcase-custom-next">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
            </svg>
          </div>

          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            className="big-swiper"
          >
            {bigVideos.map((video, i) => (
              <SwiperSlide key={i}>
                <div className="banner-card big-card position-relative overflow-hidden">
                  <video
                    src={video.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="rounded video-iframe w-100 h-100"
                  />
                  <div className="banner-overlay d-flex flex-column justify-content-end p-4">
                    <h2 className="text-white mb-2">{video.title}</h2>
                    <p className="text-white-50 mb-3">{video.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Small Videos */}
        <div className="col-lg-5 d-flex flex-column">
          <div className="banner-card small-card position-relative overflow-hidden">
            <video
              src={rightVideos.topRight.src}
              autoPlay
              muted
              loop
              playsInline
              className="rounded video-iframe w-100 h-100"
            />
            <div className="banner-overlay p-3 d-flex flex-column justify-content-end">
              <h5 className="text-white mb-2">{rightVideos.topRight.title}</h5>
            </div>
          </div>

          <div className="row g-3 mt-3">
            <div className="col-md-6">
              <div className="banner-card small-card position-relative overflow-hidden">
                <video
                  src={rightVideos.bottomLeft.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="rounded video-iframe w-100 h-100"
                />
                <div className="banner-overlay p-2 d-flex align-items-end">
                  <small className="text-white">{rightVideos.bottomLeft.text}</small>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="banner-card small-card position-relative overflow-hidden">
                <video
                  src={rightVideos.bottomRight.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="rounded video-iframe w-100 h-100"
                />
                <div className="banner-overlay p-2 d-flex align-items-end">
                  <small className="text-white">{rightVideos.bottomRight.text}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* View More Button */}
      {showButton && (
        <div className="text-center ai-video fade-in">
          <button
            className="btn-enquiry stylish-btn shadow-lg px-5 py-2"
            onClick={() => navigate("/showreels")}
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoShowcase;
