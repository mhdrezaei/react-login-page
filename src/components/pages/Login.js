import PageLayout from "components/common/PageLayout";
import React from "react";
import styled from "styled-components";

const Content = styled.div`
  padding: 1.5rem;
  background-color: #f9f9f9;
  color: #333;
  border-radius: 0 0 5px 5px;
  box-shadow: 1px 1px 8px 5px #999;
  border-bottom: 5px solid #02018a;
  margin-bottom: 5rem;
`;

export const Heading = styled.h1`
  position: relative;
  background: linear-gradient(
    222deg,
    rgba(5, 64, 235, 1) 23%,
    rgba(73, 14, 224, 1) 65%,
    rgba(2, 1, 138, 1) 100%
  );
  padding: 1rem;
  margin-bottom: 0;
  color: white;
  border-radius: 5px 5px 0 0;
  box-shadow: 2px -2px 12px 5px #ececec;
  overflow: hidden;
  :hover:before {
    animation: glaslight 0.4s linear 1;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 1000px;
    background-color: #eaeaea63;
    transform: skewX(-45deg) translate(-350%, -50%);
    transform: all 0.1s;
  }

  @keyframes glaslight {
    from {
      transform: skewX(-45deg) translate(-350%, -50%);
    }
    to {
      transform: skewX(-45deg) translate(350%, 5%);
    }
  }
`;
function Login() {
  return (
    <PageLayout>
      <Heading>Login</Heading>
      <Content></Content>
    </PageLayout>
  );
}

export default Login;
