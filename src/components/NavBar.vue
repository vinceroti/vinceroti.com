<template>
  <header>
    <a @click="click" :class="{ active: inView === 'home' }" href="#home"
      >Home</a
    >
    <a @click="click" :class="{ active: inView === 'about' }" href="#about"
      >About</a
    >
    <a @click="click" :class="{ active: inView === 'resume' }" href="#resume"
      >Resume</a
    >
  </header>
</template>
<script>
export default {
  props: {
    inView: {
      type: String,
      default: "",
    },
  },
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
  font-weight: font-weight(open-sans-bold);
  transition: color 0.3s ease-in-out;
}
.active {
  color: color(black);
}
</style>
