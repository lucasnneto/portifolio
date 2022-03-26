import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/index.scss";
import "@/components/icons/imports";
import isMobile from "@/plugins/isMobile";
Vue.use(isMobile);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
