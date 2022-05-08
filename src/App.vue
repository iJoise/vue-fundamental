<template>
  <navbar />
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/UI/Navbar";
export default {
  name: "App",
  components: { Navbar },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
