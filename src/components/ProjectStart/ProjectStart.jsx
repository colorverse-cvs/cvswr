import React from "react";
import "./ProjectStart.css";
import EnquiryButton from "../../UI_Component/button";

const ProjectStart = ({ 
  title = <>We Like To Start Your <br /> Project With Us</>, 
  buttonLabel = "Get in Touch"
}) => {
  return (
    <section className="project-start-section py-4 mb-5 mt-5">
      <div className="container project-start-container">
        <h2 className="project-start-text">{title}</h2>
       <EnquiryButton className="Enquire" label="Enquire Now" />
      </div>
    </section>
  );
};

export default ProjectStart;
