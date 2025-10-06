// src/.../EnquiryButton.jsx
import React, { useState } from "react";
import EnquiryForm from "../components/EnquiryForm/EnquiryForm";
import "./button.css";

const EnquiryButton = ({ label = "Enquiry", className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  return (
    <>
      {/* combine base class + any custom class you pass */}
      <button className={`btn-enquiry ${className}`} onClick={openForm}>
        {label}
      </button>

      <EnquiryForm isOpen={isOpen} onClose={closeForm} />
    </>
  );
};

export default EnquiryButton;
