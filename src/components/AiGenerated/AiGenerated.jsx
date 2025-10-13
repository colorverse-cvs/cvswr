import React, { useState, useEffect, useRef } from "react";
import "./AiGenerated.css";

// ✅ Import local videos
import reel1 from "../../assets/AIREELS/Lucifer-Perfume -Ai.mp4";
import reel2 from "../../assets/AIREELS/Balaji-Ganpati Festival-Ai.mp4";
import reel3 from "../../assets/AIREELS/Lucifer-Car-Ai.mp4";
import reel4 from "../../assets/AIREELS/Asf-Barbeque-Ai.mp4";
import reel5 from "../../assets/AIREELS/S&K-Ganpati-Festival-Ai.mp4";
import reel6 from "../../assets/AIREELS/Mahindra-Car-Ai.mp4";

const videos = [reel1, reel2, reel3, reel4, reel5, reel6];

const AiGenerated = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const total = videos.length;
  const videoRefs = useRef([]);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // 🔹 Handle carousel navigation
  const updateIndex = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((newIndex + total) % total);
    setTimeout(() => setIsAnimating(false), 800);
  };

  // 🔹 Detect when user interacts (to unmute videos)
  useEffect(() => {
    const handleUserInteraction = () => setUserInteracted(true);
    window.addEventListener("click", handleUserInteraction, { once: true });
    window.addEventListener("touchstart", handleUserInteraction, { once: true });
    window.addEventListener("scroll", handleUserInteraction, { once: true });
    return () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
    };
  }, []);

  // 🔹 Observe if AiGenerated section is visible on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 } // play only when 30% visible
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // 🔹 Play/pause based on visibility & currentIndex
  useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;
      if (isVisible && i === currentIndex) {
        vid.currentTime = 0;
        vid.play().catch(() => {});
        vid.muted = !userInteracted;
      } else {
        vid.pause();
      }
    });
  }, [isVisible, currentIndex, userInteracted]);

  return (
    <div className="ai-generated-container-v" ref={sectionRef}>
      <div className="ai-generated-container">
        <div className="section-heading1">
          <h2 className="page-title">
            AiGenerated <span> Video</span>
          </h2>
          <p>
            Dive into our full collection of reels that <span>inspire</span>,{" "}
            <span>engage</span>, and <span>elevate brands</span>.
          </p>
          <div className="heading-underline"></div>
        </div>

        {/* 🔹 Carousel */}
        <div className="carousel-container">
          <button className="nav-arrow left" onClick={() => updateIndex(currentIndex - 1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          <div className="carousel-track">
            {videos.map((video, i) => {
              const offset = (i - currentIndex + total) % total;
              let className = "cardai hidden";

              if (offset === 0) className = "cardai center";
              else if (offset === 1) className = "cardai right-1";
              else if (offset === 2) className = "cardai right-2";
              else if (offset === total - 1) className = "cardai left-1";
              else if (offset === total - 2) className = "cardai left-2";

              return (
                <div key={i} className={className} onClick={() => updateIndex(i)}>
                  <video
                    ref={(el) => (videoRefs.current[i] = el)}
                    src={video}
                    controls
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="swiper-video"
                  />
                </div>
              );
            })}
          </div>

          <button className="nav-arrow right" onClick={() => updateIndex(currentIndex + 1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
            </svg>
          </button>
        </div>

        {/* 🔹 Dots */}
        <div className="dots">
          {videos.map((_, i) => (
            <div
              key={i}
              className={`dot ${i === currentIndex ? "active" : ""}`}
              onClick={() => updateIndex(i)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiGenerated;
