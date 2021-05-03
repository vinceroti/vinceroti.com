import App from "./App.vue";
import Vue from "vue";
import VueMeta from "vue-meta";

Vue.use(VueMeta);

new Vue({
  el: "#app",
  render: (h) => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
});
