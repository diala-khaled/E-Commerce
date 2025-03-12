import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import { components } from 'vuetify/dist/vuetify-labs.js'

import HomeView from '../components/pages/user/HomeView.vue'
import LoginView from '../components/pages/user/LoginView.vue'
import SingupView from '@/components/pages/user/SingupView.vue'
// import ListCarsView from '@/components/pages/user/ListCarsView.vue'
import AboutView from '@/components/pages/user/AboutView.vue'
import ProductList from '@/components/ProductList.vue'
import ProductDetails from '@/components/pages/user/ProductDetails.vue';
import CartPage from '@/components/pages/CartPage.vue';

const routes = [
  { path: '/', component: ProductList },
  { path: '/products/:id', component: ProductDetails, props: true },

  {
    path : "/home",
    name :"home",
   component : HomeView,
  },
  {
    path : "/login",
    name :"login",
   component :LoginView,
  },
  {
    path : "/singup",
    name :"singup",
   component : SingupView,
  },
  {
    path : "/about",
    name :"about",
   component : AboutView,
  },
  { path: '/cart', component: CartPage }, 
  {
    path : "/productList",
    name : "productList",
    component : ProductList
  }

]

  // user routes (global routes)
  // {
  //   path: '/', component: UserLayout, children: [
  //     { path: '/', component: HomeView }, // https://localhost:3000/
  //     { path: '/about', component: AboutView },
  //     { path: '/signup', component: SignupView },
  //     { path: '/login', component: LoginView },
  //     { path: '/profile', component: ProfileView },

  //     { path: '/articles', component: ArticlesListView },
  //     { path: '/articles/:id', component: ArticlesDetailsView },
  //   ]
  // },
  // // admin routes
  // // { path: '/admin/login', component: ArticlesListView },
  // {
  //   path: '/admin', name: 'admin', component: AdminLayout,children:
  //     [
  //       { path: 'articles', name: 'admin-articles', component: ArticlesAdminListView },
  //       { path: 'articles/create', component: ArticlesAdminListView },
  //       { path: 'articles/:id', component: ArticlesAdminListView }, // $route.params.id = 3
  //       { path: 'users', name: 'admin-users', component: ArticlesAdminListView },

  //     ]
  // }

// ]

// localStorage.setItem('user-id', '1')
// localStorage.getItem('user-id')

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from) => {
  // ...
  // explicitly return false to cancel the navigation
  console.log(from)
  console.log(to)



  return true
})


export default router
