import React from "react";
import "./Contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import ProjectStart from "../../components/ProjectStart/ProjectStart";

const Contact = () => {
  const contactItems = [
    { 
      icon: <FaPhone />, 
      title: "Phone", 
      text: "+918605807047", 
      sub: "Available 24/7",
      link: "tel:+918605807047"
    },
    { 
      icon: <FaEnvelope />, 
      title: "Email", 
      text: "COLORVERSESTUDIO25@GMAIL.COM", 
      sub: "We reply within 24 hours",
      link: "mailto:COLORVERSESTUDIO25@GMAIL.COM"
    },
    { 
      icon: <FaMapMarkerAlt />, 
      title: "Address", 
      text: "Kanakia Wallstreet, Andheri East", 
      sub: "Visit our Office",
      link: "https://www.google.com/maps?q=Kanakia+Wallstreet+Andheri+East"
    }
  ];

  return (
    <div className="contact-page">
      {/* Contact Info Cards */}
      <section className="container my-5">
        <div className="row g-4 text-center">
          {contactItems.map((item, i) => (
            <div className="col-md-4" key={i}>
              <a href={item.link} className="text-decoration-none">
                <div className="contact-card p-4 h-100 animate-up">
                  <div className="contact-icon-bubble">{item.icon}</div>
                  <h5 className="mt-3 card-title">{item.title}</h5>
                  <p className="text-dark">{item.text}</p>
                  <small className="text-dark">{item.sub}</small>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Form & Map Side by Side */}
      <section className="container mb-5">
        <div className="row g-4 d-flex align-items-start">
          {/* Contact Form */}
          <div className="col-lg-6">
            <div className="contact-form p-3 animate-fade-in">
              <h3 className="text-center mt-4 mb-4 fw-bold">Send us a Message</h3>
              <form>
                <div className="row mb-3">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <input type="text" className="form-control form-control-lg" placeholder="Your full name" required />
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control form-control-lg" placeholder="your@email.com" required />
                  </div>
                </div>
                <input type="text" className="form-control form-control-lg mb-3" placeholder="What's this about?" />
                <textarea className="form-control form-control-lg mb-3" rows="4" placeholder="Tell us how we can help you..." required></textarea>
                <div className="text-center">
                  <button type="submit" className="btn btn-gradient px-5 py-2">
                    <FaPaperPlane className="me-2" /> Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="col-lg-6">
            <div className="map-container p-3 animate-fade-in-delay">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.056364459955!2d74.47540622916964!3d19.710224319752005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc5939488f747b%3A0xcaccd2f624d0beb4!2sRahata%2C%20Maharashtra%20423107!5e0!3m2!1sen!2sin!4v1758397539054!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "16px", minHeight: "400px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Project Start Section */}
      <ProjectStart
        title={<>Start Your Digital <br /> Journey With Us</>}
        buttonLabel="Contact Us"
      />
    </div>
  );
};

export default Contact;
