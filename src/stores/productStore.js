import { defineStore } from "pinia";
import axios from 'axios';

export const useProductStore = defineStore("productStore", {
  state: () => ({
    products: [],
  }),

  actions: {
    async fetchProducts() {
      try {
        const categories = ['furniture', 'home-decoration', 'lighting', 'kitchen-accessories', 'office-supplies'];
    
        const requests = categories.map(category => axios.get(`https://dummyjson.com/products/category/${category}`));
        const responses = await Promise.all(requests);
    
        this.products = responses.flatMap(response => response.data.products);
    
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
  },
});
