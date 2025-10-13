import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.PNG";
import "./Header.css";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import mail from "../../assets/mail.png";
import WhatsApp from "../../assets/WhatsApp.webp";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // ✅ Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  // ✅ Handle header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`custom-header container ${scrolled ? "scrolled" : ""}`}>
      <div className="header-bg"></div>

      <div className="header-left">
        <a href="/">
          <img src={logo} alt="Logo" className="header-logo" />
        </a>
      </div>

      {/* Hamburger icon */}
      <div
        className="mobile-menu-icon"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <i className="fas fa-bars"></i>
      </div>

      {/* Navigation menu */}
      <nav
        className={`header-nav ${mobileMenuOpen ? "mobile-open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/showreels" className="nav-link">Showreels</NavLink>
        <NavLink to="/courses" className="nav-link">Courses</NavLink>
        <NavLink to="/digital" className="nav-link">Services</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
      </nav>

      <div className="header-right">
        <a href="https://wa.me/8605807047" target="_blank" rel="noreferrer">
          <img className="icons" src={WhatsApp} alt="WhatsApp" />
        </a>
        <a href="mailto:COLORVERSESTUDIO25@GMAIL.COM" target="_blank" rel="noreferrer">
          <img className="icons" src={mail} alt="Mail" />
        </a>
        <a
          href="https://instagram.com/colorverse_studio1"
          target="_blank"
          rel="noreferrer"
        >
          <img className="icons" src={instagram} alt="Instagram" />
        </a>

        <a
          href="https://www.linkedin.com/company/colorverse-studio/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="icons" src={linkedin} alt="LinkedIn" />
        </a>


      </div>
    </header>
  );
}

export default Header;
