import React from "react";
import "./Projects.css"
import { Link } from "react-router-dom";

const ProjectsNav = () => {
    return (
        <section className="navbarprojpage-183 pos-abs">
            <div className="projects-184 pos-abs">
              <span className="projects-184-0">PROJECTS</span>
            </div>
  
            <div className="teiimann-185 pos-abs">
              <Link to='/' className="teiimann-185-0 nav-links">TEIIMANN</Link>
            </div>
  
            <div className="contacts-188 pos-abs">
              <Link to='/contacts' className="contacts-188-0 nav-links">CONTACTS </Link>
            </div>
  
            <div className="about-186 pos-abs">
              <Link to='/about' className="about-186-0 nav-links">ABOUT</Link>
            </div>
  
            <div className="tools-187 pos-abs">
              <Link to='/tools' className="tools-187-0 nav-links">TOOLS </Link>
            </div>
          </section>
    )
}

export default ProjectsNav;