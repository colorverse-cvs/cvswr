import React from "react";
import ProjectStart from "../../components/ProjectStart/ProjectStart";
import "./Courses.css";
import courseimg from "../../assets/course.jpg";
import courseimg1 from "../../assets/AeDesign2.jpg";
import courseimg2 from "../../assets/idDesign.jpg";
import courseimg3 from "../../assets/LrDesing4.jpg";
import courseimg4 from "../../assets/psDesign3.jpg";
import courseimg5 from "../../assets/An-icon.jpg";
import courseimg6 from "../../assets/pr-icon.jpg";
import EnquiryButton from "../../UI_Component/button";


function Courses() {
  return (
    <div className="courses-page">
      {/* Intro Section */}
      <section className="intro-section text-center">
        <section className="intro-section text-center">
          <div className="container">
            <p className="lead text-muted stylish-intro">
              At <span className="brand">ColorVerse Studio</span>, we specialize
              in bringing your vision to life with a comprehensive suite of
              multimedia services. Our expertise spans{" "}
              <strong className="highlight">3D advertising</strong>,{" "}
              <strong className="highlight">graphic design</strong>,{" "}
              <strong className="highlight">video editing</strong>, and{" "}
              <strong className="highlight">voice-over solutions</strong>.
            </p>
          </div>
        </section>

      </section>

      {/* Graphic Design Section */}
      <section className="course-section gradient-1">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6 text-dark">
              <h3 className="fw-bold mb-3">Master in Graphic Design</h3>
              <p>
                Fast-paced, comprehensive graphic design course from beginner to advanced in one month:
              </p>
              <ul className="list-unstyled ms-3">
                <li className="mb-2">
                  <span className="highlight">Adobe Photoshop:</span> Image editing, photo manipulation, digital painting.
                </li>
                <li className="mb-2">
                  <span className="highlight">Adobe Illustrator:</span> Vector graphics, logos, icons, typography.
                </li>
                <li>
                  <span className="highlight">CorelDRAW:</span> Logo creation, signage, print design, advanced vector techniques.
                </li>
              </ul>
              <EnquiryButton label="Enquire Now" />
            </div>
            <div className="col-lg-6 text-center">
              <div className="course-illustration position-relative">
                <img src={courseimg} alt="Design 1" className="floating-img" style={{ top: "16%", left: "15%", width: "119px" }} />
                <img src={courseimg1} alt="Design 2" className="floating-img" style={{ top: "51%", left: "15%", width: "172px" }} />
                <img src={courseimg2} alt="Design 3" className="floating-img" style={{ bottom: "53%", left: "37%", width: "157px" }} />
                <img src={courseimg3} alt="Design 4" className="floating-img" style={{ bottom: "38%", right: "14%", width: "128px" }} />
                <img src={courseimg4} alt="Design 5" className="floating-img" style={{ top: "52%", left: "46%", width: "100px" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Editing Section */}
      <section className="course-section gradient-2">
        <div className="container">
          <div className="row align-items-center gy-4 flex-lg-row-reverse">
            <div className="col-lg-6 text-dark">
              <h3 className="fw-bold mb-3">Master in Video Editing & Motion Graphics</h3>
              <p>
                Intensive one-month course covering fundamentals to advanced techniques:
              </p>
              <ul className="list-unstyled ms-3">
                <li className="mb-2">
                  <span className="highlight">Adobe Premiere Pro:</span> Video editing, trimming, sequencing, color correction.
                </li>
                <li>
                  <span className="highlight">Adobe After Effects:</span> Motion graphics, animation, compositing, visual effects.
                </li>
              </ul>
              <EnquiryButton label="Enquire Now" />

            </div>
            <div className="col-lg-6 text-center">
              <div className="course-illustration position-relative">
                <img src={courseimg5} alt="Premiere Pro" className="floating-img" style={{ top: "18%", right: "12%", width: "119px" }} />
                <img src={courseimg6} alt="After Effects" className="floating-img" style={{ top: "52%", right: "12%", width: "172px" }} />
                <img src={courseimg2} alt="Editing Tools" className="floating-img" style={{ bottom: "53%", right: "34%", width: "157px" }} />
                <img src={courseimg3} alt="Motion Graphics" className="floating-img" style={{ bottom: "38%", left: "19%", width: "128px" }} />
                <img src={courseimg4} alt="VFX" className="floating-img" style={{ top: "52%", right: "42%", width: "100px" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section text-center">
        <div className="container">
          <ProjectStart
            title={<>Creative Solutions <br /> for Real Impact</>}
            buttonLabel="Contact Us"
          />
        </div>
      </section>
    </div>
  );
}

export default Courses;
