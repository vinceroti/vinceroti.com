<template>
  <section class="home">
    <div class="headshot-image">
      <img alt="Vince Roti Image" :src="image" />
    </div>
    <div class="copy">
      <h1>Hi,<br />I'm Vince, <br />Web Developer.</h1>
    </div>
  </section>
</template>

<script>
import image from "../assets/vince.jpg";
export default {
  name: "home",
  data() {
    return {
      image,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-wrap: wrap;
}
.headshot-image {
  max-width: rem(400);
}
.copy {
  margin: auto 0;
  padding: spacing(base);
}
</style>
