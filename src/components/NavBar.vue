<template>
  <header>
    <a @click="click" href="#home">Home</a>
    <a @click="click" href="#about">About</a>
    <a @click="click" href="#resume">Resume</a>
  </header>
</template>
<script>
export default {
  methods: {
    click(e) {
      e.preventDefault();
      const elm = document.querySelector(e.target.hash);
      if (elm)
        window.scroll({
          top: elm.offsetTop,
          left: 0,
          behavior: "smooth",
        });
    },
  },
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
