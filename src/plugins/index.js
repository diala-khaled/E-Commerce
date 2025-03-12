/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import router from './router'
import vuetify from './vuetify'

import { createPinia } from 'pinia'

const pinia = createPinia()

export function registerPlugins (app) {
  app.use(vuetify).use(router).use(pinia)
}

// import HomeView from '../components/pages/HomeView.vue'

// const routes = [

//   {
//     Path : "/home",
//     name :"home",
//    components : HomeView,
//   }]