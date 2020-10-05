<template>
  <header>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </header>
</template>

<script>
export default {
  name: "header",
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  padding: spacing(base);
  height: 100%;
}
</style>
