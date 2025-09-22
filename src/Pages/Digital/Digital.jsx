import React from "react";
import ProjectStart from "../../components/ProjectStart/ProjectStart"


function Digital() {
  return (
    <div className="container py-5">
      <h1 className="mb-4">Digital Services</h1>
      <p>
        This is the Digital page. You can describe your digital marketing services, campaigns, or offerings here.
      </p>
      <ProjectStart
     title={<>Start Your Digital <br /> Journey With Us</>}
      buttonLabel="Contact Us"
    />
    </div>
  );
}

export default Digital;
