<template>
    <div class="container mt-5">
      <h1 class="text-center text-dark">Product Cart </h1>
      <div class="row">
        <div class="col-md-4" v-for="product in cartStore.cartItems" :key="product.id">
          <div class="card bg-dark text-white shadow-lg mb-4">
            <img :src="product.image" class="card-img-top" alt="Product Image" />
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">{{ product.description }}</p>
              <h6 class="card-price">${{ product.price }}</h6>
              <button class="btn btn-danger " @click="removeFromCart(product.id)">
               DELETE IN CART
              </button>
            </div>
          </div>
        </div>
      </div>
  
      <!-- إذا كانت السلة فارغة -->
      <div v-if="cartStore.cartItems.length === 0" class="text-center text-danger">
        <p>  The Cart is Empty</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useCartStore } from '@/stores/cartStore';  // استيراد الـ store للسلة
  
  const cartStore = useCartStore();  // استخدام الـ store للسلة
  
  // دالة لحذف منتج من السلة
  const removeFromCart = (productId) => {
    cartStore.removeFromCart(productId);
  };
  </script>
  
  <style scoped>
  .card {
    border-radius: 10px;
  }
  .card-img-top {
    max-height: 200px;
    object-fit: cover;
  }
  </style>
  