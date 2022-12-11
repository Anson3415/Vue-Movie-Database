import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Store from "../views/Store.vue";

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/store',
    component: Store
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;