import React from "react";
import "./About.css";
import { FaHeart, FaGem, FaSmile, FaStar } from "react-icons/fa";
import aboutImage1 from "../../assets/our-story.WEBP";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Akash from "../../assets/ceo.jpg";
import Shubham from "../../assets/Shubham.jpg"

const About = () => {
  return (
    <div className="about-page">
      {/* Our Story Section */}
      <section className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <h2 className="section-title">Our Story</h2>
            <p>
              The Colorverse was born from a simple belief: that the perfect creation
              has the power to inspire, connect, and leave a lasting impression.
            </p>
            <p>
              Founded in 2020 by Ishita Sharma, The Colorverse started as a small
              collection of handpicked items that caught her eye during travels
              around the world. What began as a passion project has grown into a
              curated destination for unique and meaningful creations.
            </p>
            <p>
              Today, we collaborate with artisans and creators globally to bring you
              a collection that combines traditional craftsmanship with contemporary
              design.
            </p>
          </div>

          <div className="col-md-6 text-center">
            <div className="position-relative d-inline-block">
              <img
                src={aboutImage1}
                alt="Our Story"
                className="about-image img-fluid rounded shadow"
              />
              <span className="years-badge position-absolute bottom-0 end-0 m-3">
                4+ Years of spreading joy
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="values-section py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center">Our Values</h2>
          <p className="text-center text-muted">
            The principles that guide everything we do at The Colorverse
          </p>

          <div className="row mt-4 g-4">
            <div className="col-md-3 col-sm-6">
              <div className="card h-100 shadow-sm text-center p-3 value-card">
                <div className="value-icon mb-3"><FaHeart /></div>
                <h5>Passion for Creativity</h5>
                <p className="text-muted">
                  We believe every creation should tell a story and leave a lasting impression.
                </p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="card h-100 shadow-sm text-center p-3 value-card">
                <div className="value-icon mb-3"><FaGem /></div>
                <h5>Quality First</h5>
                <p className="text-muted">
                  We carefully curate each item to ensure the highest quality and craftsmanship.
                </p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="card h-100 shadow-sm text-center p-3 value-card">
                <div className="value-icon mb-3"><FaSmile /></div>
                <h5>Customer Focused</h5>
                <p className="text-muted">
                  Your satisfaction is our priority. We’re here to help you find the perfect creation.
                </p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="card h-100 shadow-sm text-center p-3 value-card">
                <div className="value-icon mb-3"><FaStar /></div>
                <h5>Unique Selection</h5>
                <p className="text-muted">
                  Our collection features one-of-a-kind items you won’t find anywhere else.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container py-5">
        <h2 className="section-title text-center">Meet Our Team</h2>
        <p className="text-center text-muted">
          The passionate people behind The Colorverse's success
        </p>

        <div className="mt-4">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 160,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="team-swiper"
          >
            {[
              { name: "Akash Shinde", role: "Founder & CEO", img: Akash },
              { name: "Shubham Shinde", role: "Co Founder", img: Shubham },
              { name: "Akash Shinde", role: "Founder & CEO", img: Akash },
              { name: "Shubham Shinde", role: "Co Founder", img: Shubham },
              { name: "Akash Shinde", role: "Founder & CEO", img: Akash },
              { name: "Shubham Shinde", role: "Co Founder", img: Shubham },
              { name: "Akash Shinde", role: "Founder & CEO", img: Akash },
              { name: "Shubham Shinde", role: "Co Founder", img: Shubham },
            ].map((member, i) => (
              <SwiperSlide key={i}>
                <div className="team-card text-center p-4">
                  <div className="team-img-wrapper mb-3">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="team-img"
                    />
                  </div>
                  <h5 className="fw-bold">{member.name}</h5>
                  <p className="text-muted">{member.role}</p>
                  <div className="team-social mt-2">
                    <a href="#" className="me-2">🌐</a>
                    <a href="#" className="me-2">💼</a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section text-center">
        <div className="container">
          <h2 className="section-title">Our Mission</h2>
          <blockquote className="blockquote mx-auto">
            "To be the world's most trusted destination for meaningful creations,
            where every purchase creates a moment of joy, strengthens connections,
            and supports artisans and creators around the globe."
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default About;
