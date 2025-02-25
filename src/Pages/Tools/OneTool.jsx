import React from 'react';
import styled from 'styled-components';

const OneTool = ({ img, text, color }) => {
  return (
    <StyledToolWrapper color={color}>
      <div className="tool-card">
        <img src={img} alt={text} className="tool-image" />
        <div className="tool-header">{text}</div>
      </div>
    </StyledToolWrapper>
  );
};

const StyledToolWrapper = styled.div`
  .tool-card {
    width: 130px;
    height: 170px;
    background-color: #25241c;
    border: 3px solid ${(props) => props.color || '#f7df1e'};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.color || '#f7df1e'};
    border-radius: 15px;
    text-align: center;
    margin-left: 10px;
    margin-top: 15px;
    transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
  }

  .tool-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 8px;
    transition: transform 0.3s ease;
  }
  
  .tool-header {
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
    transition: color 0.3s ease;
  }

  /* Анимация при наведении */
  .tool-card:hover {
    transform: translateY(-20px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }



  .tool-card:hover .tool-image {
    transform: scale(1.1);
  }
`;

export default OneTool;
