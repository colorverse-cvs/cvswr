import React from "react";
import { useNavigate } from "react-router-dom";
import "./AboutUs.css";
import aboutImage from "../../assets/about-us.png";

const AboutUs = () => {
  const navigate = useNavigate(); // 👈 navigation hook

  const aboutData = {
    headingSmall: "About Us",
    headingMain: "Design & Develop <br /> For Better Solution",
    description:
      "At ColorVerse Studio, we specialize in bringing your vision to life with a comprehensive suite of multimedia services. Our expertise spans 3D advertising, graphic design, video editing, and voice-over solutions, offering a one-stop shop for all your creative needs.",
    buttonText: "Learn More",
    image: aboutImage,
  };

  // Handle button click
  const handleLearnMore = () => {
    navigate("/about");
  };

  return (
    <section className="about-us container my-5">
      <div className="text-center mb-5">
        <small className="section-heading ">
          {aboutData.headingSmall}
        </small>
      </div>
      

      <div className="row align-items-center mt-4">
        <div className="col-md-6 mb-4 mb-md-0 text-center text-md-start">
          <img
            src={aboutData.image}
            alt="About Us"
            className="img-fluid rounded-4 about-image"
          />
        </div>
        <div className="col-md-6 text-center text-md-start">
          <h2
            className="fw-bold mb-3"
            dangerouslySetInnerHTML={{ __html: aboutData.headingMain }}
          />
          <p className=" mb-4">{aboutData.description}</p>
          <button className="btn-enquiry" onClick={handleLearnMore}>
            {aboutData.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
