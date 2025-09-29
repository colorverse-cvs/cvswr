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
      messageField: {
        name: "message",
        placeholder: "Your Message",
        required: true,
        rows: 4,
      },
      submitBtn: "Let’s Talk",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    console.log("Form submitted:", data);
  };

  return (
    <div className="single-hero-section">
      <div className="overlay d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-white text-center text-md-start mb-4 mb-md-0">
              <p className="contain-p">{heroData.subHeading}</p>
              <h1
                className="fw-bold"
                dangerouslySetInnerHTML={{ __html: heroData.heading }}
              />
              <p
                dangerouslySetInnerHTML={{ __html: heroData.description }}
              />
               <EnquiryButton label="Get In Touch" />
            </div>

            <div className="col-md-6">
              <div className="form-stack-wrapper position-relative d-flex justify-content-center align-items-center">
                <div className="stack-card card-4"></div>
                <div className="stack-card card-3"></div>
                <div className="stack-card card-2"></div>
                <div className="stack-card card-1 form-section p-4 rounded shadow bg-white position-relative">
                  <h4 className="mb-3">{heroData.form.title}</h4>
                  <form onSubmit={handleSubmit}>
                    {heroData.form.fields.map((field, index) => (
                      <input
                        key={index}
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                        pattern={field.pattern || undefined}
                        className="form-control mb-3"
                      />
                    ))}
                    <textarea
                      name={heroData.form.messageField.name}
                      placeholder={heroData.form.messageField.placeholder}
                      required={heroData.form.messageField.required}
                      rows={heroData.form.messageField.rows}
                      className="form-control mb-3"
                    ></textarea>
                    <button type="submit" className="btn btn-primary w-100">
                      {heroData.form.submitBtn}
                    </button>
                  </form>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
