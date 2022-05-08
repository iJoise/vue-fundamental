import { createRouter, createWebHistory } from "vue-router";
import AboutPage from "@/pages/AboutPage";
import PostPage from "@/pages/PostPage";
import MainPage from "@/pages/MainPage";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/posts",
    component: PostPage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
