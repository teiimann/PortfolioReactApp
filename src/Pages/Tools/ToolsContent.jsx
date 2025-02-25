import React from 'react';
import styled from 'styled-components';
import OneTool from './OneTool';
import aNet from './ToolsImg/a.net.png';
import AdobeFinale from './ToolsImg/AdobeFinale.png';
import Blender from './ToolsImg/Blender.png';
import Cpp from './ToolsImg/c++.png';
import Django from './ToolsImg/Django.png';
import Figma from './ToolsImg/Figma.png';
import Flask from './ToolsImg/Flasks.png';
import HtmlCss from './ToolsImg/htmlcss.png';
import JavaScript from './ToolsImg/JavaScript.png';
import Pg from './ToolsImg/Pg.png';
import Python from './ToolsImg/python.png';
import Reactt from './ToolsImg/Reactt.png';
import TailWind from './ToolsImg/TailWind.png';
import Vue from './ToolsImg/Vue.png';
import GIti from './ToolsImg/Github-Logo-PNG.png'

const ToolsContent = () => {
  return (
    <StyledWrapper>
      <div className="tools-card">
        <div className="tools-section front-end">
          <span className="tools-title">FRONT-END</span>
          <div className="tools-content">
            <div className="tools-container">
              <OneTool img={Reactt} text="React" color="#61DAFB" />
              <OneTool img={Vue} text="Vue" color="#42b883" />
              <OneTool img={JavaScript} text="JavaScript" color="#F7DF1E" />
              <OneTool img={HtmlCss} text="HTML & CSS" color="#E34F26" />
              <OneTool img={TailWind} text="Tailwind CSS" color="#38BDF8" />
            </div>
          </div>
        </div>

        <div className="tools-section back-end">
          <span className="tools-title">BACK-END</span>
          <div className="tools-content">
            <div className="tools-container">
              <OneTool img={Python} text="Python" color="#3776AB" />
              <OneTool img={Django} text="Django" color="#21CC90" />
              <OneTool img={Flask} text="Flask" color="white" />
              <OneTool img={Cpp} text="C++" color="#00599C" />
              <OneTool img={aNet} text=".NET" color="#512BD4" />
            </div>
          </div>
        </div>

        <div className="tools-section other">
          <span className="tools-title">OTHER</span>
          <div className="tools-content">
            <div className="tools-container">
              <OneTool img={Pg} text="PostgreSQL" color="#336791" />
              <OneTool img={GIti} text="GitHub" color="purple" />
              <OneTool img={Figma} text="Figma" color="#F24E1E" />
              <OneTool img={AdobeFinale} text="Adobe" color="#A08019" />
              <OneTool img={Blender} text="Blender" color="#F5792A" />
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .tools-card {
    margin-top: 25px;
    width: 800px;
    height: 500px;
    border-radius: 8px;
    display: flex;
    gap: 10px;
    padding: 0.4em;
  }

  .tools-section {
    height: 100%;
    flex: 1;
    cursor: pointer;
    border-radius: 6px;
    transition: flex 0.5s ease-in-out;
    background: #212121;
    border: 3px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
  }

  .tools-section:hover {
    flex: 4;
  }

  .tools-title {
    min-width: 14em;
    padding: 0.5em;
    text-align: center;
    transform: rotate(-90deg);
    transition: opacity 0.3s ease, transform 0.2s ease;
    text-transform: uppercase;
    color: white;
    letter-spacing: 0.1em;
    font-size: 40px;
  }

  .tools-section:hover .tools-title {
    opacity: 0;
  }

  .tools-content {
    position: absolute;
    opacity: 0;
    transition: opacity 0.2s ease;
    color: white;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .tools-section:hover .tools-content {
    opacity: 1;
  }

  .tools-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }
`;

export default ToolsContent;
