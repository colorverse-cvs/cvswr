import React from "react";
import "./ProjectStart.css";
import EnquiryButton from "../../UI_Component/button";

const ProjectStart = ({ 
  title = <>We Like To Start Your <br /> Project With Us</>, 
}) => {
  return (
    <section className="project-start-section py-4 mb-5 mt-5">
      <div className="container project-start-container">
        <h2 className="project-start-text">{title}</h2>
       <EnquiryButton className="btn-enquiry project-start-btn" label="Get In Touch" />
      </div>
    </section>
  );
};

export default ProjectStart;
