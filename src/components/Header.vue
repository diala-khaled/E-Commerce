<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
      <div class="container-fluid d-flex justify-content-between align-items-center">
        
        <router-link class="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/img/icon5.jpg"
            alt="Logo"
            width="100"
            height="100"
            class="me-3 rounded-circle mx-2 my-2 "
          />
          <span class="fw-bold fs-1">Elegant Home</span>
        </router-link>

        <button class="navbar-toggler" type="button" @click="toggleNavbar">
          <i class="fa fa-bars"></i>
        </button>

        <div class="collapse navbar-collapse justify-content-center" :class="{ show: isNavbarOpen }">
          <ul class="navbar-nav gap-4">
            <li class="nav-item">
              <router-link class="nav-link" to="/home">
                <i class="bi bi-house-door"></i> Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">
                <i class="bi bi-info-circle"></i> About
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/productList">
                Product
              </router-link>
            </li>
          </ul>
        </div>

        <div class="d-flex gap-5 fs-4">
          <router-link class="nav-link text-light " to="/login">
            <i class="bi bi-person-circle me-2 text-light"></i> Login
          </router-link>
          <router-link class="nav-link text-light" to="/singup">
            <i class="bi bi-person-plus me-2 text-light"></i> Signup
          </router-link>
          
          <router-link class="nav-link text-light" to="/cart">
            <i class="bi bi-cart-fill me-2 text-light"></i> Cart
            <span v-if="cartStore.cartItems.length > 0" class="badge bg-danger">
              {{ cartStore.cartItems.length }}
            </span>
          </router-link>
        </div>

      </div>
    </nav>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cartStore';  

export default {
  name: "Header",
  setup() {
    const cartStore = useCartStore(); 
    return { cartStore };
  },
};
</script>

<style lang="scss" scoped>
.navbar-dark .navbar-nav .nav-link {
  transition: 0.3s ease-in-out;
  font-size: 1.5rem;
  font-weight: bold;
  color: white !important;
  transition: color 0.3s;
}
nav {
  padding: 0rem 3rem; 
}

.navbar-dark .navbar-nav .nav-link:hover {
  color: #c22d2d !important; 
}
</style>
