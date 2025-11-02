import React, { useState, useEffect, useRef } from "react";
import "./AiGenerated.css";

// ✅ YouTube embed video list
const videos = [
  { id: 1, videoUrl: "https://www.youtube.com/embed/XuGAH05sMNE" },
  { id: 2, videoUrl: "https://www.youtube.com/embed/scSsnjiYgEA" },
  { id: 3, videoUrl: "https://www.youtube.com/embed/BuwlkOYCcNw" },
  { id: 4, videoUrl: "https://www.youtube.com/embed/F_C7010-ySw" },
  { id: 5, videoUrl: "https://www.youtube.com/embed/y2LceMYkz74" },
  { id: 6, videoUrl: "https://www.youtube.com/embed/h6s72B0YlKU" },
  { id: 7, videoUrl: "https://www.youtube.com/embed/YGt0tAVy8Yk" },
  { id: 8, videoUrl: "https://www.youtube.com/embed/jArmUhChPT4" },
  { id: 9, videoUrl: "https://www.youtube.com/embed/-CxcHXrA3Ww" },
  { id: 10, videoUrl: "https://www.youtube.com/embed/Rk6RW6iJVF4" },
  { id: 11, videoUrl: "https://www.youtube.com/embed/sUO0z6mN2V4" },
];

const AiGenerated = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const total = videos.length;
  const iframeRefs = useRef([]);
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

  // 🔹 Play/pause YouTube videos based on visibility & currentIndex
// 🔹 Play/pause YouTube videos based on visibility & currentIndex
useEffect(() => {
  iframeRefs.current.forEach((iframe, i) => {
    if (!iframe || !iframe.contentWindow) return;

    if (isVisible && i === currentIndex) {
      // ✅ Auto play when section becomes visible
      iframe.contentWindow.postMessage(
        JSON.stringify({
          event: "command",
          func: "playVideo",
          args: [],
        }),
        "*"
      );

      // ✅ Mute until user interacts (unmutes after click/scroll)
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
    <div className="ai-generated-container-v" ref={sectionRef}>
      <div className="ai-generated-container">
        <div className="section-heading1">
          <h2 className="page-title">
            Ai Generated <span> Reels</span>
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

              const videoSrc = `${video.videoUrl}?enablejsapi=1&autoplay=0&mute=${userInteracted ? 0 : 1
                }&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&playsinline=1&loop=1&playlist=${video.videoUrl.split("/embed/")[1]
                }`;

              return (
                <div key={i} className={className} onClick={() => updateIndex(i)}>
                  <iframe
                    ref={(el) => (iframeRefs.current[i] = el)}
                    className="swiper-video"
                    src={videoSrc}
                    title={`AI Generated Video ${i + 1}`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  ></iframe>
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
