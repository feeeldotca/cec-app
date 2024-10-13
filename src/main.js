import { createApp } from 'vue';
import App from './App.vue';
import pinia from './store/index1';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
  
  createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app');
  