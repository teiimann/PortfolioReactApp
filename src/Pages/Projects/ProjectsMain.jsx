import React from "react";
import "./Projects.css";
import ProjectsNav from "./ProjectsNav";
import EyesImg from "../../Images/Eyes.jpg";
import SwordImg from "../../Images/Sword.jpg";

const ProjectsPage = () => {
  return (
    <div className="parent-div ">
      <div className="projectpage-182 pos-abs">
        {/* NavbarProjPage1 */}
        <ProjectsNav />
        {/* Img1 */}
        <section className="img-1837 pos-abs">
          <div className="projimg-1811 pos-abs">
            <img
              src={SwordImg}
              className="pos-abs image-div bg-no-repeat bg-crop nodeBg-1811 "
              alt="1811-ALT"
            />
          </div>

          <div className="projimg-1810 pos-abs">
            <img
              src={EyesImg}
              className="pos-abs image-div bg-no-repeat bg-crop nodeBg-1810 "
              alt="1810-ALT"
            />
          </div>
        </section>
        {/* Frames1 */}
        <section className="frames-5032 pos-abs">
  <div className="oneframe-504 pos-abs">
    <a href="https://aisa-app-final.vercel.app" target="_blank" rel="noopener noreferrer" style={{ display: "block", width: "100%", height: "100%", position: "absolute" }}>
      <div className="rectangle-3-502 pos-abs"></div>
      <div className="rectangle-4-503 pos-abs"></div>
      <div className="project-name-527 pos-abs">
        <span className="project-name-527-0">{`Aisa Roadmap`}</span>
      </div>
    </a>
  </div>

  <div className="oneframe-5014 pos-abs">
    <a href="https://github.com/teiimann/Banks.com" target="_blank" rel="noopener noreferrer" style={{ display: "block", width: "100%", height: "100%", position: "absolute" }}>
      <div className="rectangle-3-5015 pos-abs"></div>
      <div className="rectangle-4-5016 pos-abs"></div>
      <div className="project-name-5213 pos-abs">
        <span className="project-name-5213-0">{`Banks.com`}</span>
      </div>
    </a>
  </div>

  <div className="oneframe-5020 pos-abs">
    <a href="https://github.com/teiimann/DeepFaceApp" target="_blank" rel="noopener noreferrer" style={{ display: "block", width: "100%", height: "100%", position: "absolute" }}>
      <div className="rectangle-3-5021 pos-abs"></div>
      <div className="rectangle-4-5022 pos-abs"></div>
      <div className="project-name-5212 pos-abs">
        <span className="project-name-5212-0">{`DeepFace`}</span>
      </div>
    </a>
  </div>

  <div className="oneframe-508 pos-abs">
    <a href="https://expresso-app-mu.vercel.app" target="_blank" rel="noopener noreferrer" style={{ display: "block", width: "100%", height: "100%", position: "absolute" }}>
      <div className="rectangle-3-509 pos-abs"></div>
      <div className="rectangle-4-5010 pos-abs"></div>
      <div className="project-name-5214 pos-abs">
        <span className="project-name-5214-0">{`Expresso`}</span>
      </div>
    </a>
  </div>

  <div className="oneframe-5026 pos-abs">
    <a href=" https://teiimann.github.io/ITfestWeb/" target="_blank" rel="noopener noreferrer" style={{ display: "block", width: "100%", height: "100%", position: "absolute" }}>
      <div className="rectangle-3-5027 pos-abs"></div>
      <div className="rectangle-4-5028 pos-abs"></div>
      <div className="project-name-5210 pos-abs">
        <span className="project-name-5210-0">{`ss website`}</span>
      </div>
    </a>
  </div>

  <div className="oneframe-5029 pos-abs">
    <a href="https://github.com/teiimann/BlogAppDJ" target="_blank" rel="noopener noreferrer" style={{ display: "block", width: "100%", height: "100%", position: "absolute" }}>
      <div className="rectangle-3-5030 pos-abs"></div>
      <div className="rectangle-4-5031 pos-abs"></div>
      <div className="project-name-526 pos-abs">
        <span className="project-name-526-0">{`Blog Media`}</span>
      </div>
    </a>
  </div>

  <div className="oneframe-5017 pos-abs">
    <a href="https://teiimann.github.io/TodoApp/" target="_blank" rel="noopener noreferrer" style={{ display: "block", width: "100%", height: "100%", position: "absolute" }}>
      <div className="rectangle-3-5018 pos-abs"></div>
      <div className="rectangle-4-5019 pos-abs"></div>
      <div className="project-name-528 pos-abs">
        <span className="project-name-528-0">{`To-Do App`}</span>
      </div>
    </a>
  </div>

  <div className="oneframe-505 pos-abs">
    <a href="https://teiimann.github.io/TwotterApp/" target="_blank" rel="noopener noreferrer" style={{ display: "block", width: "100%", height: "100%", position: "absolute" }}>
      <div className="rectangle-3-506 pos-abs"></div>
      <div className="rectangle-4-507 pos-abs"></div>
      <div className="project-name-525 pos-abs">
        <span className="project-name-525-0">{`Twitter 2.0`}</span>
      </div>
    </a>
  </div>

  <div className="oneframe-5011 pos-abs">
    <a href="https://weather-app-delta-mocha-83.vercel.app" target="_blank" rel="noopener noreferrer" style={{ display: "block", width: "100%", height: "100%", position: "absolute" }}>
      <div className="rectangle-3-5012 pos-abs"></div>
      <div className="rectangle-4-5013 pos-abs"></div>
      <div className="project-name-524 pos-abs">
        <span className="project-name-524-0">{`Weather App`}</span>
      </div>
    </a>
  </div>

  <div className="oneframe-5023 pos-abs">
    <a href="https://solar-app-final.vercel.app" target="_blank" rel="noopener noreferrer" style={{ display: "block", width: "100%", height: "100%", position: "absolute" }}>
      <div className="rectangle-3-5024 pos-abs"></div>
      <div className="rectangle-4-5025 pos-abs"></div>
      <div className="project-name-529 pos-abs">
        <span className="project-name-529-0">{`Solar App`}</span>
      </div>
    </a>
  </div>
</section>

      </div>
    </div>
  );
};

export default ProjectsPage;
