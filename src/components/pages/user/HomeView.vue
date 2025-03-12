<template>
  <section id="heroCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
    
      <!-- First Slide -->
      <div class="carousel-item active" style="background-image: url('public/img/home activ.jpg');">
        <div class="hero-slide d-flex align-items-center">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-6 text-md-start text-center text-white">
                <h3 class="mt-3 mb-5 fs-2"><span class="text-danger fw-bold fs-1 mx-3"> Dream Furniture</span> Welcome to</h3>
                <p class="fs-3 py-3">Browse the latest high-quality furniture at the best prices and exclusive deals</p>
                <router-link class="btn btn-warning" to="/productList">
                  <i class="bi bi-house-door"></i> Explore Furniture
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Second Slide -->
      <div class="carousel-item" style="background-image: url('public/img/home4.jpg');">
        <div class="hero-slide d-flex align-items-center">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-6 text-md-start text-center text-white">
                <h1>Luxury Furniture at the Best Prices</h1>
                <p class="fs-4 py-3">A curated selection of premium furniture with top quality and exclusive deals</p>
                <router-link class="btn btn-warning" to="/productList">
                  <i class="bi bi-house-door"></i> Browse Furniture
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Third Slide -->
      <div class="carousel-item" style="background-image: url('public/img/home1.jpg');">
        <div class="hero-slide d-flex align-items-center">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-6 text-md-start text-center text-white">
                <h1>Dream Furniture at Your Fingertips</h1>
                <p class="fs-4 py-3">Start with style with our luxurious furniture collection available now.</p>
                <router-link class="btn btn-danger" to="/productList">
                  <i class="bi bi-house-door"></i> Discover Now
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Fourth Slide -->
      <div class="carousel-item" style="background-image: url('public/img/home2.jpg');">
        <div class="hero-slide d-flex align-items-center">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-6 text-md-start text-center text-white">
                <h1 class="fs-1">Furniture of Your Dreams</h1>
                <p class="fs-4 py-3">Start your journey with our luxury furniture collection available now.</p>
                <router-link class="btn btn-danger" to="/productList">
                  <i class="bi bi-house-door"></i> Explore Now
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Carousel Controls -->
    <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </section>
</template>
    
<script>
export default {
  name: "HomeView",
};
</script>
    
<style lang="scss" scoped>
.hero {
  position: relative;
  background: url("public/img/yallo.jpg") no-repeat center center/cover;
  height: 100vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.carousel-item {
  background: url("public/img/yallo.jpg") no-repeat center center/cover;
}

/* Gradient on the background for better readability */
.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 700px;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: bold;
}

.hero p {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.btn-custom {
  background: #ffcc00;
  color: black;
  font-size: 1.2rem;
  padding: 12px 30px;
  border-radius: 30px;
  transition: 0.3s;
}

.btn-custom:hover {
  background: #e68200f1;
  color: black;
}

.hero-slide {
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.3); /* Add transparency for background */
}

.hero-slide .container {
  position: relative;
  z-index: 2;
}

.hero-slide::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
