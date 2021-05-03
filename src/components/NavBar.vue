<template>
  <header>
    <a
      @click="click"
      :class="{ active: inView === 'home' }"
      href="#home"
      title="Home Section"
      >Home</a
    >
    <a
      @click="click"
      :class="{ active: inView === 'about' }"
      href="#about"
      title="About Section"
      >About</a
    >
    <a
      @click="click"
      :class="{ active: inView === 'resume' }"
      href="#resume"
      title="Resume Section"
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
  z-index: z-index(fixed);
  position: fixed;
  top: 0;
  background: color(white);
  padding: spacing(element) 0;
  @include respond-to(medium) {
    position: sticky;
    flex-direction: column;
    width: rem(100);
    height: 100%;
    top: 50%;
    padding: 0;
    background: transparent;
  }
}
a {
  margin: 0 auto;
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
  &:hover,
  &.active {
    color: color(black);
    &:after {
      max-width: 100%;
    }
  }
}
svg {
  width: rem(20);
  height: rem(20);
}
.resume-container {
  position: relative;
}
</style>
