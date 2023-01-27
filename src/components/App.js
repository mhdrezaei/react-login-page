import React from "react";
import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";
import Login from "./pages/Login";

const GlobalStyle = createGlobalStyle`
html{
  overflow-x: hidden;
}
body{
  background-color: white;
  min-height: 100vh;
  font-family: 'Kaushan Script';
  margin: 0;
  color: black;
}
h1 , h2 , h3 , h4 , h5 , h6 {
  font-family: 'Kaushan Script';
}
p{
  margin: 0;
  padding: 0;
  margin-block-start: 0;
  margin-block-end: 0;
}
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
