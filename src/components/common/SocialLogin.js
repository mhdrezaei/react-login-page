import React from "react";
import styled from "styled-components";
import SocialBtn from "./SocialBtn";
import google from "assets/images/google-icon.png";
import githube from "assets/images/github-icon.png";

const Container = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
function SocialLogin() {
  return (
    <Container>
      <SocialBtn
        link="https://google.com"
        src={google}
        alt="Google icon"
        caption="Login with Google"
      />
      <SocialBtn
        link="https://githube.com"
        src={githube}
        alt="Githube icon"
        caption="Login with Githube"
      />
    </Container>
  );
}

export default SocialLogin;
