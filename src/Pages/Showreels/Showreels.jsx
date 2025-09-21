// pages/Showreels.jsx
import React from "react";
import { reels } from "../../components/Showreel/Showreel";
import "../../components/Showreel/Showreel.css";
import ProjectStart from "../../components/ProjectStart/ProjectStart"
import { FaHeart, FaRegComment, FaShare, FaHome, FaSearch, FaPlusSquare, FaVideo, FaUser } from "react-icons/fa";

const Showreels = () => {
  return (
    <div className="showreels-page container">
      <h1 className="page-title">All Creative Reels</h1>
      <p className="page-subtitle text-center">
        Dive into our full collection of reels that inspire, engage and elevate brands.
      </p>

      <div className="reels-grid">
        {reels.map((reel) => (
          <div className="phone-frame" key={reel.id}>
            <div className="phone-notch">
              <div className="camera-dot"></div>
              <div className="speaker"></div>
            </div>

            <video
              className="reel-video"
              muted
              loop
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => {
                e.target.pause();
                e.target.currentTime = 0;
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
        ))}
      </div>
      <ProjectStart
      title={<>We Design, Build <br /> and Elevate</>}
      buttonLabel="Contact Us"
    />
      
    </div>
    
  );
};

export default Showreels;
