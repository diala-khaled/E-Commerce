<template>
  <div class="container mt-5">
    <div class="text-center pt-5">
      <h3 class="mt-3 mb-5">
        "A curated collection of high-quality luxury furniture s"
        <span class="text-danger">with exclusive offer</span>
      </h3>
    </div>

    <div class="mb-5 text-center">
      <div class="input-group">
        <input
          type="text"
          v-model="searchQuery"
          class="form-control p-4"
          placeholder="Search furniture"
        />
        <span class="input-group-text">
          <i class="bi bi-search"></i>
        </span>
      </div>
    </div>

    <div v-if="filteredProducts.length === 0" class="alert alert-warning text-center">
      لا توجد سيارات متاحة حاليًا.
    </div>

    <div class="row">
      <div class="col-md-4 mb-4" v-for="product in paginatedProducts" :key="product.id">
        <div class="card shadow-lg border-0 mx-3 p-3">
          <img :src="product.thumbnail" class="card-img-top car-image" alt="Car Image" />
          <div class="card-body">
            <h5 class="card-title fs-2 text-dark">{{ product.title }}</h5>
            <p class="card-text text-muted">{{ product.description }}...</p>
            <div class="d-flex mb-2">
              <i class="bi bi-star text-danger mx-2"></i>
              <i class="bi bi-star text-danger mx-2"></i>
              <i class="bi bi-star text-danger mx-2"></i>
              <i class="bi bi-star text-danger mx-2"></i>
              <i class="bi bi-star text-danger mx-2"></i>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <span class="fw-bold fs-3 text-success">${{ product.price }}</span>
              <span class="badge bg-danger">{{ product.brand }}</span>
            </div>
          </div>
          <div class="card-footer bg-white border-0 d-flex justify-content-between">
            <button class="btn btn-outline-danger w-50 me-2" @click="goToDetails(product.id)">
              details
            </button>
            <button class="btn btn-danger me-2" @click="addToCart">
              <i class="bi bi-cart-fill fs-4"></i> add cart
            </button>        
          </div>
        </div>
      </div>
    </div>

    <v-pagination
      v-model="currentPage"
      :length="totalPages"
      circle
      :total-visible="5"
      class="my-4"
    ></v-pagination>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useProductStore } from "../stores/productStore";
import { useRouter } from "vue-router";

const productStore = useProductStore();
const router = useRouter();

const searchQuery = ref("");
const productsPerPage = 6;
const currentPage = ref(1);

const filteredProducts = computed(() => {
  return productStore.products.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });
});

const paginatedProducts = computed(() => {
  const startIndex = (currentPage.value - 1) * productsPerPage;
  return filteredProducts.value.slice(startIndex, startIndex + productsPerPage);
});

const totalPages = computed(() => {
  return Math.ceil(filteredProducts.value.length / productsPerPage);
});

const goToDetails = (id) => {
  router.push(`/products/${id}`);
};

onMounted(() => {
  productStore.fetchProducts();
});
</script>
