import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    locations: []
  },
  mutations: {
    setLocations(state, locations) {
      state.locations = locations;
    }
  },
  actions: {}
});
