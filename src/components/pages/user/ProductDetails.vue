<template>
  <div class="container mt-5 my-5">
    <div class="card bg-dark text-white shadow-lg p-4">
      <div class="row g-4">
        <!-- ✅ السلايدر لعرض صور المنتج -->
        <div class="col-md-6">
          <div id="productCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div
                v-for="(image, index) in product.images"
                :key="index"
                :class="['carousel-item', { active: index === 0 }]"
              >
                <img :src="image" class="d-block w-100 rounded" alt="Product Image" />
              </div>
            </div>
            <!-- أزرار التنقل -->
            <button class="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>

        <!-- ✅ تفاصيل المنتج -->
        <div class="col-md-6">
          <h2 class="text-danger">{{ product.title }}</h2>
          <p class="text-light">{{ product.description }}</p>
          <h4 class="text-warning fw-bold">${{ product.price }}</h4>
          <span class="badge bg-danger fs-6 p-2">{{ product.brand }}</span>

          <!-- أزرار الشراء وإضافة للسلة -->
          <div class="mt-4">
            <button class="btn btn-danger me-2" @click="addToCart(product)">
              <i class="bi bi-cart-fill fs-4"></i> Add to Cart
            </button>
            <button class="btn btn-outline-light" @click="$router.back()">
              <i class="bi bi-arrow-right text-danger"></i> Back
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCartStore } from '@/stores/cartStore';  // استيراد الـ store للسلة
import axios from 'axios';

const route = useRoute();
const router = useRouter();
const product = ref({
  title: '',
  description: '',
  price: 0,
  brand: '',
  images: [],
});

const cartStore = useCartStore();  // إنشاء نسخة من الـ store للسلة

// جلب بيانات المنتج عند تحميل الصفحة
onMounted(async () => {
  const res = await axios.get(`https://dummyjson.com/products/${route.params.id}`);
  product.value = res.data;
});

// دالة لإضافة المنتج إلى السلة
const addToCart = (product) => {
  cartStore.addToCart(product);
  alert(`تمت إضافة ${product.title} إلى السلة! 🛒`);
  router.push('/cart');  // بعد إضافة المنتج للسلة، التوجيه إلى صفحة السلة
};
</script>

<style scoped>
.card {
  border-radius: 15px;
}
.carousel img {
  max-height: 400px;
  object-fit: cover;
}
</style>
