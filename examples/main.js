import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PimEcharts from "../packages/index";

Vue.config.productionTip = false;

Vue.use(PimEcharts);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
