import React from "react";
import styled, { keyframes } from "styled-components";
import loadr from "assets/images/loader.png";
const rotation = keyframes`
from{
    transform: rotate(0deg);
}
to{
    transform: rotate(360deg);
}
`;

const Loading = styled.img`
  display: block;
  width: 40px;
  height: 40px;
  margin: 100px auto;
  animation: ${rotation} 0.3s linear infinite;
`;
function Spinner() {
  return (
    <>
      <Loading src={loadr} alt="spinner" />
    </>
  );
}

export default Spinner;
