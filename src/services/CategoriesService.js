import HttpClient from "./Utils/HttpClient";

class CategoriesService {
  constructor() {
    this.httpClient = new HttpClient("http://localhost:3001");
  }

  async listCategories() {
    return this.httpClient.get('/categories');
  }

}
//singleton pattern
export default new CategoriesService();
