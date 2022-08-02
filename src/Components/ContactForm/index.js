import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import isEmailValid from "../../utils/isEmailValid";
import useErrors from "../../hooks/useErrors";
import formatPhone from "../../utils/formatPhone";
import CategoriesService from "../../services/CategoriesService";

import { Form, ButtonContainer } from "./style";
import FormGroup from "../FormGroup";

import Input from "../Input";
import Select from "../Select";
import Button from "../Button";

export default function ContactForm({ buttonLabel, onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);

  const { errors, setError, removeError, getErroMessageByFieldName } =
    useErrors();

  const isFormValid = name && errors.length === 0;

  useEffect(() => {
    async function loadCategroies() {
      try {
        const categoriesList = await CategoriesService.listCategories();

        setCategories(categoriesList);
      } catch {
        //
      } finally {
        setIsLoadingCategories(false);
      }
    }
    loadCategroies();
  }, []);

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: "name", message: "Nome é obrigatório" });
    } else {
      removeError("name");
    }
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: "email", message: "E-mail inválido" });
    } else {
      removeError("email");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit({
      name,
      email,
      phone,
      categoryId,
    });
  }

  function handlePhoneChange(event) {
    setPhone(formatPhone(event.target.value));
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErroMessageByFieldName("name")}>
        <Input
          error={getErroMessageByFieldName("name")}
          placeholder="Nome *"
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>

      <FormGroup error={getErroMessageByFieldName("email")}>
        <Input
          type="email"
          error={getErroMessageByFieldName("email")}
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
        />
      </FormGroup>
      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={handlePhoneChange}
          maxLength="15"
        />
      </FormGroup>

      <FormGroup isLoading={isLoadingCategories}>
        <Select
          value={categoryId}
          onChange={(event) => setCategoryId(event.target.value)}
          disabled={isLoadingCategories}
        >
          <option value="">Sem categoria</option>

          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="Submit" disabled={!isFormValid}>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
