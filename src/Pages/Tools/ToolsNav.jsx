import React from "react";
import "./Tools.css"
import { Link } from "react-router-dom";

const ToolsNav = () => {
    return (
        <section className="navbartoolspage-1651 pos-abs">
        <div className="instruments-1652 pos-abs">
          <span className="instruments-1652-0">INSTRUMENTS</span>
        </div>

        <div className="teiimann-1653 pos-abs">
          <Link to='/' className="teiimann-1653-0 nav-links">TEIIMANN</Link>
        </div>

        <div className="contacts-1656 pos-abs">
          <Link to='/contacts' className="contacts-1656-0 nav-links">CONTACTS </Link>
        </div>

        <div className="projects-1654 pos-abs">
          <Link to='/projects' className="projects-1654-0 nav-links">PROJECTS </Link>
        </div>

        <div className="about-1655 pos-abs">
          <Link to='/about' className="about-1655-0 nav-links">ABOUT</Link>
        </div>
      </section>
    )
}

export default ToolsNav;