import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../../assets/symbol.PNG"; 

const Footer = () => {
  const footerData = {
    logo: logo,
    contact: {
      office: "4042 Imperial Road, UK",
      help: "(041) 425 277 / 425",
      email: "inbox@finance.com",
    },
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere porta vitae mi accumsan. Ultricies",
    subscribePlaceholder: "Your Email",
    socialLinks: [
      { platform: "facebook", url: "#" },
      { platform: "twitter", url: "#" },
      { platform: "instagram", url: "#" },
    ],
  };

  return (
    <footer className="bg-white py-5">
      <div className="container">
        <div className="row justify-content-between align-items-start">

          <div className="col-12 col-md-2 mb-4 mb-md-0">
            <img className="footer-logo" src={footerData.logo} alt="Logo" />
          </div>

          <div className="col-6 col-md-3 mb-4 mb-md-0">
            <h6 className="fw-bold footer-heading">Our Contact</h6>
            <p className="mb-1">Office: {footerData.contact.office}</p>
            <p className="mb-1">Help: {footerData.contact.help}</p>
            <p className="mb-0">Email: {footerData.contact.email}</p>
          </div>

          <div className="col-6 col-md-3 mb-4 mb-md-0">
            <h6 className="fw-bold footer-heading">About Us</h6>
            <p>{footerData.about}</p>
          </div>
          <div className="col-12 col-md-3">
            <h6 className="fw-bold footer-heading">Subscribe</h6>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control bg-light border-0"
                placeholder={footerData.subscribePlaceholder}
              />
              <button className="btn btn-primary" type="button">
                ➤
              </button>
            </div>

            <div>
              <p className="fw-bold footer-heading mb-1">Follow Us</p>
              <div className="d-flex gap-3">
                {footerData.socialLinks.map((item, index) => {
                  let Icon;
                  if (item.platform === "facebook") Icon = FaFacebookF;
                  else if (item.platform === "twitter") Icon = FaTwitter;
                  else Icon = FaInstagram;

                  return (
                    <a key={index} href={item.url} className="text-dark">
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
