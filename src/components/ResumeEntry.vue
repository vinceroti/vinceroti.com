<template>
  <div class="text">
    <span class="date">{{ date }}</span>
    <h4>{{ title }}</h4>
    <span class="position">{{ position }}</span>
    <p>
      {{ text }}
    </p>
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
}
.position {
  display: block;
  margin-bottom: spacing(element);
}
.text {
  background: color(extra-light-gray);
  margin: spacing(base) 0;
  padding: spacing(base);
  border-radius: rem(5);
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background: color(white);
  }
}
</style>
