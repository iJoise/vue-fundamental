<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input v-model="searchQuery" placeholder="Поиск..." />
    <div class="app__btns">
      <my-button @click="showDialog"> Создать пользователя </my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <!--    <div class="page__wrapper">-->
    <!--      <div-->
    <!--        v-for="pageNumber in totalPage"-->
    <!--        :key="pageNumber"-->
    <!--        class="page"-->
    <!--        @click="changePage(pageNumber)"-->
    <!--        :class="{-->
    <!--          'current-page': page === pageNumber,-->
    <!--        }"-->
    <!--      >-->
    <!--        {{ pageNumber }}-->
    <!--      </div>-->
    <!--    </div>-->
    <post-list
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostLoading"
    />
    <h2 v-else>Loading...</h2>
    <div ref="observer" class="observer" />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import { Api } from "@/api";
import MyInput from "@/components/UI/MyInput";

export default {
  components: {
    MyInput,
    PostForm,
    PostList,
  },

  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
      selectedSort: "",
      searchQuery: "",
      page: 1,
      limit: 10,
      totalPage: 0,
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По содержимому" },
      ],
    };
  },

  methods: {
    createPost(post) {
      this.posts.unshift(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    // changePage(pageNumber) {
    //   this.page = pageNumber;
    // },
    async fetchPosts() {
      try {
        this.isPostLoading = true;
        const response = await Api.fetchPosts(this.page, this.limit);
        this.totalPage = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = response.data;
      } catch (err) {
        console.warn(err);
      } finally {
        this.isPostLoading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await Api.fetchPosts(this.page, this.limit);
        this.totalPage = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = [...this.posts, ...response.data];
      } catch (err) {
        console.warn(err);
      }
    },
  },
  mounted() {
    this.fetchPosts();
    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    const callback = (entries) => {
      if (entries[0].isIntersecting && this.page < this.totalPage) {
        this.loadMorePosts();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(
          post2[this.selectedSort]
        );
      });
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLocaleLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  watch: {
    // page() {
    //   this.fetchPosts();
    // },
  },
};
</script>

<style scoped>
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
.page {
  border: 1px solid black;
  padding: 10px;
  margin-left: 5px;
}
.page__wrapper {
  display: flex;
  margin-bottom: 15px;
}

.current-page {
  border: 2px solid teal;
}

.observer {
  height: 30px;
  background: darkmagenta;
}
</style>
