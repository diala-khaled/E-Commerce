/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App
*/

// Components
import App from './App.vue'

// Plugins
import { registerPlugins } from '@/plugins'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import '@/assets/style.css'

// Vue & Pinia 
import { createApp } from "vue";
import { createPinia } from "pinia";

// Router
import router from './plugins/router';

// Notifications
import Notifications from '@kyvg/vue3-notification';

// إنشاء التطبيق
const app = createApp(App);

// إنشاء وإضافة Pinia مرة واحدة فقط
const pinia = createPinia();
app.use(pinia);

// تسجيل الـ Plugins
app.use(Notifications);
app.use(router);

// تأكد من أن registerPlugins لا يحتوي على تسجيل مكرر لـ Pinia أو Router
registerPlugins(app);

app.mount('#app');
