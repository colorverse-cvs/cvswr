import React from "react";
import "./Contact.css";
import { FaPhone, FaFax, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="container py-5">
        {/* Heading */}


        {/* Form & Map */}
        <div className="row align-items-center form-map-wrapper">
          {/* Form Column */}
          <div className="col-lg-6 mb-4">
            <form className="form-box">
                      <div className="heading mb-4">
          <h1>
            Get in <span className="red ">Touch</span>
          </h1>
          <p className="subtext">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>
        </div>
             <div className="mb-3">
  <label>Full Name</label>
  <input
    type="text"
    className="form-control contact-input"
    placeholder="Name *"
    required
  />
</div>

<div className="mb-3">
  <label>Email</label>
  <input
    type="email"
    className="form-control contact-input"
    placeholder="Email *"
    required
  />
</div>

<div className="mb-3">
  <label>Phone Number</label>
  <input
    type="tel"
    className="form-control contact-input"
    placeholder="Phone number *"
    required
  />
</div>

<div className="mb-3">
  <label>Select Your Enquiry Type</label>
  <select className="form-select contact-input" required>
    <option value="" disabled selected>
      Select Your Enquiry Type
    </option>
    <option value="project">Project</option>
    <option value="courses">Courses</option>
  </select>
</div>

<div className="mb-3">
  <label>Message</label>
  <textarea
    className="form-control contact-input"
    rows="3"
    placeholder="Please tell us your requirement so we can get the right person to contact you."
    required
  ></textarea>
</div>
              <button type="submit" className="btn-enquiry mt-4 w-50">
                SUBMIT
              </button>
            </form>
          </div>

          {/* Map Column */}
          <div className="col-lg-6 position-relative map-container">
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4403591369464!2d106.81666631431065!3d-6.204366495505867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d857c69387%3A0x3cc6cf4051e4e9ba!2sKebon%20Kacang%2C%20Central%20Jakarta!5e0!3m2!1sen!2sid!4v1660738993674!5m2!1sen!2sid"
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Contact Info */}
       <section className="container my-5 ">
        <div className="row g-4 text-center contact-card-main">
          {[
            { icon: <FaPhone />, title: "Phone", text: "+918605807047", sub: "Available 24/7" },
            { icon: <FaEnvelope />, title: "Email", text: "COLORVERSESTUDIO25@GMAIL.COM", sub: "We reply within 24 hours" },
            { icon: <FaMapMarkerAlt />, title: "Address", text: "Kanakia Wallstreet, Andheri East", sub: "Visit our Office" }
          ].map((item, i) => (
            <div className="col-md-4" key={i}>
              <div className="contact-card  p-4 h-100 animate-up">
                <div className="contact-icon-bubble">{item.icon}</div>
                <h5 className="mt-3">{item.title}</h5>
                <p>{item.text}</p>
                <small>{item.sub}</small>
              </div>
            </div>
          ))}
        </div>
      </section>
      </div>
    </div>
  );
};

export default Contact;
