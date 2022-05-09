import { Api } from "@/api";
import { onMounted, ref } from "vue";

export function usePosts(limit) {
  const posts = ref([]);
  const totalPage = ref(0);
  const isPostLoading = ref(true);
  const fetching = async () => {
    try {
      const response = await Api.fetchPosts(1, limit);
      totalPage.value = Math.ceil(response.headers["x-total-count"] / limit);
      posts.value = response.data;
    } catch (err) {
      console.warn(err);
    } finally {
      isPostLoading.value = false;
    }
  };

  onMounted(fetching);

  return {
    posts,
    totalPage,
    isPostLoading,
  };
}
