<template>
  <div id="app">
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
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Resume from "@/components/Resume.vue";
import Observer from "@/components/Observer.vue";

export default {
  name: "app",
  components: {
    NavBar,
    Home,
    About,
    Resume,
    Observer,
  },
  data() {
    return {
      loaded: true,
      elmInView: "home",
    };
  },
  mounted() {
    this.loaded = true;
  },
  methods: {
    inView(id) {
      this.elmInView = id;
    },
  },
};
</script>

<style lang="scss">
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
</style>
