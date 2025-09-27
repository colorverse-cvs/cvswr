import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.PNG";
import "./Header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <img src={logo} alt="Logo" className="header-logo" />
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
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
       <a href="mailto:someone@example.com" target="_blank" rel="noreferrer">
<i class="fa-regular fa-envelope"></i>
</a>

        <a
  href="https://wa.me/1234567890"
  target="_blank"
  rel="noreferrer"
>
  <i class="fab fa-whatsapp"></i>
</a>

      </div>
    </header>
  );
}

export default Header;
