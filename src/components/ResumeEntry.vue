<template>
  <div class="text resume-entry">
    <span class="date">{{ date }}</span>
    <h4>{{ title }}</h4>
    <span class="position">{{ position }}</span>
    <slot>
      {{ text }}
    </slot>
  </div>
</template>

<script>
export default {
  name: "resume-entry",
  props: {
    date: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    position: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss" scoped>
.date {
  font-weight: font-weight(sans-serif-bold);
  margin-bottom: spacing(element);
  display: block;
}
.position {
  display: block;
  margin-bottom: spacing(element);
}
.text {
  background: color(white);
  margin: spacing(base) 0;
  padding: spacing(base);
  transition: background-color 0.2s ease-in-out;
  border: 1px solid color(light-gray);
}
</style>
