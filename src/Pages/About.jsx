// src/Pages/About.jsx
import React from "react";
// import "./About.css"; 

function About() {
  return (
    <div className="about-page container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">About Us</h1>
        <p className="lead text-muted">
          Learn more about our mission, vision, and the team behind our creative work.
        </p>
      </div>

      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="https://static.wixstatic.com/media/61fec8_359b6241fe3f4a72a26685e095822b9e~mv2.jpg/v1/crop/x_0,y_0,w_586,h_703/fill/w_269,h_323,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-03-14%20at%2022_01_edite.jpg 1x, https://static.wixstatic.com/media/61fec8_359b6241fe3f4a72a26685e095822b9e~mv2.jpg/v1/crop/x_0,y_0,w_586,h_703/fill/w_538,h_646,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-03-14%20at%2022_01_edite.jpg 2x" // replace with your image
            alt="Our Team"
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-6">
          <h2 className="fw-semibold mb-3">Our Mission</h2>
          <p>
            We strive to deliver exceptional creative content that elevates brands, engages audiences,
            and leaves a lasting impact. Our goal is to combine innovation with storytelling
            to produce visually stunning and meaningful work.
          </p>

          <h2 className="fw-semibold mt-4 mb-3">Our Values</h2>
          <ul className="list-unstyled">
            <li>🎯 Creativity & Innovation</li>
            <li>🤝 Collaboration & Teamwork</li>
            <li>💡 Quality & Excellence</li>
            <li>🌱 Growth & Learning</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
