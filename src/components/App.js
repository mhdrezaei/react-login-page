import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import Login from "./pages/Login";
import light from "themes/light";
import dark from "themes/dark";

const GlobalStyle = createGlobalStyle`
html{
  overflow-x: hidden;
}
body{
  background-color: ${(s) =>
    s.theme.id === "dark" ? s.theme.darkerColor : "#f9f9f9"};;
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
  const [theme, setTheme] = useState(light);
  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((prevState) => (prevState.id === "light" ? dark : light));
        },
      }}
    >
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
