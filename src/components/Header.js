import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.header`
  width: 100%;
  color: white;
  background: linear-gradient(
    222deg,
    rgba(5, 64, 235, 1) 23%,
    rgba(73, 14, 224, 1) 65%,
    rgba(2, 1, 138, 1) 100%
  );
  padding: 1rem 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  & a {
    color: white;
    font-size: 20px;
    text-decoration: none;
    position: relative;
    text-align: center;
    padding: 5px 1rem;
    overflow: hidden;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: currentColor;
      transform-origin: right;
      transform: scale3d(0, 1, 1);
      transition: transform 0.4s ease-in-out;
    }
    &::after {
      content: attr(data-text);
      position: absolute;
      left: 0;
      width: 100%;
      transform: translate3d(100%, 0, 0);
      transition: transform 0.4s ease-in-out;
    }

    & span {
      display: inline-block;
      transition: all 0.4s ease-in-out;
    }

    :hover:before {
      transform: scale3d(1, 1, 1);
      transform-origin: left;
    }
    :hover:after {
      transform: translate3d(0, 0, 0);
    }
    &:hover span {
      transform: translate3d(-150%, 0, 0);
    }
  }
`;
function Header() {
  return (
    <HeaderWrapper>
      <Link to="/" data-text="Home">
        <span>Home</span>
      </Link>
      <Link to="/login" data-text="Login">
        <span>Login</span>
      </Link>
    </HeaderWrapper>
  );
}

export default Header;