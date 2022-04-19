import { Container, Header, ListContainer } from "./styles";

import arrow from '../../Assets/images/icons/arrow.svg'

export default function ContactsLists() {
  return (
    <Container>
      <Header>
        <strong>3 Contatos</strong>
        <a href="/">Novo Contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="arrow" />
          </button>
        </header>
      </ListContainer>
    </Container>
  );
}
