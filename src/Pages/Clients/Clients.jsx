import React from "react";
import ProjectStart from "../../components/ProjectStart/ProjectStart"


function Clients() {
  return (
    <div className="container py-5">
      <h1 className="mb-4">Our Clients</h1>
      <p>
        This is the Clients page. You can list your clients, case studies, or testimonials here.
      </p>
      <ProjectStart
      title={<>Creative Solutions <br /> for Real Impact</>}
      buttonLabel="Contact Us"
    />
    </div>
  );
}

export default Clients;
