import React from "react";
import ProjectStart from "../../components/ProjectStart/ProjectStart";
import EnquiryButton from "../../UI_Component/button";
import "./Courses.css";

import courseimg from "../../assets/Graphicdesign.png";
import courseimg1 from "../../assets/Videoediting.png";
import courseimg2 from "../../assets/figma.png";
import courseimg3 from "../../assets/maya.png";
import courseimg5 from "../../assets/nuke.png";

const Courses = () => {
  
  const courseData = [
    {
      gradientClass: "gradient-1",
      title: "Photoshop for Graphic Design",
      duration: "45 Days",
      bonus: "5 GB of design assets (PSD files, fonts, stock images)",
      modules: [
        "Introduction to Design",
        "Photoshop Tools Mastery",
        "Creative Design",
        "Advanced Editing",
        "Portfolio Creation",
      ],
      skills: [
        "Visual storytelling through design",
        "Branding and social media graphics",
        "Image correction & digital painting",
      ],
      outcomes: [
        "Design ads, logos, and brand identities",
        "Create a professional portfolio",
        "Freelance in poster & ad creatives",
      ],
      imgSrc: courseimg,
      imgAlt: "Photoshop Course",
    },
    {
      gradientClass: "gradient-2",
      reverse: true,
      title: "Premiere Pro & After Effects (Video Editing + Motion Graphics)",
      duration: "45 Days each",
      bonus:
        "5 GB of professional editing data (video footage, sound effects, templates)",
      modules: [
        "Premiere Pro: Editing fundamentals, sound design, color grading",
        "After Effects: Animation basics, titles, visual effects, motion graphics",
      ],
      skills: [
        "Video storytelling & editing",
        "Motion graphics & intro/outro animation",
        "VFX basics for ads & short films",
      ],
      outcomes: [
        "Build a video & motion graphics showreel",
        "Work as video editor/motion designer",
        "Freelance for brands & creators",
      ],
      imgSrc: courseimg1,
      imgAlt: "Video Editing Course",
    },
    {
      gradientClass: "gradient-1",
      title: "UI/UX Design (Figma + Adobe XD)",
      duration: "60 Days",
      modules: [
        "UX Fundamentals",
        "UI Design Basics",
        "Figma/Adobe XD Prototyping",
        "Usability Testing",
        "Portfolio Projects",
      ],
      skills: [
        "Wireframing & prototyping",
        "UI kit creation & responsive design",
        "UX research & testing",
      ],
      outcomes: [
        "Create a portfolio-ready case study",
        "Be job-ready for UI/UX roles",
        "Freelance for apps & websites",
      ],
      imgSrc: courseimg2,
      imgAlt: "UI/UX Design Course",
    },
    {
      gradientClass: "gradient-2",
      reverse: true,
      title: "Autodesk Maya (CG & VFX – Lighting, Lookdev & Rendering)",
      duration: "25 Days",
      modules: [
        "3D pipeline basics",
        "Lighting Techniques",
        "Look Development",
        "Rendering",
        "Final CG Project",
      ],
      skills: [
        "Lighting for cinematic effects",
        "Look development for film/game assets",
        "Rendering optimization",
      ],
      outcomes: [
        "Work as Lighting Artist/Lookdev Specialist",
        "Studio-level VFX training",
        "Freelance in 3D design",
      ],
      imgSrc: courseimg3,
      imgAlt: "Maya Course",
    },
    {
      gradientClass: "gradient-1",
      title: "CG & VFX Compositing (Nuke & After Effects)",
      duration: "25 Days",
      modules: [
        "Compositing Fundamentals",
        "Green Screen & Roto",
        "Tracking & Matchmoving",
        "Color Grading & Matching",
        "Showreel Creation",
      ],
      skills: [
        "Professional compositing",
        "Tracking, roto, matte painting basics",
        "Color grading & finishing",
      ],
      outcomes: [
        "Create a VFX compositing showreel",
        "Work as Compositor/VFX Artist",
        "Freelance in post-production",
      ],
      imgSrc: courseimg5,
      imgAlt: "Compositing Course",
    },
  ];

  const benefits = [
  { icon: "fas fa-user-check", text: "Lifetime Creative Support & Mentorship the Classroom" },
  { icon: "fas fa-video", text: "Personalized Showreel & Industry-Ready Portfolio Creation" },
  { icon: "fas fa-award", text: "Learn Directly from Award-Winning Industry Professionals" },
  { icon: "fas fa-briefcase", text: "Hands-On, Career-Focused Training with Real Projects" },
];

const enrollmentSteps = [
  "Connect with our mentors for personalized guidance",
  "Choose your creative specialization",
  "Secure your enrollment",
  "Start learning with lifetime access & mentorship",
];
  const CourseSection = ({
  gradientClass,
  reverse = false,
  title,
  duration,
  bonus,
  modules,
  skills,
  outcomes,
  imgSrc,
  imgAlt,
}) => (
  <section className={`course-section ${gradientClass}`}>
    <div className="container">
      <div
        className={`row align-items-center gy-4 ${
          reverse ? "flex-lg-row-reverse" : ""
        }`}
      >
        {/* Course Info */}
        <div className="col-lg-6 text-dark">
          <h3 className="fw-bold mb-3">{title}</h3>

          {duration && (
            <p>
              <strong>Duration:</strong> {duration}
            </p>
          )}
          {bonus && (
            <p>
              <strong>Bonus:</strong> {bonus}
            </p>
          )}

          <h6 className="fw-bold mt-3">Course Modules:</h6>
          <ul className="list-unstyled">
            {modules.map((m, i) => (
              <li key={i}>• {m}</li>
            ))}
          </ul>

          {/* Skills & Outcomes */}
          <div className="row mt-3">
            <div className="col-md-6">
              <h6 className="fw-bold">Skills You’ll Gain:</h6>
              <ul className="list-unstyled">
                {skills.map((s, i) => (
                  <li key={i}>✔ {s}</li>
                ))}
              </ul>
            </div>
            <div className="col-md-6">
              <h6 className="fw-bold">Outcomes:</h6>
              <ul className="list-unstyled">
                {outcomes.map((o, i) => (
                  <li key={i}>- {o}</li>
                ))}
              </ul>
            </div>
          </div>

          <EnquiryButton label="Enquire Now" className="mt-3" />
        </div>

        {/* Image */}
        <div className="col-lg-6 text-center">
          <img src={imgSrc} alt={imgAlt} className="floating-img" />
        </div>
      </div>
    </div>
  </section>
);
  return (
    <div className="courses-page">
      {/* Intro Section */}
      <section className="intro-section text-center">
        <div className="container">
          <p className="lead stylish-intro">
            At <span className="brand">ColorVerse Studio</span>, we specialize in bringing your vision to life with a comprehensive suite of multimedia services. Our expertise spans{" "}
            <br />
            <strong className="highlight">3D advertising</strong> |{" "}
            <strong className="highlight">graphic design</strong> |{" "}
            <strong className="highlight">video editing</strong> |{" "}
            <strong className="highlight">voice-over solutions</strong>.
          </p>
        </div>
      </section>
<section>
      {courseData.map((course, index) => (
        <CourseSection key={index} {...course} />
      ))}
</section>
<section className="py-5 bg-light">
  <div className="container">
    <div className="why-section p-4 p-md-5 rounded-4 shadow-lg bg-white border border-gray-200 position-relative text-center">
      <h3 className="fw-bold mb-5 text-gradient display-6">
        Why Visionaries Choose <span className="text-indigo">Colorverse Studio</span>
      </h3>

      <div className="row g-4 text-start">
        {benefits.map((benefit, idx) => (
          <div key={idx} className="col-md-6">
            <div className="benefit-card p-4 rounded-3 shadow-sm d-flex align-items-start">
              <i className={`${benefit.icon} icon me-3`}></i>
              <div>{benefit.text}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="enroll-box mt-5 p-4 rounded-3 bg-indigo-light border border-indigo shadow-sm text-start">
        <h5 className="fw-bold text-indigo mb-3">How to Begin Your Journey:</h5>
        <ul className="list-unstyled mb-0">
          {enrollmentSteps.map((step, idx) => (
            <li key={idx} className="mb-2">
              <i className="fas fa-arrow-right text-indigo me-2"></i>
              {step}
            </li>
          ))}
        </ul>
      </div>

      <p className="contact-info mt-4 text-muted">
        <i className="fas fa-envelope"></i>
        <a
          href="mailto:colorversestudio25@gmail.com"
          className="text-decoration-none text-indigo ms-1"
        >
          colorversestudio25@gmail.com
        </a>{" "}
        | <i className="fas fa-phone"></i>
        <a
          href="tel:+918605807047"
          className="text-decoration-none text-indigo ms-1"
        >
          +91 8605807047
        </a>
      </p>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="cta-section text-center">
        <div className="container">
          <ProjectStart
            title={
              <>
                Creative Solutions <br /> for Real Impact
              </>
            }
            buttonLabel="Contact Us"
          />
        </div>
      </section>
    </div>
  );
};






export default Courses;
