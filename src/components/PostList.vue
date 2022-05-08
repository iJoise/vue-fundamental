<template>
  <div v-if="posts.length > 0">
    <h3>Список постов</h3>
    <transition-group name="list">
      <post-item
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @remove="$emit('remove', post)"
      />
    </transition-group>
  </div>
  <h2 v-else style="color: orangered">Список постов пуст</h2>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  name: "PostList",
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.list-move {
  transition: transform 0.8s ease;
}
</style>
