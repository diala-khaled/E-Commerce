<template>

<div id="app">
 <Header></Header>
 <!-- <Home-view></Home-view> -->
 <router-view></router-view>
  <Footer></Footer>
 
</div>


</template>


<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import HomeView from './components/pages/user/HomeView.vue';
import ProductList from '@/components/ProductList.vue'

export default{
  name:'app',
  components:{
    Header,
    Footer,
    ProductList,
    HomeView
    
  }
}



// import { ref } from "vue";

// export default {
//   setup() {
//     const isNavbarOpen = ref(false);

//     const toggleNavbar = () => {
//       isNavbarOpen.value = !isNavbarOpen.value;
//     };

//     return { isNavbarOpen, toggleNavbar };
//   },
// };
</script>

<style>

</style>
