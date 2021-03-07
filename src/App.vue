<template>
  <div id="app">
    <Header />
    <main>
      <div>
        <Info />
        <About />
        <Resume />
      </div>
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Info from "@/components/Info.vue";
import About from "@/components/About.vue";
import Resume from "@/components/Resume.vue";

export default {
  name: "app",
  components: {
    Header,
    Info,
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
