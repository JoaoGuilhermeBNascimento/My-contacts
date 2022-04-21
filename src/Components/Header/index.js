import { Container } from "./styles";
import React from "react";
import logo from "../../Assets/images/logo.svg";

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="MyContacts" width="201"/>
      
    </Container>
  );
}
