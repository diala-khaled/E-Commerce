<template>
  <div class="container my-5">
    <h2 class="text-center mb-4">Car Listings</h2>
    <div class="row">
      <div v-for="car in cars" :key="car.id" class="col-md-4 mb-4">
        <div class="card car-card shadow-sm">
          <img width="500" height="500" :src="car.image" class="card-img-top" :alt="car.name" />
          <div class="card-body text-center">
            <h5 class="card-title">{{ car.name }}</h5>
            <p class="card-text price text-primary fw-bold">
              ${{ car.price.toLocaleString() }}
            </p>
            <ul>
      <li class="list-group-item"><b>Fuel Type:</b> بنزين</li>
      <li class="list-group-item"><b>Transmission:</b> اوتوماتيك</li>
      <li class="list-group-item"><b>Kilometers:</b> 12,000 km</li>
            </ul>
            <div class="d-flex justify-content-between">
              <button class="btn btn-outline-primary" @click="viewDetails(car)">
                <i class="bi bi-eye"></i> Details
              </button>
              <button class="btn btn-success" @click="buyCar(car)">
                <i class="bi bi-cart-fill"></i> Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
name: "ListCarsView",
data() {
    return {
      cars: [
        {
          id: 1,
          name: "Lamborghini Huracan",
          price: 250000,
          image: "public/img/9.jpg",
        },
        {
          id: 2,
          name: "Ferrari F8",
          price: 280000,
          image: "public/img/7.jpg",
        },
        {
          id: 3,
          name: "Porsche 911",
          price: 150000,
          image: "public/img/6.jpg",
        },
      ],
    };
  },
  methods: {
    viewDetails(car) {
      alert(`Viewing details of ${car.name}`);
    },
    buyCar(car) {
      alert(`You bought a ${car.name} for $${car.price.toLocaleString()}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.car-card {
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
}
.car-card:hover {
  transform: scale(1.05);
}
.price {
  font-size: 1.2rem;
}
</style>