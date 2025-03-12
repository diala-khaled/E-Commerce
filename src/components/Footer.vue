<template>
  <footer class="footer text-center pt-5 ">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mb-4">
          <h5 class="text-danger fs-3">Elegant Home</h5>
          <hr>
          <p><i class="px-3 fs-4 bi bi-geo-alt"></i> Riyadh, Saudi Arabia</p>
          <p><i class="px-3 fs-4 bi bi-telephone"></i> <a href="tel:+966123456789">+966 123 456 789</a></p>
          <p><i class="px-3 fs-4 bi bi-envelope"></i> <a href="mailto:info@eleganthome.com">info@eleganthome.com</a></p>
        </div>

        <div class="col-md-6">
          <h5>Follow us on</h5>
          <div class="social-icons">
            <a href="#" class="text-white"><i class="bi bi-facebook"></i></a>
            <a href="#" class="text-white"><i class="bi bi-twitter"></i></a>
            <a href="#" class="text-white"><i class="bi bi-instagram"></i></a>
            <a href="#" class="text-white"><i class="bi bi-youtube"></i></a>
          </div>
        </div>
      </div>

      <hr class="bg-light">
      <p class="mb-0">© 2024 Elegant Home Furniture Store. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #111; 
  color: white;
  padding: 40px 0;
}

.footer a {
  color: white;
  text-decoration: none;
}

.footer a:hover {
  color: #dc3545; 
}

.social-icons a {
  font-size: 24px;
  margin: 0 10px;
  transition: color 0.3s ease-in-out;
}

.social-icons a:hover {
  color: #dc3545;
}
</style>
