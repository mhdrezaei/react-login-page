import React from "react";
import styled from "styled-components";
const InputText = styled.input`
  position: relative;
  width: 400px;
  max-width: 600px;
  font-size: 18px;
  padding: 0.5rem;
  margin: 2rem 0.5rem;
  border: 2px solid #0540eb;
  border-radius: 5px;
  outline: none;

  &:after {
    content: "";
    position: absolute;
    left: 300px;
    top: 30px;
    width: 100%;
    height: 200px;
    transform: translateY(100px);
    transition: transform 0.4s ease-in-out;
  }
  &:focus {
    border: 2px solid #02018a;
  }
`;
function Input(props) {
  return (
    <div>
      <InputText {...props} />
    </div>
  );
}

export default Input;
