import GlobalStyles from "../../Assets/styles/global";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../Assets/styles/themes/default";
import React from "react";
import Header from "../Header";
import Routes from "../../Routes";

import { Container } from "./styles";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
