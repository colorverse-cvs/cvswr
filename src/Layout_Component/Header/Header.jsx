import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/symbol.PNG";
import "../Header/Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container">

          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} alt="Logo" className="header-logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link text-uppercase" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-uppercase" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-uppercase" to="/work">Work</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-uppercase" to="/clients">Clients</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-uppercase" to="/digital">Digital</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-uppercase" to="/contact">Contact</Link>
              </li>
            </ul>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-dark btn-sm">Quick Enquiry</button>
              <button className="btn btn-outline-dark btn-sm">Presentation</button>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark btn-sm"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
