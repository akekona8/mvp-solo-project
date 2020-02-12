import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import * as VueGoogleMaps from "vue2-google-maps";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";

import "./assets/style.scss";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);

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
