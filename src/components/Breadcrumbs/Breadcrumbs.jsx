import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumbs.css";

const Breadcrumb = () => {
  const location = useLocation();

  const pagesConfig = {
    "/about": {
      title: "About ColorVerse Studio",
      subtitle:
        "At ColorVerse Studio, we specialize in bringing your vision to life with a comprehensive suite of multimedia services.",
      // backgroundImage: "/assets/hero-about.jpg",
    },
    "/showreels": {
      title: "Showreels",
      subtitle: "Explore our creative work and past projects",
      // backgroundImage: "/assets/hero-showreels.jpg",
    },
    "/Courses": {
      title: "Our Courses",
      subtitle: "Trusted by top brands for creative excellence",
      // backgroundImage: "/assets/hero-clients.jpg",
    },
    "/digital": {
      title: "Digital Services",
      subtitle:
        "3D advertising, graphic design, video editing, and voice-over solutions — all in one place",
      // backgroundImage: "/assets/hero-digital.jpg",
    },
    "/contact": {
      title: "Contact ColorVerse Studio",
      subtitle: "Let's collaborate and bring your ideas to life",
      // backgroundImage: "/assets/hero-contact.jpg",
    },
  };

  const config = pagesConfig[location.pathname] || {};
  const pageTitle =
    config.title || formatLabel(location.pathname.split("/").pop());
  const subtitle = config.subtitle || ""; // Optional subtitle
  const backgroundImage = config.backgroundImage || null;

  if (location.pathname === "/") return null;

  const pathnames = location.pathname.split("/").filter((x) => x);

  // Apply image or gradient fallback
  const heroStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : { backgroundImage: "linear-gradient(90deg, #7f00ff, #e100ff)" };

  return (
   <div className="breadcrumb-hero" style={heroStyle}>
  <div className="breadcrumb-overlay">
    <div className="breadcrumb-content container">
      {/* Title and subtitle centered */}
      <div className="breadcrumb-header">
        <h2 className="breadcrumb-title">{pageTitle}</h2>
        {subtitle && <p className="breadcrumb-subtitle">{subtitle}</p>}
      </div>

      {/* Breadcrumb navigation fixed to bottom */}
      <nav className="breadcrumb-nav" aria-label="breadcrumb">
        <ol className="breadcrumb-list">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
            const isLast = index === pathnames.length - 1;

            return (
              <li
                key={routeTo}
                className={`breadcrumb-item ${isLast ? "active" : ""}`}
                aria-current={isLast ? "page" : undefined}
              >
                {isLast ? formatLabel(name) : <Link to={routeTo}>{formatLabel(name)}</Link>}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  </div>
</div>

  );
};

// Helper to format label
const formatLabel = (str) =>
  str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

export default Breadcrumb;
