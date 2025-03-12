<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          v-model="email"
          id="email"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          v-model="password"
          id="password"
          class="form-control"
          required
        />
      </div>
      <button type="submit" class="btn btn-danger w-100">Login</button>
    </form>
    <p class="text-center mt-3">
      Don't have an account? <router-link to="/signup">Sign Up</router-link>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user && user.email === this.email && user.password === this.password) {
        // Successful login, store the logged-in user data in localStorage or Vuex
        localStorage.setItem("isLoggedIn", true);
        this.$router.push("/ProductList"); // Redirect to home or desired page
      } else {
        alert("Invalid login credentials");
      }
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
