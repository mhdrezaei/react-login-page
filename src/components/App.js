import React from "react";
import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";
import Login from "./pages/Login";

const globalStyle = createGlobalStyle`
body{
  background-color: white;
  min-height: 100vh;
  font-family: 'Kaushan Script';
  margin: 0;
  color: black;
}
`;
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
