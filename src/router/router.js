import { createRouter, createWebHistory } from "vue-router";
import AboutPage from "@/pages/AboutPage";
import MainPage from "@/pages/MainPage";
import PostPage from "@/pages/PostPage";
import PostIdPage from "@/pages/PostIdPage";
import PostPageWithStore from "@/pages/PostPageWithStore";
import PostPageCompositionApi from "@/pages/PostPageCompositionApi";

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/posts",
    name: "PostsPage",
    component: PostPage,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
  },
  {
    path: "/posts/:id",
    name: "PostIdPage",
    component: PostIdPage,
  },
  {
    path: "/store",
    name: "PostPageWithStore",
    component: PostPageWithStore,
  },
  {
    path: "/composition",
    name: "PostPageCompositionApi",
    component: PostPageCompositionApi,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
