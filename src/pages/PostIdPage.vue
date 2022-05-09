<template>
  <div>
    <h1>Страница поста c ID = {{ $route.params.id }}</h1>
    <my-button @click="$router.back()">Назад</my-button>
  </div>
</template>

<script>
export default {
  name: "PostIdPage",
};
</script>

<style scoped></style>
