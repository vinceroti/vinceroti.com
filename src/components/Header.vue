<template>
  <header>
    <a to="/">Home</a>
    <a to="/about">About</a>
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
  position: sticky;
  top: 50%;
  height: 100%;
  width: rem(100);
  text-align: center;
}
a {
  width: 100%;
}
</style>
