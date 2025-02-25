import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const AboutNav = () => {
  return (
    <section className="navbaraboutpage-1516 pos-abs">
            <div className="about-me-1517 pos-abs">
              <span className="about-me-1517-0">ABOUT ME</span>
            </div>
  
            <div className="teiimann-1518 pos-abs">
              <Link to='/' className="teiimann-1518-0 nav-links">TEIIMANN</Link>
            </div>
  
            <div className="contacts-1522 pos-abs">
              <Link to='/contacts' className="contacts-1522-0 nav-links">CONTACTS </Link>
            </div>
  
            <div className="projects-1520 pos-abs">
              <Link to='/projects' className="projects-1520-0 nav-links">PROJECTS </Link>
            </div>
  
            <div className="tools-1521 pos-abs">
              <Link to='/tools' className="tools-1521-0 nav-links">TOOLS </Link>
            </div>
          </section>
  );
};

export default AboutNav;
