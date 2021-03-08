<template>
  <section class="home">
    <div class="headshot-image">
      <VueImage alt="Vince Roti Image" :src="headshotSrc" />
    </div>
    <div class="copy">
      <h1>Hi,<br />I'm Vince, <br />Web Developer.</h1>
      <a
        href="https://github.com/vinceroti/"
        title="Vince Roti's Github Profile"
        target="_blank"
      >
        <github />
      </a>
      <a
        href="https://www.linkedin.com/in/vinceroti/"
        title="Vince Roti's Linkedin Profile"
        target="_blank"
      >
        <linkedin />
      </a>
    </div>
  </section>
</template>

<script>
import VueImage from "@/components/VueImage.vue";
import headshotSrc from "@/assets/vince.jpg";
import github from "@/assets/github.svg";
import linkedin from "@/assets/linkedin.svg";

export default {
  name: "home",
  components: {
    github,
    linkedin,
    VueImage,
  },
  data() {
    return {
      headshotSrc,
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
  .linkedin {
    circle {
      transition: fill 170ms ease-in-out 0s;
      fill: color(white);
    }
  }
  .github {
    border: 2px solid color(black);
    margin-right: spacing(half);
    .social-svg-icon {
      fill: color(black);
    }
  }
  &:hover {
    .linkedin {
      circle {
        fill: color(black);
      }
    }
    .github {
      background-color: color(black);
      .social-svg-icon {
        fill: color(white);
      }
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
