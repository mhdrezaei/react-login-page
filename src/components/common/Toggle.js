import React, { useState } from "react";
import styled from "styled-components";
const ToggleBtn = styled.div`
  position: relative;
  width: 50px;
  height: 25px;
  border: 1px solid #fff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  background: linear-gradient(
    to bottom,
    ${(s) => s.theme.primaryColor},
    ${(s) => s.theme.secondaryColor}
  );
  margin-left: auto;
`;

const Notch = styled.div`
  width: 21px;
  height: 21px;
  background-color: #fff;
  border-radius: 50%;
  transition: all 0.1s;
  transform: translate(${(s) => (s.isActive ? "26px" : "1px")});
`;
function Toggle() {
  const [isActive, setIsActive] = useState(false);
  return (
    <ToggleBtn onClick={() => setIsActive(!isActive)}>
      <Notch isActive={isActive} />
    </ToggleBtn>
  );
}

export default Toggle;
