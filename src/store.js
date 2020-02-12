import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    travelog: {
      id: null,
      year: null,
      month: null,
      country: null,
      city: null,
      favorite_memory: null,
      people: null,
      photo_url: null,
      latitude: null,
      longitude: null
    },
    travelogs: [
      {
        id: 1,
        year: 2018,
        month: 7,
        country: "South Korea",
        city: "Seoul",
        favorite_memory: "River show",
        people: "College friends",
        photo_url: null,
        latitude: null,
        longitude: null
      },
      {
        id: 2,
        year: 2019,
        month: 5,
        country: "Japan",
        city: "Kyoto",
        favorite_memory: "Arashiyama",
        people: "Brother",
        photo_url: null,
        latitude: null,
        longitude: null
      }
    ],
    newLogs: []
  },

  mutations: {
    setTravelog(state, log) {
      state.travelog = log;
    },
    setTravelogs(state, logs) {
      state.travelogs = logs;
    },
    setNewLogs(state, logs) {
      state.newLogs = logs;
    }
  },
  actions: {
    async retrieveData(context) {
      if (localStorage.mvp_solo_project) {
        const logs = [];
        Vue.axios.defaults.headers.common.Authorization = `Bearer ${localStorage.mvp_solo_project}`;
        // const { data: logs } = await axios.get("/api/travelog");
        const res = await Vue.axios.get("api/travelog");
        const newLog = {
          id: res.id,
          year: res.year,
          month: res.month,
          country: res.country,
          city: res.city,
          favorite_memory: res.favorite_memory,
          people: res.people
        };
        context.commit("setTravelog", res.data.travelog);
        logs.push(newLog);
        context.commit("setTravelogs", res.data.travelogs);
      }
    },
    addLog({ commit }, state, log) {
      const tempLog = [];
      tempLog.push([...state, log]);
      console.log("tempLog", tempLog);
      console.log("newLog", this.newLogs);
      commit("setNewLog", tempLog);
    }
  }
});
