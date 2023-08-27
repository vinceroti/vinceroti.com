<template>
  <div id="app">
    <FirstLoad />
    <transition name="fade" appear>
      <NavBar :in-view="elmInView" />
    </transition>
    <transition name="fade" appear>
      <main>
        <div class="container">
          <Observer @in-view="inView('home')" :no-transition="true">
            <Home id="home" />
          </Observer>
          <Observer @in-view="inView('about')">
            <About id="about" />
          </Observer>
          <Observer @in-view="inView('resume')">
            <Resume id="resume" />
          </Observer>
        </div>
      </main>
    </transition>
    <Particles id="tsparticles" :options="options" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Resume from "@/components/Resume.vue";
import Observer from "@/components/Observer.vue";
import Particles from "particles.vue";
import FirstLoad from "@/components/FirstLoad.vue";
import Vue from "vue";

Vue.use(Particles);

export default {
  name: "app",
  components: {
    NavBar,
    Home,
    About,
    Resume,
    Observer,
    FirstLoad,
  },
  metaInfo: {
    title: "Vince Roti - Web Developer",
    htmlAttrs: {
      lang: "en-US",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "description",
        content: "Hi, I'm Vince. Hire me!",
      },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },
  data() {
    return {
      loaded: false,
      elmInView: "home",
      options: {
        particles: {
          number: {
            value: 6,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#89b0bf",
          },
          shape: {
            type: "polygon",
            stroke: {
              width: 0,
              color: "#000",
            },
            polygon: {
              nb_sides: 6,
            },
          },
          opacity: {
            value: 0.1,
            random: true,
            anim: {
              enable: false,
              speed: 0.2,
              opacity_min: 0.01,
              sync: false,
            },
          },
          size: {
            value: 160,
            random: false,
            anim: {
              enable: true,
              speed: 2,
              size_min: 40,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 0.2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: true,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
              mode: "grab",
            },
            onclick: {
              enable: false,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      },
    };
  },
  methods: {
    inView(id) {
      this.elmInView = id;
    },
  },
};
</script>

<style lang="scss">
@import "css-reset-and-normalize/scss/reset-and-normalize.scss";
@import "./assets/scss/base/_index.scss";

section {
  margin: auto 0;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  min-height: 102vh;
  @include respond-to(medium) {
    padding: 0;
  }
}
.container {
  overflow-x: clip;
}
#tsparticles {
  position: fixed;
  z-index: z-index(behind);
  width: 100%;
  height: 100%;
}
</style>
