import React from "react";
import "./Popup.css";

const Popup = ({ isOpen, onClose, title, alldescription, onEnquiry, image, label }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container popup-container1 split-layout">
        <button className="popup-close" onClick={onClose}>✖</button>

        {/* Left Side - Image */}
        <div className="popup-image-section">
          <div className="popup-image-wrapper">
            <img src={image} alt={title} className="popup-image" />
            {label && <span className="popup-image-label">{label}</span>}
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="popup-content-section">
          <h2 className="popup-title">{title}</h2>
          <p className="popup-description">{alldescription}</p>

          <div className="popup-actions">
            <button className="btn-cancel" onClick={onClose}>Cancel</button>
            <button className="btn-enquiry mt-4" onClick={onEnquiry}>Enquiry</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
