<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Create Account</h2>
    <form @submit.prevent="handleSignUp">
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
      <div class="mb-3">
        <label for="confirmPassword" class="form-label">Confirm Password</label>
        <input
          type="password"
          v-model="confirmPassword"
          id="confirmPassword"
          class="form-control"
          required
        />
      </div>
      <button type="submit" class="btn btn-danger w-100">Sign Up</button>
    </form>
    <p class="text-center mt-3">
      Already have an account? <router-link to="/login">Login</router-link>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    handleSignUp() {
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      // Save the user's data (here we just simulate the process)
      localStorage.setItem('user', JSON.stringify({ email: this.email, password: this.password }));
      this.$router.push("/login"); // After sign-up, redirect to login page
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
