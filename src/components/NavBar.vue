<template>
  <header>
    <button
      :class="{ 'hamburger-open': open }"
      class="hamburger-menu"
      @click="open = !open"
      aria-label="Main Menu"
      :aria-expanded="open"
    >
      <svg viewBox="0 0 100 100">
        <path
          class="line line1"
          d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
        />
        <path class="line line2" d="M 20,50 H 80" />
        <path
          class="line line3"
          d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
        />
      </svg>
    </button>
    <div :class="{ 'menu-open': open }" class="menu-container">
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
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      open: false,
    };
  },
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
  width: 100%;
  text-align: center;
  z-index: z-index(fixed);
  position: fixed;
  top: 0;
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
.resume-container {
  position: relative;
}
svg {
  width: 44px;
  height: 44px;
}
.menu-container {
  display: flex;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  width: 100%;
  opacity: 0;
  background: #f3f7f8;
  visibility: none;
  transition: opacity 0.2s ease-in-out;
  padding: spacing(element) 0;
  @include respond-to(medium) {
    background: none;
    flex-direction: column;
    opacity: 1;
    visibility: visible;
  }
}
.hamburger-menu {
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
  background: #f3f7f8;
  @include respond-to(medium) {
    display: none;
  }
}
.menu-open {
  opacity: 1;
  visibility: visible;
}
.line {
  fill: none;
  stroke: color(black);
  stroke-width: 6;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
.line1 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.line2 {
  stroke-dasharray: 60 60;
  stroke-width: 6;
}
.line3 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.hamburger-open {
  .line1 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }
  .line2 {
    stroke-dasharray: 1 60;
    stroke-dashoffset: -30;
    stroke-width: 6;
  }
  .line3 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }
}
</style>
