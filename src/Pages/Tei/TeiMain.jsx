import React from "react";
import "./Tei.css"; 
import BackImgTei from "../../Images/backimg.png"
import { Link } from "react-router-dom";

const TeiPage = () => {
  return (
    <div className="parent-div ">
      <div className="mainpage-96 pos-abs">
        <img
          src={BackImgTei}
          className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-96 "
          alt="96-ALT"
        />

        <div className="teiimann-88 pos-abs">
          <span className="teiimann-88-0">TEIIMANN</span>
        </div>

        <div className="portfolio-89 pos-abs">
          <span className="portfolio-89-0">PORTFOLIO</span>
        </div>
        <section className="navbarmainpage-818 pos-abs">
          <div className="nav-4345 pos-abs">
            <div className="contacts-813 pos-abs">
              <Link to="/contacts" className="contacts-813-0 nav-links">CONTACTS</Link>
            </div>

            <div className="projects-811 pos-abs">
              <Link to="/projects" className="projects-811-0 nav-links">PROJECTS</Link>
            </div>

            <div className="tools-812 pos-abs">
              <Link to="/tools" className="tools-812-0 nav-links">TOOLS </Link>
            </div>

            <div className="about-810 pos-abs">
              <Link to="/about" className="about-810-0 nav-links">ABOUT </Link>
            </div>
          </div>
        </section>

        <div className="mindimg-4547 pos-abs">
          <img
            src="https://s3-alpha-sig.figma.com/img/fae2/feba/53501f516891070c0fc39b72015b0d01?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Vveiu9Blfm2w4SVWzLBACOimQXMbbFt0NZQnL9mlycUFkSfD2hR6G1R2IcLdbuzH-c7sBx48QgpBxl5fuFqULnS9pU8t4CEUGxi3Ktb~F2B0r96S7QrnLatsxSkLSUvXnSdxB3~lnJvdPpsRJbh25tH~FhXA-z~moiCz6fP5~RbN10uBlJBKv~5DgzrG4A5SqWPZstk4TWRIisqaFzD5rmgwOZqH0S9IDgcBJovI-EIA9~~A8dfxP1YvSnREhbvi9X9G0huGUrAzyncvEOc53Cz1OCVqkTYKqIheindSnSymoa7rLfJPQ7buL4d9zYdO3j3uk5A6yuszTD4HDP~6ag__"
            className="pos-abs image-div bg-no-repeat bg-crop nodeBg-4547 "
            alt="4547-ALT"
          />{" "}
        </div>

        <div className="immovable-mind-4548 pos-abs">
          <span className="immovable-mind-4548-0">IMMOVABLE MIND </span>
        </div>

        <div className="mmm-4546 pos-abs">
          <span className="mmm-4546-0">M.M.M</span>
        </div>
      </div>
    </div>
  );
};

export default TeiPage;
