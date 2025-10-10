import React, { useState, useEffect, useRef } from "react";
import "./AiGenerated.css";

const videos = [
  "https://video.wixstatic.com/video/61fec8_50b1558380cc4515801d872b61df8259/1080p/mp4/file.mp4",
  "https://video.wixstatic.com/video/61fec8_89d8b62469144162baa84953827d2e48/1080p/mp4/file.mp4",
  "https://video.wixstatic.com/video/61fec8_50b1558380cc4515801d872b61df8259/1080p/mp4/file.mp4",
  "https://video.wixstatic.com/video/61fec8_4adcfc24a72f4f2c9f873fb834a051c1/1080p/mp4/file.mp4",
  "https://video.wixstatic.com/video/61fec8_4adcfc24a72f4f2c9f873fb834a051c1/1080p/mp4/file.mp4",
];

const AiGenerated = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const total = videos.length;

  // Create refs for all videos
  const videoRefs = useRef([]);

  const updateIndex = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((newIndex + total) % total);
    setTimeout(() => setIsAnimating(false), 800);
  };

  // Play center video, pause others
  useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (vid) {
        if (i === currentIndex) {
          vid.play().catch(() => {});
        } else {
          vid.pause();
        }
      }
    });
  }, [currentIndex]);

  return (
    <div className="ai-generated-container-v">
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
      <div className="carousel-container">
        <button
          className="nav-arrow left"
          onClick={() => updateIndex(currentIndex - 1)}
        >
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
        </button>

        <div className="carousel-track">
          {videos.map((video, i) => {
            let className = "cardai hidden";
            const offset = (i - currentIndex + total) % total;

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
                  muted
                  loop
                  className="swiper-video"
                />
              </div>
            );
          })}
        </div>

        <button
          className="nav-arrow right"
          onClick={() => updateIndex(currentIndex + 1)}
        >
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
            </svg>
        </button>
      </div>

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
