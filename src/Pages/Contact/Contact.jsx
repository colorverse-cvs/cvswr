import React, { useState } from "react";
import "./Contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "5c1732cb-766e-4768-9641-dc829f8be7bf");
    formData.append("subject", "New Contact Form Submission");
    formData.append("from_name", formData.get("fullName"));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        alert("Form submitted successfully!");
        e.target.reset();
      } else {
        alert("Form submission failed. Please try again.");
        console.error(result);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-section">
      <div className="container py-5">
        {/* Heading */}
        

        {/* Form & Map */}
        <div className="row align-items-center form-map-wrapper">
          
          {/* Form Column */}
          <div className="col-lg-6 mb-4">
            <div className="heading ms-5">
          <h1>
            Get in <span className="red">Touch</span>
          </h1>
          <p className="subtext">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>
        </div>
            <form className="form-box" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  className="form-control contact-input"
                  placeholder="Name *"
                  required
                />
              </div>

              <div className="mb-3">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control contact-input"
                  placeholder="Email *"
                  required
                />
              </div>

              <div className="mb-3">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control contact-input"
                  placeholder="Phone number *"
                  required
                />
              </div>

              <div className="mb-3">
                <label>Select Your Enquiry Type</label>
                <select
                  name="enquiryType"
                  className="form-select contact-input"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Your Enquiry Type
                  </option>
                  <option value="project">Project</option>
                  <option value="courses">Courses</option>
                </select>
              </div>

              <div className="mb-3">
                <label>Message</label>
                <textarea
                  name="message"
                  className="form-control contact-input"
                  rows="3"
                  placeholder="Please tell us your requirement so we can get the right person to contact you."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-enquiry mt-4 w-50"
                disabled={loading}
              >
                {loading ? "Sending..." : "SUBMIT"}
              </button>
            </form>
          </div>

          {/* Map Column */}
          <div className="col-lg-6 position-relative map-container">
            <div className="map-wrapper">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8304287760716!2d72.85875187520635!3d19.115093582097547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9ce246611f1%3A0x3e0b82a825ccce33!2sKanakia%20Wall%20Street!5e0!3m2!1sen!2sin!4v1760381633664!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Contact Info */}
        <section className="container my-5">
          <div className="row g-4 text-center contact-card-main">
            {[
              {
                icon: <FaPhone />,
                title: "Phone",
                text: "+918605807047",
                sub: "Available 24/7",
              },
              {
                icon: <FaEnvelope />,
                title: "Email",
                text: "COLORVERSESTUDIO25@GMAIL.COM",
                sub: "We reply within 24 hours",
              },
              {
                icon: <FaMapMarkerAlt />,
                title: "Address",
                text: "Kanakia Wallstreet, Andheri East",
                sub: "Visit our Office",
              },
            ].map((item, i) => (
              <div className="col-md-4" key={i}>
                <div className="contact-card p-4 h-100 animate-up">
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
