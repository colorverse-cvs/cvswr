import React, { useState } from "react";
import EnquiryForm from "../components/EnquiryForm/EnquiryForm";
import "./button.css"; 

const EnquiryButton = ({ label = "Enquiry" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  return (
    <>
      <button className="btn-enquiry" onClick={openForm}>
        {label}
      </button>

      <EnquiryForm isOpen={isOpen} onClose={closeForm} />
    </>
  );
};

export default EnquiryButton;
