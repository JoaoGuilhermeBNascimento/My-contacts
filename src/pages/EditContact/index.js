import ContactForm from "../../Components/ContactForm";
import PageHeader from "../../Components/PageHeader";

export default function EditContact() {
  return (
    <>
      <PageHeader title="Editar João Guilherme" />

      <ContactForm buttonLabel="Salvar Alterações" />
    </>
  );
}
