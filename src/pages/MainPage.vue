<template>
  <div>
    <h1>Добро Пожаловать</h1>
    <router-link class="link" to="/posts">Посты</router-link>
    <router-link class="link" to="/about">About</router-link>
  </div>
</template>

<script>
export default {
  name: "MainPage",
};
</script>

<style scoped>
.link {
  margin-left: 20px;
  font-size: 16px;
}
</style>
