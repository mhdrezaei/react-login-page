import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { Link } from "react-router-dom";
import Toggle from "./common/Toggle";

const HeaderWrapper = styled.header`
  color: white;
  background: linear-gradient(
    222deg,
    ${(s) => s.theme.secondaryColor} 23%,
    ${(s) => s.theme.accentColor} 45%,
    ${(s) => s.theme.primaryColor} 95%
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
  const { id, setTheme } = useContext(ThemeContext);
  return (
    <HeaderWrapper>
      <Link to="/" data-text="Home">
        <span>Home</span>
      </Link>
      <Link to="/login" data-text="Login">
        <span>Login</span>
      </Link>
      <Toggle isActive={id === "dark"} onToggle={setTheme} />
    </HeaderWrapper>
  );
}

export default Header;
