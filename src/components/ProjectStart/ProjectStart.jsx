import React from "react";
import "./ProjectStart.css";

const ProjectStart = ({ 
  title = <>We Like To Start Your <br /> Project With Us</>, 
  buttonLabel = "Get in Touch"
}) => {
  return (
    <section className="project-start-section py-4 mb-5 mt-5">
      <div className="container project-start-container">
        <h2 className="project-start-text">{title}</h2>
        <button className="project-start-btn">{buttonLabel}</button>
      </div>
    </section>
  );
};

export default ProjectStart;
