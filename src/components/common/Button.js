import React from "react";
import styled from "styled-components";
const ButtonDiv = styled.div`
  margin: 1rem 0;
  padding: 1rem;

  & button {
    position: relative;
    width: 420px;
    font-size: 18px;
    padding: 1rem 2rem;
    border: 1px solid #0540eb;
    border-radius: 5px;
    background-color: #fff;
    color: #0540eb;
    cursor: pointer;
    overflow: hidden;
    z-index: 5;
    transition: all 0.5s;

    :hover {
      color: #fff;
    }

    :before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 0%;
      border-radius: 0 0 50% 50%;
      background-color: #0540eb;
      z-index: -1;
      transition: all 0.5s;
    }

    :hover::before {
      height: 190%;
    }
    :focus,
    :active {
      animation: vibration 0.3s linear 1;
    }
  }

  @keyframes vibration {
    0% {
      transform: rotate(-3deg);
    }
    20% {
      transform: rotate(3deg);
    }
    40% {
      transform: rotate(-3deg);
    }
    60% {
      transform: rotate(3deg);
    }
    80% {
      transform: rotate(-3deg);
    }
    100% {
      transform: rotate(0);
    }
  }
`;
function Button({ type, label }) {
  return (
    <ButtonDiv>
      <button type={type}>{label}</button>
    </ButtonDiv>
  );
}

export default Button;
