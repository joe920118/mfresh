<template>
  <div>
    <!-- 3.使用组件 -->
    <Header class="header_box" />

    <router-view />
    <Footer class="footer" />
  </div>
</template>

<script>
// 1.引入组件
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  // 2.注册组件
  components: { Header, Footer },
};
</script>

<style>
/* css引入其他css文件, 用 @import */
@import "./assets/css/common.css";
@import "./assets/css/mycss.css";
</style>
