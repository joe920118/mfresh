import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    // 首页
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    // 关于净美仕
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    // 公司动态
    path: "/news",
    name: "News",
    component: () => import(/* webpackChunkName: "news" */ "../views/News.vue"),
  },
  {
    // 公司动态-详情页
    path: "/news_details/:nid",
    name: "News_Details",
    component: () =>
      import(
        /* webpackChunkName: "news_details" */ "../views/News_Details.vue"
      ),
  },
  {
    // 产品中心
    path: "/product/:type",
    name: "Product",
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/Product.vue"),
  },
  {
    // 产品中心-详情页
    path: "/product_details/:pid",
    name: "Product_Details",
    component: () =>
      import(
        /* webpackChunkName: "product_details" */ "../views/Product_Details.vue"
      ),
  },
  {
    // 联系我们
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
  },
  {
    // 购物车
    path: "/cart",
    name: "Cart",
    component: () => import(/* webpackChunkName: "cart" */ "../views/Cart.vue"),
  },
  {
    // 注册
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue"),
  },
  {
    // 登录
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
