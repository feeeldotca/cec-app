import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import VoltageDropPage from '../pages/VoltageDropPage.vue';
import LoadCalPage from '../pages/LoadCalPage.vue';
import ConduitFitting from '../pages/ConduitFitting.vue';
import ConduitFillCalculator from '@/components/ConduitFillCalculator.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/conduitfit', component: ConduitFitting},
  { path: '/voltage-drop', component: VoltageDropPage },
  { path: '/load-calculator', component: LoadCalPage },
  { path: '/conduitfill', component: ConduitFillCalculator}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
