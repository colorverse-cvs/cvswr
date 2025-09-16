import React, { useRef } from "react";
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

const reels = [
  {
    id: 1,
    videoUrl: "https://video.wixstatic.com/video/61fec8_624e060ddeca413d9547a0dd15ee3a4e/1080p/mp4/file.mp4",
    username: "john_doe",
    caption: "Exploring the city! 🌆 #Travel",
    music: "City Vibes - DJ Mix",
    thumbnail: "https://video.wixstatic.com/video/61fec8_624e060ddeca413d9547a0dd15ee3a4e/1080p/mp4/file.mp4"
  },
  {
    id: 2,
    videoUrl: "https://video.wixstatic.com/video/61fec8_89d8b62469144162baa84953827d2e48/1080p/mp4/file.mp4",
    username: "nature_lover",
    caption: "Nature is so peaceful 🍃",
    music: "Calm Breeze - LoFi Beats",
    thumbnail: "https://video.wixstatic.com/video/61fec8_89d8b62469144162baa84953827d2e48/1080p/mp4/file.mp4"
  },
  {
    id: 3,
    videoUrl: "https://video.wixstatic.com/video/61fec8_50b1558380cc4515801d872b61df8259/1080p/mp4/file.mp4",
    username: "tech_guy",
    caption: "Testing the new phone! 📱",
    music: "Techno Beats - DJ Pro",
    thumbnail: "https://video.wixstatic.com/video/61fec8_50b1558380cc4515801d872b61df8259/1080p/mp4/file.mp4"
  },
  {
    id: 4,
    videoUrl: "https://video.wixstatic.com/video/61fec8_4adcfc24a72f4f2c9f873fb834a051c1/1080p/mp4/file.mp4",
    username: "foodie",
    caption: "Delicious dinner tonight! 🍲",
    music: "Chill Vibes - LoFi",
    thumbnail: "https://video.wixstatic.com/video/61fec8_4adcfc24a72f4f2c9f873fb834a051c1/1080p/mp4/file.mp4"
  }
];

const Showreel = () => {
  const videoRefs = useRef([]);

  const handleMouseEnter = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].play();
    }
  };

  const handleMouseLeave = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      videoRefs.current[index].currentTime = 0;
    }
  };

  return (
        <><h2 className="section-heading text-center pb-md-4 pt-md-5">Showreel</h2><div className="container my-5">
        <div className="showreel-grid">
  {reels.map((reel, index) => (
    <div
      key={reel.id}
      className={`phone-frame phone-${index} ${
        index === 1 ? "mb-5" : index === 2 ? "mb-4" : ""
      }`}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={() => handleMouseLeave(index)}
    >
      <div className="phone-notch">
        <div className="camera-dot"></div>
        <div className="speaker"></div>
      </div>

      <video
        ref={(el) => (videoRefs.current[index] = el)}
        className="reel-video"
        muted
        loop
        preload="auto"
        onLoadedMetadata={(e) => e.currentTarget.pause()}
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
  ))}
</div>

      </div></>
  );
};

export default Showreel;
