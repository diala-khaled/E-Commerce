import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref(JSON.parse(localStorage.getItem('cartItems')) || []);

  // دالة لإضافة منتج للسلة
  const addToCart = (product) => {
    const existingProductIndex = cartItems.value.findIndex(item => item.id === product.id);
    if (existingProductIndex === -1) {
      cartItems.value.push(product);
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems.value));
  };

  // دالة لحذف منتج من السلة
  const removeFromCart = (productId) => {
    cartItems.value = cartItems.value.filter(item => item.id !== productId);
    localStorage.setItem('cartItems', JSON.stringify(cartItems.value));
  };

  const clearCart = () => {
    cartItems.value = [];
    localStorage.removeItem('cartItems');
  };

  return { cartItems, addToCart, removeFromCart, clearCart };
});
