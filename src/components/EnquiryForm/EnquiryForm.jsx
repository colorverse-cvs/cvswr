import React, { useState } from "react";
import "./EnquiryForm.css";

const EnquiryForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error while typing
  };
  // Close when clicking on overlay
const handleOverlayClick = (e) => {
  if (e.target.classList.contains("popup-overlay")) {
    onClose();
  }
};


  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Please provide your name.";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please provide a valid email.";
    if (!/^[0-9]{10}$/.test(formData.mobile))
      newErrors.mobile = "Please provide a valid mobile number.";
    if (!formData.message.trim())
      newErrors.message = "Please enter a message.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Enquiry Submitted:", formData);
      onClose();
    }
  };

  return (
    <div className="popup-overlay" onClick={handleOverlayClick}>
      <div className="popup-container">
        <button className="popup-close" onClick={onClose}>✖</button>
        <h2 className="popup-title">Enquiry Form</h2>

        <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            {submitted && errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          <div className="form-group">
            {/* 🔹 Use type="text" to disable native browser validation */}
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            {submitted && errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div className="form-group">
            <input
              type="text"
              name="mobile"
              placeholder="Your Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
            />
            {submitted && errors.mobile && <p className="error-text">{errors.mobile}</p>}
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
            {submitted && errors.message && <p className="error-text">{errors.message}</p>}
          </div>

          <button type="submit" className="btn-enquiry">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
