import React from "react";
import "./Contact.css"
import { Link } from "react-router-dom";

const ContactsNav = () =>{
    return(
        <section className="navbarcontactpa-1680 pos-abs">
            <div className="contacts-1681 pos-abs">
              <span className="contacts-1681-0">CONTACTS</span>
            </div>
  
            <div className="teiimann-1682 pos-abs">
              <Link to='/' className="teiimann-1682-0 nav-links">TEIIMANN</Link>
            </div>
  
            <div className="contacts-1685 pos-abs">
              <Link to='/about' className="contacts-1685-0 nav-links">ABOUT</Link>
            </div>
  
            <div className="projects-1683 pos-abs">
              <Link to='/projects' className="projects-1683-0 nav-links">PROJECTS</Link>
            </div>
  
            <div className="tools-1684 pos-abs">
              <Link to='/tools' className="tools-1684-0 nav-links">TOOLS</Link>
            </div>
          </section>
    )
}

export default ContactsNav;