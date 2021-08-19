import Vue from "vue";

// 用法: {{ 时间戳 | date}}
Vue.filter("date", (timestamp) => {
  // 1: 是为了保障参数必定是数字类型, 因为 Date 要求参数是数字
  const date = new Date(timestamp * 1);

  // getMonth(): 返回值是 0 - 11, +1变为1-12
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`;
});
