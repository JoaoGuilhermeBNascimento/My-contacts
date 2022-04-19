import { Container, InputSearchContainer } from "./styles";
import React from "react";
import logo from "../../Assets/images/logo.svg";

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="MyContacts" width="201"/>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar Contato"/>
      </InputSearchContainer>
    </Container>
  );
}
