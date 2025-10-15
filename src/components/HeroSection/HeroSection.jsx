import React, { useState } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const heroData = {
    heading: "We Are Digital Creative Agency",
    subHeading: "Creative work, creative mind",
    description:
      "Bringing visions to life with creative 3D design, video, and branding solutions that inspire success.",
    form: {
      title: "Start a Project",
      fields: [
        { name: "name", type: "text", placeholder: "Your Name", required: true, label: "Name" },
        { name: "email", type: "email", placeholder: "Your Email", required: true, label: "Email" },
        {
          name: "mobile",
          type: "tel",
          placeholder: "Your Mobile Number",
          required: true,
          pattern: "[0-9]{10}",
          label: "Mobile Number",
        },
      ],
      projectCategory: {
        name: "projectCategory",
        placeholder: "Select Project Category",
        options: [
          "Web Development",
          "UI/UX Design",
          "Digital Marketing",
          "Mobile App",
          "E-Commerce",
        ],
        label: "Project Category",
      },
      locationField: { name: "location", placeholder: "Your Location", required: true, label: "Location" },
      messageField: { name: "message", placeholder: "Your Message", required: true, rows: 2, label: "Message" },
      submitBtn: "Let’s Talk",
    },
  };

  const courseOptions = [
    "Graphic Design",
    "Video Editing",
    "Autodesk Maya",
    "CG & VFX Compositing",
  ];

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "5c1732cb-766e-4768-9641-dc829f8be7bf");
    formData.append("subject", "New Enquiry from Hero Section");
    formData.append(
      "from_name",
      formData.get("name") || formData.get("studentName")
    );

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
    <div className="single-hero-section">
      <div className="overlay form-hero d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            {/* Left Content */}
            <div className="col-md-6 text-white text-center text-md-start mb-4 mb-md-0">
              <p className="contain-p">{heroData.subHeading}</p>
              <h1 className="fw-bold">{heroData.heading}</h1>
              <p>{heroData.description}</p>

              <div className="hero-btns-wrapper text-center text-md-start mt-3">
                <p className="btn-info-text fw-semibold">Explore Our Creative Work Samples:</p>
                <div className="hero-btns d-flex gap-3 justify-content-center justify-content-md-start flex-wrap">
                  <a
                    href="COLORVERSE_AI.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-enquiry"
                  >
                    AI Graphic
                  </a>
                  <a
                    href="STUDIO_GRAPHICS.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-enquiry"
                  >
                    Social Media
                  </a>
                </div>
              </div>
            </div>

            {/* Right Form Tabs */}
            <div className="col-md-6 d-flex justify-content-center">
              <div className="form-wrapper w-100" style={{ maxWidth: "500px" }}>
                <ul className="nav nav-tabs mb-3" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="project-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#project"
                      type="button"
                      role="tab"
                    >
                      Project
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="courses-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#courses"
                      type="button"
                      role="tab"
                    >
                      Courses
                    </button>
                  </li>
                </ul>

                <div className="tab-content">
                  {/* Project Form */}
                  <div className="tab-pane fade show active" id="project" role="tabpanel">
                    <div className="form-card p-3">
                      <h4 className="mb-3">{heroData.form.title}</h4>
                      <form onSubmit={handleSubmit} className="row g-2">
                        {heroData.form.fields.map((field, index) => (
                          <div
                            key={index}
                            className={field.name === "email" || field.name === "mobile" ? "col-md-6" : "col-12"}
                          >
                            <label className="form-label">{field.label}</label>
                            <input
                              type={field.type}
                              name={field.name}
                              placeholder={field.placeholder}
                              required={field.required}
                              pattern={field.pattern || undefined}
                              className="form-control"
                            />
                          </div>
                        ))}

                        <div className="col-md-6">
                          <label className="form-label">{heroData.form.locationField.label}</label>
                          <input
                            type="text"
                            name={heroData.form.locationField.name}
                            placeholder={heroData.form.locationField.placeholder}
                            required
                            className="form-control"
                          />
                        </div>

                        <div className="col-md-6">
                          <label className="form-label">{heroData.form.projectCategory.label}</label>
                          <select
                            name={heroData.form.projectCategory.name}
                            required
                            className="form-select"
                          >
                            <option value="">{heroData.form.projectCategory.placeholder}</option>
                            {heroData.form.projectCategory.options.map((opt, i) => (
                              <option key={i} value={opt}>{opt}</option>
                            ))}
                          </select>
                        </div>

                        <div className="col-12">
                          <label className="form-label">{heroData.form.messageField.label}</label>
                          <textarea
                            name={heroData.form.messageField.name}
                            placeholder={heroData.form.messageField.placeholder}
                            required
                            rows={heroData.form.messageField.rows}
                            className="form-control"
                          />
                        </div>

                        <div className="col-md-6">
                          <button type="submit" className="btn-enquiry w-100 w-md-50 mt-2" disabled={loading}>
                            {loading ? "Sending..." : heroData.form.submitBtn}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* Courses Form */}
                  <div className="tab-pane fade" id="courses" role="tabpanel">
                    <div className="form-card p-3">
                      <h4 className="mb-3">Courses Enquiry</h4>
                      <form onSubmit={handleSubmit} className="row g-2">
                        <div className="col-12">
                          <label className="form-label">Student Name</label>
                          <input
                            type="text"
                            name="studentName"
                            placeholder="Student Name"
                            required
                            className="form-control"
                          />
                        </div>

                        <div className="col-md-6">
                          <label className="form-label">Email Address</label>
                          <input
                            type="email"
                            name="studentEmail"
                            placeholder="Email Address"
                            required
                            className="form-control"
                          />
                        </div>

                        <div className="col-md-6">
                          <label className="form-label">Mobile Number</label>
                          <input
                            type="tel"
                            name="studentMobile"
                            placeholder="Mobile Number"
                            pattern="[0-9]{10}"
                            required
                            className="form-control"
                          />
                        </div>

                        <div className="col-6">
                          <label className="form-label">Location</label>
                          <input
                            type="text"
                            name="studentLocation"
                            placeholder="Your Location"
                            required
                            className="form-control"
                          />
                        </div>

                        <div className="col-6">
                          <label className="form-label">Select Course</label>
                          <select
                            name="course"
                            required
                            className="form-select"
                          >
                            <option value="">Select Course</option>
                            {courseOptions.map((opt, i) => (
                              <option key={i} value={opt}>{opt}</option>
                            ))}
                          </select>
                        </div>

                        <div className="col-12">
                          <label className="form-label">Message</label>
                          <textarea
                            name="studentMessage"
                            placeholder="Your Message"
                            required
                            rows="2"
                            className="form-control"
                          />
                        </div>

                        <div className="col-lg-6">
                          <button type="submit" className="btn-enquiry w-100 mt-2" disabled={loading}>
                            {loading ? "Sending..." : "Submit Enquiry"}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Right Forms */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
