import Header from "components/Header";
import React from "react";
import styled from "styled-components";

const Content = styled.main`
  max-width: 1000px;
  margin: 50px auto 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
  font-family: "Open Sans";

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Kaushan Script";
  }
`;
function PageLayout({ children }) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
}

export default PageLayout;
