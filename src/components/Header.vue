<template>
  <div id="header">
    <!-- 网站的头部组件 header.html -->
    <header class="header container">
      <h1 class="logo"><router-link to="/" class="link"></router-link></h1>
      <div class="h_con">
        <ul class="clearfloat">
          <li class="phone">4000-585-116</li>
          <li><a href="#">中文</a></li>
          <li><em>|</em></li>
          <li><a href="#">English</a></li>
          <li><a href="#" class="weixin"></a></li>
          <li><a href="#" class="weibo"></a></li>
          <template v-if="!$store.state.user">
            <li><router-link to="/login" class="h_login">登录</router-link></li>
            <li><em>|</em></li>
            <li>
              <router-link to="/register" class="h_register">注册</router-link>
            </li>
          </template>

          <template v-else>
            <li class="top_user">
              <a href="">{{ $store.state.user.uname }}</a>
            </li>
            <li class="top_quit">
              <a @click="$store.commit('updateUser', null)">退出</a>
            </li>
          </template>
        </ul>
        <div class="search clearfloat">
          <button type="button"></button>
          <input type="text" />
        </div>
      </div>
    </header>
    <!--nav-->
    <nav class="navbar">
      <div class="container">
        <div class="nav">
          <ul>
            <li>
              <router-link to="/">
                <span class="icon_home"></span>首页
              </router-link>
            </li>
            <li><router-link to="/about">关于净美仕</router-link></li>
            <li>
              <router-link
                to="/news"
                :class="{
                  'router-link-exact-active': $route.name == 'News_Details',
                }"
                >公司动态</router-link
              >
            </li>
            <li class="nav_pd">
              <router-link
                to="/product/1"
                :class="{
                  'router-link-exact-active':
                    $route.name == 'Product' ||
                    $route.name == 'Product_Details',
                }"
              >
                产品中心
                <span class="icon_pd"></span>
              </router-link>
              <div class="pd_dropdown">
                <router-link to="/product/1">净美仕净化器</router-link>
                <router-link to="/product/2">净美仕滤网</router-link>
              </div>
            </li>
            <li><router-link to="/contact">联系我们</router-link></li>
          </ul>
        </div>
        <div class="s_cart" v-show="$store.state.user">
          <router-link to="/cart">
            <span class="icon_cart"></span>购物车(<strong id="cart_sum"
              >0</strong
            >)<span class="icon_sj"></span>
          </router-link>
          <div class="cart_dropdown">
            <!--<h3>您的购物车为空~</h3>-->
            <ul>
              <!--<li>-->
              <!--<a href=""><img src="product-imgs/jhq-m8088a.jpg" alt=""/></a>-->
              <!--<div>-->
              <!--<span>-</span><input type="text" value="2"/><span>+</span>-->
              <!--</div>-->
              <!--<strong>¥1599.00</strong>-->
              <!--<em></em>-->
              <!--</li>-->
              <!--<li>-->
              <!--<a href=""><img src="product-imgs/jhq-m8088a.jpg" alt=""/></a>-->
              <!--<div>-->
              <!--<span>-</span><input type="text" value="2"/><span>+</span>-->
              <!--</div>-->
              <!--<strong>¥1599.00</strong>-->
              <!--<em></em>-->
              <!--</li>-->
            </ul>
            <div class="cd_js clearfloat">
              <span>共计：<strong>0.00</strong></span>
              <a href="#">结算</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  mounted() {
    console.log(this.$route, "111");
  },
};
</script>

<style lang="scss">
/* router-link: 如果是当前路径, 则会自动带有下方的class */
.nav .router-link-exact-active {
  background-color: orange;

  // 悬浮状态:
  &:hover {
    background-color: orange;
  }
}
</style>