import React from 'react';
import styled from 'styled-components';

const InputContacts = ({ label }) => {
  return (
    <StyledWrapper>
      <div className="brutalist-container">
        <input placeholder="TYPE HERE" className="brutalist-input smooth-type" type="text" />
        <label className="brutalist-label">{label}</label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
margin-top: 30px;
  .brutalist-container {
    position: relative;
    width: 400px;
    font-family: monospace;
  }

  .brutalist-input {
    width: 100%;
    padding: 15px;
    font-size: 18px;
    font-weight: bold;
    color: #000;
    background-color: #fff;
    border: 4px solid #000;
    position: relative;
    overflow: hidden;
    border-radius: 0;
    outline: none;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    box-shadow: 5px 5px 0 #000, 10px 10px 0 red;
  }

  .brutalist-label {
    position: absolute;
    left: -3px;
    top: -35px;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    background-color: #000;
    padding: 5px 10px;
    transform: rotate(-1deg);
    z-index: 1;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  .brutalist-input:focus + .brutalist-label {
    transform: rotate(0deg) scale(1.05);
    background-color: red;
  }
`;

export default InputContacts;
