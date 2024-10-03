import { createApp } from 'vue';
import App from './App.vue';
import pinia from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createApp(App)
  .use(pinia)
  .mount('#app');
