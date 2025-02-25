import React from 'react';
import styled from 'styled-components';
import ImgFrame from './ImgFrame';
import MyPhoto from "../Images/MyPhoto.png"

const AboutCard = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="bg">
        <section className="card-1649 pos-abs">
      <ImgFrame src={MyPhoto}/>

        <div className="imangali-tleuzh-1633 pos-abs">
          <span className="imangali-tleuzh-1633-0">{`Imangali Tleuzhanov`}</span>
        </div>

        <div className="lang-1634 pos-abs">
          <span className="lang-1634-0">{`lang: 🇰🇿🇷🇺🇬🇧🇩🇪`}</span>
        </div>

        <div className="gpa-47-1635 pos-abs">
          <span className="gpa-47-1635-0">{`gpa: 4.7+`}</span>
        </div>
      </section>
        </div>
        <div className="blob" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 200px;
    height: 250px;
    border-radius: 14px;
    z-index: 1111;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
    ;
  }

  .bg {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 190px;
    height: 240px;
    z-index: 2;
    background: rgba(255, 255, 255, .95);
    backdrop-filter: blur(24px);
    border-radius: 10px;
    overflow: hidden;
    outline: 2px solid white;
  }

  .blob {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #ff0000;
    opacity: 1;
    filter: blur(12px);
    animation: blob-bounce 5s infinite ease;
  }

  @keyframes blob-bounce {
    0% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }

    25% {
      transform: translate(-100%, -100%) translate3d(100%, 0, 0);
    }

    50% {
      transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
    }

    75% {
      transform: translate(-100%, -100%) translate3d(0, 100%, 0);
    }

    100% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
  }`;

export default AboutCard;
