<template>
  <div id="app">
    <NavBar />
    <main>
      <div>
        <Home id="home" />
        <About id="about" />
        <Resume id="resume" />
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Resume from "@/components/Resume.vue";

export default {
  name: "app",
  components: {
    NavBar,
    Home,
    About,
    Resume,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/base/_index.scss";

section {
  width: 100%;
  margin: auto 0;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  min-height: 100vh;
}
</style>
