import React from "react";
import ProjectStart from "../../components/ProjectStart/ProjectStart";
import "./Courses.css";
import courseimg from "../../assets/Graphicdesign.png";
import courseimg1 from "../../assets/Videoediting.png";
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
            <p className="lead  stylish-intro">
              At <span className="brand">ColorVerse Studio</span>, we specialize
              in bringing your vision to life with a comprehensive suite of
              multimedia services. Our expertise spans{" "} <br></br>
              <strong className="highlight">3D advertising</strong> |{" "}
              <strong className="highlight">graphic design</strong> |{" "}
              <strong className="highlight">video editing</strong> |{" "}
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
                  <span className="highlight">Adobe Photoshop:</span> Students learn image editing, photo manipulation, digital painting, mastering layers, masks, filters, and creative tools.
                </li>
                <li className="mb-2">
                  <span className="highlight">Adobe Illustrator:</span>Students explore vector graphics, creating logos, icons, typography, illustrations, mastering paths, shapes, and pen tool.
                </li>
                <li>
                  <span className="highlight">CorelDRAW:</span> Students learn vector design, logo creation, signage, print layout, mastering curves, layers, and color management.
                </li>
              </ul>
              <EnquiryButton label="Enquire Now" />
            </div>
            <div className="col-lg-6 text-center">
              <div className="course-illustration">
                <img src={courseimg} alt="Design 1" className="floating-img"/>
      
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
              <ul className="list-unstyled ">
                <li className="mb-2">
                  <span className="highlight">Adobe Premiere Pro:</span> Students learn video editing, cutting, trimming, sequencing, color correction, audio editing, transitions, effects, producing professional videos.
                </li>
                <li>
                  <span className="highlight">Adobe After Effects:</span> Students learn motion graphics, animation, compositing, layers, dynamic titles, visual effects, integrating After Effects with Premiere Pro.
                </li>
              </ul>
              <EnquiryButton label="Enquire Now" />

            </div>
            <div className="col-lg-6 text-center">
              <div className="course-illustration">
                <img src={courseimg1} alt="Premiere Pro" className="floating-img" />              
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
