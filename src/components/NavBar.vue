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
  width: 100%;
  text-align: center;
  position: sticky;
  z-index: z-index(fixed);
  background: color(white);
  top: 0;
  padding: spacing(element) 0;
  @include respond-to(medium) {
    flex-direction: column;
    width: rem(100);
    height: 100%;
    top: 50%;
    padding: 0;
  }
}
a {
  margin: 0 auto;
  font-weight: font-weight(open-sans-bold);
  transition: color 0.3s ease-in-out;
  position: relative;
  &:after {
    content: " ";
    width: 100%;
    border-bottom: 1px solid color(black);
    max-width: 0;
    transition: max-width 0.3s ease-in-out;
    bottom: 0;
    position: absolute;
    display: block;
  }
}
.active {
  color: color(black);
  &:after {
    max-width: 100%;
  }
}
</style>
