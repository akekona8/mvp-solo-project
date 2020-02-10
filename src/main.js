import Vue from "vue";
import App from "./App.vue";
import * as VueGoogleMaps from "vue2-google-maps";
import store from "./store";
require("dotenv").config();

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBij5V2k8zZ0nUarSrPJXDmKCbYwlxfWHU",
    libraries: "geometry,drawing,places"
  }
});

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
