import axios from "axios";

class ProductAPI {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async apiGet(limit, skip) {
    try {
      const response = await axios.get(
        `${this.baseURL}?limit=${limit}&skip=${skip}&select=title,price`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }

  async getProduct(id) {
    try {
      const response = await axios.get(`${this.baseURL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching product:", error);
      throw error;
    }
  }
}

export default ProductAPI;
