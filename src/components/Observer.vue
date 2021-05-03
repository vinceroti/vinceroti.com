<template>
  <div class="slot" ref="target" :class="{ show: show || noTransition }">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    noTransition: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    this.observer = new IntersectionObserver((e) => {
      let rect = this.$refs.target.getBoundingClientRect();
      let top = window.innerHeight - rect.top;
      if (e[0].isIntersecting) this.$emit("in-view");
      if (top >= 0) this.setShow();
    });
    this.observer.observe(this.$refs.target);
  },

  unMounted() {
    window.removeEventListener("scroll", this.observer);
    /* this.observer.unobserve(this.$refs.target) */
  },
  methods: {
    setShow() {
      this.show = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.slot {
  opacity: 0;
  transition: 0.7s opacity linear;
  &.show {
    opacity: 1;
  }
}
</style>
