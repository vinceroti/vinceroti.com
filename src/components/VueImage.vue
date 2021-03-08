<template>
  <img :src="src" :alt="alt" ref="image" :class="{ show }" @load="onLoaded" />
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  props: {
    src: {
      type: String,
      require: true,
    },
    alt: {
      type: String,
      require: true,
    },
  },
  methods: {
    onLoaded() {
      this.show = true;
    },
  },
};
</script>

<style type="scss" scoped>
img {
  opacity: 0;
  transition: opacity 0.3s ease-in;
}
.show {
  opacity: 1;
}
</style>
