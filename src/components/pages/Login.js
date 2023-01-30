import Button from "components/common/Button";
import Input from "components/common/Input";
import PageLayout from "components/common/PageLayout";
import SocialLogin from "components/common/SocialLogin";
import Spinner from "components/common/Spinner";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  padding: 1.5rem;
  background-color: #f9f9f9;
  color: #333;
  border-radius: 0 0 5px 5px;
  box-shadow: 1px 1px 8px 5px #999;
  border-bottom: 5px solid ${(s) => s.theme.primaryColor};
  margin-bottom: 5rem;
`;

export const Heading = styled.h1`
  position: relative;
  background: linear-gradient(
    222deg,
    ${(s) => s.theme.secondaryColor} 23%,
    ${(s) => s.theme.accentColor} 65%,
    ${(s) => s.theme.primaryColor} 100%
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
  const [formFields, setFormFields] = useState({ username: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  let timeout;
  const inputHandler = (e) => {
    console.log(formFields);
    e.persist();
    setFormFields((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
    console.log(formFields);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };
  useEffect(() => {
    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <PageLayout>
      <Heading>Login</Heading>
      <Content>
        <form onSubmit={submitHandler}>
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <Input
                type="text"
                name="username"
                placeholder="Username"
                onChange={inputHandler}
                value={formFields.username}
              />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={formFields.password}
                onChange={inputHandler}
              />
            </>
          )}
          <Button type="submit" label={isLoading ? "Loading..." : "Login"} />
        </form>
        <SocialLogin />
      </Content>
    </PageLayout>
  );
}

export default Login;
