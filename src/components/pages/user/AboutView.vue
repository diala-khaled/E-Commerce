<template>
 <section class="about-section">
    <div class="container">
        <div class="row text-center">
            <div class="col-12">
                <h2 class="about-title"> ABOUT US </h2>
                <p class="about-content fs-2 text-dark">
                    At our car showroom, we offer you the best high-quality cars and excellent service. 
                    We have a wide range of new and used cars to meet all your needs. 
                    Join us today and enjoy the best deals!
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="about-item">
                    <h4>Our Vision</h4>
                    <p>We strive to be the number one destination for car enthusiasts in the region. We offer you a unique experience with our excellent cars and high-quality services.</p>
                </div>
                <div class="about-item">
                    <h4>Our Mission</h4>
                    <p>Our goal is to provide the best cars with the latest technology, ensuring a comfortable and transparent buying experience for every customer.</p>
                </div>
                <div class="about-item">
                    <h4>Our Services</h4>
                    <p>We provide after-sales services, long-term warranties, and maintenance services for optimal car performance.</p>
                </div>
                <div class="mt-4">
                    <a href="#" class="btn-custom">Contact Us</a>
                </div>
                <div class="about-icons mt-4">
                    <a href="tel:+123456789" class="text-decoration-none"><i class="fa fa-phone"></i></a>
                    <a href="mailto:info@carsales.com" class="text-decoration-none"><i class="fa fa-envelope"></i></a>
                    <a href="https://www.google.com/maps" class="text-decoration-none" target="_blank"><i class="fa fa-map-marker"></i></a>
                </div>
            </div>
            <div class="col-lg-6">
                <img src="/img/c3e2795159cbbcfa81363473e6769325.jpg" alt="Car Image" class="about-img">
            </div>
        </div>
    </div>
</section>
</template>

<script></script>

<style scoped>
    body {
        background-color: #f1f1f1;
        font-family: 'Arial', sans-serif;
    }
    .about-section {
        background-color: #cacaca79;
        color: white;
        padding: 80px 0;
        border-radius: 10px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
    .about-title {
        font-size: 36px;
        font-weight: 700;
        color: #dc3545;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-bottom: 20px;
    }
    .about-content {
        font-size: 18px;
        line-height: 1.6;
    }
    .about-img {
        width: 100%;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        opacity: 0.9;
    }
    .about-img:hover {
        opacity: 1; 
    }
    .icon-style {
        color: #dc3545;
        font-size: 24px;
    }
    .about-item {
        margin-bottom: 30px;
    }
    .about-item h4 {
        font-size: 24px;
        color: #d32828;
        margin-bottom: 15px;
    }
    .about-item p {
        font-size: 16px;
        color: #000000;
    }
    .btn-custom {
        background-color: #dc3545;
        color: white;
        padding: 12px 30px;
        border-radius: 30px;
        transition: 0.3s;
    }
    .btn-custom:hover {
        background-color: #c82333;
        text-decoration: none;
    }
    .about-icons i {
        font-size: 30px;
        color: #fff;
        margin: 0 10px;
        transition: transform 0.3s;
    }
    .about-icons i:hover {
        transform: scale(1.2);
    }
</style>
