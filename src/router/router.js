import { createRouter, createWebHistory } from "vue-router";
import AboutPage from "@/pages/AboutPage";
import MainPage from "@/pages/MainPage";
import PostPage from "@/pages/PostPage";

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/posts",
    name: "PostPage",
    component: PostPage,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
