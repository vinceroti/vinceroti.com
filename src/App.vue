<template>
  <Header />
  <main>
    <router-view />
  </main>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "app",
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/base/_index.scss";
</style>
