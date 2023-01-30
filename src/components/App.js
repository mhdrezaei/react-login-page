import React from "react";
import { Route, Routes } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
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
const theme = {
  primaryColor: "#00077c",
  secondaryColor: "#00a8ff",
  accentColor: "#030fe0",
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
