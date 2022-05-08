<template>
  <div class="navbar">
    <h3 @click="$router.push('/')" class="title">Vue 3</h3>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Посты</my-button>
      <my-button @click="$router.push('/about')">About</my-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns {
  margin-left: auto;
}

.navbar__btns > button {
  margin-left: 20px;
}

.title {
  cursor: pointer;
  font-size: 36px;
  color: #337ab7;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.2);
  font-family: "Russo One", sans-serif;
  font-weight: 300;
  text-decoration: none;
  margin: 20px 0 20px 26px;
  line-height: 16px;
}
</style>
