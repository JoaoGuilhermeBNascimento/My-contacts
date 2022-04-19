import GlobalStyles from "../../Assets/styles/global";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../Assets/styles/themes/default";
import React from "react";
import Header from "../Header";
import ContactsLists from "../ContactsLists";

import { Container } from "./styles";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header />
        <ContactsLists />
      </Container>
    </ThemeProvider>
  );
}

export default App;
