import ContactForm from "../../Components/ContactForm";
import PageHeader from "../../Components/PageHeader";

import ContactsSerevice from "../../services/ContactsService";

export default function NewContact() {
  async function handleSubmit(formData) {
    try {
      const contact = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      category_id: formData.categoryId,
    };
    const response = await ContactsSerevice.createContact(contact);

    console.log(response);
  } catch {
    alert('Ocorreu um erro ao cadastrar o contato!')
  }
    }
  return (
    <>
      <PageHeader title="Novo Contato" />

      <ContactForm buttonLabel="Cadastrar" onSubmit={handleSubmit} />
    </>
  );
}
