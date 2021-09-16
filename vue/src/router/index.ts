import { useToast } from "primevue/usetoast";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/auth/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/auth/Register.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
  },
];

const router = createRouter({
  // history: createWebHistory(import.meta.VITE_APP_BASE_URL),
  history: createWebHistory("/"),
  routes,
});

router.beforeEach((to, _from, next) => {
  const publicRouteNames = ["Home", "Login", "Register"];

  if (!publicRouteNames.includes(String(to.name))) {
    if (localStorage.getItem("token")) {
      next();
    } else {
      next("/");
    }
  } else next();
});

export default router;
