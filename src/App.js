import React, { useState } from "react";
import GlobalStyle from "./GobalStyles";
import Header from "./Components/Header";
import Container from "./Components/Container";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { ThemeProvider } from "styled-components";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";


function App() {
  const [tema, setTema] = useState(true)

  function toggleTema() {
    setTema((tema) => !tema)
  }

  const setThemaStorage = (tema) => {
    localStorage.getItem("tema", tema)
  }

  return (
    <ThemeProvider theme={tema ? temaClaro : temaOscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema} />
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
