import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 多个组件间数据共享
    user: JSON.parse(sessionStorage.getItem("user")),
  },
  mutations: {
    // user: 用户的相关信息对象
    updateUser(state, user) {
      state.user = user;
      // 持久化
      // setItem(字符串, 字符串);
      // 利用 JSON 把参数2 转化为字符串类型存储
      sessionStorage.setItem("user", JSON.stringify(user));

      // 参数2: null 代表退出操作, 则删除
      if (user == null) sessionStorage.removeItem("user");
    },
  },
  actions: {},
  modules: {},
});
