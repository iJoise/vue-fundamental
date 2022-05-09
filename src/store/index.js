import { createStore } from "vuex";
import { postModule } from "@/store/postModule";

export default createStore({
  state: {
    isAuth: true,
  },
  modules: {
    post: postModule,
  },
});
