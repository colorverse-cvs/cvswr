import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./VideoShowcase.css";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import topRightVideo from "../../assets/AIREELS/ai-video-img.jpg";
import bottomLeft from "../../assets/AIREELS/ai-video-img2.jpg";
import bottomRight from "../../assets/AIREELS/ai-video-img3.png";

const bigVideos = [
  {
    videoUrl: "https://www.youtube.com/embed/gON6bYE-rVo?enablejsapi=1",
    title: "Sketchable Plus",
  },
  {
    videoUrl: "https://www.youtube.com/embed/nwdgGc0LpiY?enablejsapi=1",
    title: "Sketchable Pro",
  },
  {
    videoUrl: "https://www.youtube.com/embed/TWITjuKKGP0?enablejsapi=1",
    title: "Sketchable Pro",
  },
  {
    videoUrl: "https://www.youtube.com/embed/4dlv2fSz81M?enablejsapi=1",
    title: "Sketchable Pro",
  },
];

const VideoShowcase = ({ showHeader = true, showButton = true }) => {
  const navigate = useNavigate();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const iframeRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  // Detect if section is visible in viewport
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0].isIntersecting);
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Detect any user interaction (to unmute)
  useEffect(() => {
    const handleInteraction = () => setUserInteracted(true);
    window.addEventListener("click", handleInteraction);
    window.addEventListener("scroll", handleInteraction);
    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
    };
  }, []);

  // 🎬 Control YouTube videos programmatically
  useEffect(() => {
    iframeRefs.current.forEach((iframe, i) => {
      if (!iframe || !iframe.contentWindow) return;

      if (isVisible && i === currentIndex) {
        // ✅ Auto play current visible video
        iframe.contentWindow.postMessage(
          JSON.stringify({
            event: "command",
            func: "playVideo",
            args: [],
          }),
          "*"
        );

        // ✅ Mute until user interacts
        iframe.contentWindow.postMessage(
          JSON.stringify({
            event: "command",
            func: userInteracted ? "unMute" : "mute",
            args: [],
          }),
          "*"
        );
      } else {
        // ⏸️ Pause all other videos
        iframe.contentWindow.postMessage(
          JSON.stringify({
            event: "command",
            func: "pauseVideo",
            args: [],
          }),
          "*"
        );
      }
    });
  }, [isVisible, currentIndex, userInteracted]);

  return (
    <div ref={sectionRef} className="video-showcase container">
      {showHeader && (
        <div className="text-center fade-in">
          <h2 className="fw-bold section-heading  pt-5 pb-md-4 gradient-text">
            AI Generated Video
          </h2>
        </div>
      )}

      <div className="row g-4 align-items-start mt-1">
        {/* Left Big Video Carousel */}
        <div className="col-lg-7 position-relative">
          <div
            ref={prevRef}
            className="video-showcase-custom-button video-showcase-custom-prev"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </div>
          <div
            ref={nextRef}
            className="video-showcase-custom-button video-showcase-custom-next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="white"
              viewBox="0 0 24 24"
            >
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
              swiperRef.current = swiper;
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 9000, disableOnInteraction: false }}
            loop={true}
            onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
            className="big-swiper"
          >
            {bigVideos.map((video, i) => (
              <SwiperSlide key={i}>
                <div
                  className="banner-card big-card position-relative overflow-hidden"
                  onMouseEnter={() => swiperRef.current?.autoplay.stop()}
                  onMouseLeave={() => swiperRef.current?.autoplay.start()}
                >
                  <iframe
                    ref={(el) => (iframeRefs.current[i] = el)}
                    className="rounded video-iframe w-100 h-100"
                    src={video.videoUrl}
                    title={video.title}
                    frameBorder="0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Small Videos */}
        <div className="col-lg-5 d-flex flex-column">
          <div className="banner-card small-card position-relative overflow-hidden">
            <img className="aivideoimg" src={topRightVideo} alt="" />
          </div>

          <div className="row g-3 mt-3">
            <div className="col-md-6">
              <div className="banner-card small-card position-relative overflow-hidden">
                <img className="aivideoimg" src={bottomLeft} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="banner-card small-card position-relative overflow-hidden">
                <img className="aivideoimg" src={bottomRight} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

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
