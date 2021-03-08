<template>
  <section class="home">
    <div class="headshot-image">
      <img alt="Vince Roti Image" :src="image" />
    </div>
    <div class="copy">
      <h1>Hi,<br />I'm Vince, <br />Web Developer.</h1>
      <a
        href="https://github.com/vinceroti/"
        title="Vince Roti's Github Profile"
      >
        <github />
      </a>
      <a
        href="https://www.linkedin.com/in/vinceroti/"
        title="Vince Roti's Linkedin Profile"
      >
        <linkedin />
      </a>
    </div>
  </section>
</template>

<script>
import image from "../assets/vince.jpg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

export default {
  name: "home",
  components: {
    github,
    linkedin,
  },
  data() {
    return {
      image,
    };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: spacing(base);
}
svg {
  width: rem(75);
  height: rem(75);
}
a {
  .github {
    border: 2px solid color(black);
    margin-right: spacing(half);
    .social-svg-icon {
      fill: color(black);
    }
  }
  &:hover .linkedin .social-svg-icon {
    fill: color(black);
  }
  &:hover .github {
    background-color: color(black);
    .social-svg-icon {
      fill: color(white);
    }
  }
}
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
