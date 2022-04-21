import { Link } from "react-router-dom";
import arrow from "../../Assets/images/icons/arrow.svg";

import PropTypes from "prop-types";
import { Container } from "./styles";

export default function PageHeader({ title }) {
  return (
    <Container>
      <Link to="/">
        <img src={arrow} alt="Back" />
        <span>Voltar</span>
      </Link>
      <h1>{title}</h1>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
