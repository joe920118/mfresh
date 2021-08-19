import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 注册swiper, 文件夹下有 index.js 命名的文件, 会自动引入
import "./vendor";

// 全局过滤器
import "./filter";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
