import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence<any>({
  storage: window.localStorage,
  key: "lucas-portifolio",
});

export default new Vuex.Store({
  state: {
    theme: "",
  },
  getters: {},
  mutations: {
    CHANGE(state, payload) {
      Object.assign(state, payload);
    },
  },
  actions: {
    CHANGE({ commit }, payload) {
      commit("CHANGE", payload);
    },
    CHANGE_THEME({ commit }, payload) {
      if (payload.theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      commit("CHANGE", payload);
    },
  },
  modules: {},
  plugins: [vuexLocal.plugin],
});
