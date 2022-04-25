import {
  Container,
  InputSearchContainer,
  Header,
  ListContainer,
  Card,
} from "./styles";
// import Modal from "../../Components/Modal";

import arrow from "../../Assets/images/icons/arrow.svg";
import edit from "../../Assets/images/icons/edit.svg";
import trash from "../../Assets/images/icons/trash.svg";

import { Link } from "react-router-dom";
// import Loader from "../../Components/Loader";

export default function Home() {
  return (
    <Container>
      {/* <Modal danger /> */}
      {/* <Loader/> */}
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar Contato" />
      </InputSearchContainer>
      <Header>
        <strong>3 Contatos</strong>
        <Link to="/new">Novo Contato</Link>
      </Header>
      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="arrow" />
          </button>
        </header>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>João Guilherme</strong>
              <small>instagram</small>
            </div>
            <span>joaoguilhermebn@hotmail.com</span>
            <span>(61) 99970-4636</span>
          </div>

          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}

fetch("http://localhost:3000/")
  .then((response) => {
    console.log("response", response);
  })
  .catch((error) => {
    console.log("error", error);
  });
