import HttpClient from "./Utils/HttpClient";

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient("http://localhost:3001");
  }

  async listContacts(orderBy = "asc") {
    return this.httpClient.get(`/contactss?orderBy=${orderBy}`);
  }
  async createContact(contact) {
    return this.httpClient.post("/contacts", contact);
  }
}
//singleton pattern
export default new ContactsService();
