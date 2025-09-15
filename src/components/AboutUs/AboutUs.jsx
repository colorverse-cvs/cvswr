import React from "react";
import "./AboutUs.css";
import aboutImage from "../../assets/about-us.png";

const AboutUs = () => {
  const aboutData = {
    headingSmall: "About Us",
    headingMain: "Design & Develop <br /> For Better Solution",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere porta vitae mi accumsan. Ultricies mauris, habitasse nec mauris sagittis imperdiet lobortis porttitor. Ipsum mi sed uta aliquet ut. Turpis viverra volutpat sed eu porta morbi egestas ut hac rutrum ut augue vitae, nec, ut. Nibh nibh quam",
    buttonText: "Learn More",
    image: aboutImage,
  };

  return (
    <section className="about-us container my-5">
      <div className="text-center mb-4">
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
          <p className="text-muted mb-4">{aboutData.description}</p>
          <button className="btn btn-primary">{aboutData.buttonText}</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
