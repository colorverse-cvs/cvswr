import { useEffect } from "react";
import "./HeroSection.css";
import EnquiryButton from "../../UI_Component/button";

const HeroSection = () => {
  const heroData = {
    heading: "We Are Digital <br /> Creative Agency",
    subHeading: "Creative work, creative mind",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Curabi sed metus id et viverra augue.",
    contentBtn: "Get in Touch",
    form: {
      title: "Start a Project",
      fields: [
        { name: "name", type: "text", placeholder: "Your Name", required: true },
        { name: "email", type: "email", placeholder: "Your Email", required: true },
        {
          name: "mobile",
          type: "tel",
          placeholder: "Your Mobile Number",
          required: true,
          pattern: "[0-9]{10}",
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
      },
      locationField: {
        name: "location",
        placeholder: "Your Location",
        required: true,
      },
      messageField: {
        name: "message",
        placeholder: "Your Message",
        required: true,
        rows: 2,
      },
      submitBtn: "Let’s Talk",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    console.log("Form submitted:", data);
  };

  useEffect(() => {
    const forms = document.querySelectorAll(".needs-validation");
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
        },
        false
      );
    });
  }, []);

  return (
    <div className="single-hero-section">
      <div className="overlay form-hero d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            {/* Left Content */}
            <div className="col-md-6 text-white text-center text-md-start mb-4 mb-md-0">
              <p className="contain-p">{heroData.subHeading}</p>
              <h1
                className="fw-bold"
                dangerouslySetInnerHTML={{ __html: heroData.heading }}
              />
              <p dangerouslySetInnerHTML={{ __html: heroData.description }} />
              <EnquiryButton label="Get In Touch" />
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
                      <form
                        className="row g-2 needs-validation"
                        noValidate
                        onSubmit={handleSubmit}
                      >
                        {heroData.form.fields.map((field, index) => {
                          const colClass =
                            field.name === "email" || field.name === "mobile"
                              ? "col-md-6"
                              : "col-12";

                          return (
                            <div className={colClass} key={index}>
                              <label className="form-label" htmlFor={field.name}>
                                {field.placeholder}
                              </label>
                              <input
                                type={field.type}
                                name={field.name}
                                id={field.name}
                                placeholder={field.placeholder}
                                required={field.required}
                                pattern={field.pattern || undefined}
                                className="form-control"
                              />
                              {/* <div className="valid-feedback">Looks good!</div> */}
                              <div className="invalid-feedback">
                                Please provide a valid {field.name}.
                              </div>
                            </div>
                          );
                        })}

                        {/* Location and Project Category Side by Side */}
                        <div className="col-md-6">
                          <label
                            className="form-label"
                            htmlFor={heroData.form.locationField.name}
                          >
                            {heroData.form.locationField.placeholder}
                          </label>
                          <input
                            type="text"
                            name={heroData.form.locationField.name}
                            id={heroData.form.locationField.name}
                            placeholder={heroData.form.locationField.placeholder}
                            required={heroData.form.locationField.required}
                            className="form-control"
                          />
                          <div className="invalid-feedback">
                            Please provide your location.
                          </div>
                        </div>

                        <div className="col-md-6">
                          <label
                            className="form-label"
                            htmlFor={heroData.form.projectCategory.name}
                          >
                            {heroData.form.projectCategory.placeholder}
                          </label>
                          <select
                            name={heroData.form.projectCategory.name}
                            id={heroData.form.projectCategory.name}
                            required
                            className="form-select"
                          >
                            <option value="">
                              {heroData.form.projectCategory.placeholder}
                            </option>
                            {heroData.form.projectCategory.options.map((option, i) => (
                              <option key={i} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                          <div className="invalid-feedback">
                            Please select a project category.
                          </div>
                        </div>

                        {/* Message */}
                        <div className="col-12">
                          <label
                            className="form-label"
                            htmlFor={heroData.form.messageField.name}
                          >
                            {heroData.form.messageField.placeholder}
                          </label>
                          <textarea
                            name={heroData.form.messageField.name}
                            id={heroData.form.messageField.name}
                            placeholder={heroData.form.messageField.placeholder}
                            required={heroData.form.messageField.required}
                            rows={heroData.form.messageField.rows}
                            className="form-control"
                          ></textarea>
                          <div className="invalid-feedback">
                            Please enter a message.
                          </div>
                        </div>

                        {/* Submit Button */}
                        <div className="col-12">
                          <button type="submit" className="btn-enquiry  w-50 mt-2">
                            {heroData.form.submitBtn}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* Courses Form */}
                  <div className="tab-pane fade" id="courses" role="tabpanel">
                    <div className="form-card p-3">
                      <h4 className="mb-3">Courses Enquiry</h4>
                      <form
                        className="row g-2 needs-validation"
                        noValidate
                        onSubmit={handleSubmit}
                      >
                        {/* Courses form fields */}
                        <div className="col-12">
                          <label htmlFor="studentName" className="form-label">
                            Student Name
                          </label>
                          <input
                            type="text"
                            name="studentName"
                            id="studentName"
                            placeholder="Student Name"
                            required
                            className="form-control"
                          />
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">
                            Please provide your name.
                          </div>
                        </div>

                        <div className="col-md-6">
                          <label htmlFor="studentEmail" className="form-label">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="studentEmail"
                            id="studentEmail"
                            placeholder="Email Address"
                            required
                            className="form-control"
                          />
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">
                            Please provide a valid email.
                          </div>
                        </div>

                        <div className="col-md-6">
                          <label htmlFor="studentMobile" className="form-label">
                            Mobile Number
                          </label>
                          <input
                            type="tel"
                            name="studentMobile"
                            id="studentMobile"
                            placeholder="Mobile Number"
                            pattern="[0-9]{10}"
                            required
                            className="form-control"
                          />
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">
                            Please provide a 10-digit mobile number.
                          </div>
                        </div>

                        <div className="col-6">
                          <label htmlFor="studentLocation" className="form-label">
                            Location
                          </label>
                          <input
                            type="text"
                            name="studentLocation"
                            id="studentLocation"
                            placeholder="Your Location"
                            required
                            className="form-control"
                          />
                          <div className="invalid-feedback">
                            Please provide your location.
                          </div>
                        </div>

                        <div className="col-6">
                          <label htmlFor="course" className="form-label">
                            Select Course
                          </label>
                          <select
                            name="course"
                            id="course"
                            className="form-select"
                            required
                          >
                            <option value="">Select Course</option>
                            <option value="web">Web Development</option>
                            <option value="design">UI/UX Design</option>
                            <option value="marketing">Digital Marketing</option>
                            <option value="app">Mobile App Development</option>
                            <option value="data">Data Science</option>
                          </select>
                          <div className="invalid-feedback">
                            Please select a course.
                          </div>
                        </div>

                        <div className="col-12">
                          <label htmlFor="studentMessage" className="form-label">
                            Message
                          </label>
                          <textarea
                            name="studentMessage"
                            id="studentMessage"
                            placeholder="Your Message"
                            required
                            rows="2"
                            className="form-control"
                          ></textarea>
                          <div className="invalid-feedback">
                            Please enter your message.
                          </div>
                        </div>

                        <div className="col-6">
                          <button type="submit" className="btn-enquiry w-100 mt-2">
                            Submit Enquiry
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
