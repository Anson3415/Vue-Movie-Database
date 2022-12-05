import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Hero from "../views/Hero.vue";

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/hero',
    component: Hero
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;