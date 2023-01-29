import React from "react";
import styled from "styled-components";

const SocialButton = styled.a`
  text-decoration: none;
  position: relative;
  width: 50%;
  font-size: 18px;
  padding: 0.5rem 1rem;
  border: 1px solid #0540eb;
  border-radius: 5px;
  background-color: #fff;
  color: #0540eb;
  cursor: pointer;
  overflow: hidden;
  z-index: 5;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  box-shadow: 0px 1px 3px 1px #8d8d8d;

  :hover {
    animation: vibration 0.3s linear 1;
  }
  & img {
    width: 35px;
    height: 35px;
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
function SocialBtn({ src, alt, caption, link }) {
  return (
    <SocialButton href={link}>
      <img src={src} alt={alt} />
      <span>{caption}</span>
    </SocialButton>
  );
}

export default SocialBtn;
