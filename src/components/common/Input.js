import React, { useState } from "react";
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
  z-index: 3;

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

const InputGroup = styled.div`
  position: relative;

  & span {
    font-size: 18px;
    position: absolute;
    top: 0;
    left: 0;
    padding-left: 1rem;
    z-index: 2;
    animation: moveTop 0.4s linear 1;
    transition: all 0.4;
    /* animation-delay: 1s; */
  }
  @keyframes moveTop {
    from {
      top: 40%;
    }
    to {
      top: 0;
    }
  }
`;
function Input(props) {
  const [change, setChange] = useState(false);

  const handleInput = (e) => {
    const value = e.target.value;
    if (value && value.trim().length > 0) {
      setChange(true);
    } else {
      setChange(false);
    }
  };

  
  return (
    <InputGroup>
      <InputText {...props} onKeyUp={handleInput} />
      {change ? <span>{props.placeholder}</span> : ""}
    </InputGroup>
  );
}

export default Input;
