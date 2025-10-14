import React from "react";
import "./Footer.css";
import logo from "../../assets/Colorverse_Logo1.PNG";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import mail from "../../assets/mail.png";
import WhatsApp from "../../assets/WhatsApp.webp";

const Footer = () => {
  const footerData = {
    logo: logo,
    contact: {
      office: "Kanakia Wallstreet, Andheri East",
      help: "+91 8605807047",
      email: "COLORVERSESTUDIO25@GMAIL.COM",
    },
    about:
      "Bringing visions to life with creative 3D design, video, and branding solutions that inspire success.",
    quickLinks: [
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: "Projects", url: "/projects" },
      { name: "Contact", url: "/contact" },
    ],
    socialLinks: [
      { platform: "linkedin", url: "https://www.linkedin.com/company/colorverse-studio/", icon: linkedin },
      { platform: "instagram", url: "https://instagram.com/colorverse_studio1", icon: instagram },
      { platform: "mail", url: "mailto:COLORVERSESTUDIO25@GMAIL.COM", icon: mail },
      { platform: "whatsapp", url: "https://wa.me/8605807047", icon: WhatsApp },
    ],
  };

  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row gy-4">

          {/* Logo */}
          <div className="col-12 col-md-2 text-center text-md-start">
            <a href="/">
              <img className="footer-logo mb-3" src={footerData.logo} alt="Logo" />
            </a>
          </div>

          {/* Contact */}
          <div className="col-12 col-md-3">
            <h6 className="fw-bold footer-heading">Our Contact</h6>
            <p>Office: {footerData.contact.office}</p>
            <p>Help: {footerData.contact.help}</p>
            <p>Email: {footerData.contact.email}</p>
          </div>

          {/* About */}
          <div className="col-12 col-md-3">
            <h6 className="fw-bold footer-heading">About Us</h6>
            <p>{footerData.about}</p>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-2">
            <h6 className="fw-bold footer-heading">Quick Links</h6>
            <ul className="list-unstyled">
              {footerData.quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="text-decoration-none text-dark">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-12 col-md-2">
            <h6 className="fw-bold footer-heading">Follow Us</h6>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
  {footerData.socialLinks.map((item, index) => (
    <a
      key={index}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={item.icon}
        alt={item.platform}
        style={{ width: "32px", height: "32px" }}
      />
    </a>
  ))}
</div>

          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
