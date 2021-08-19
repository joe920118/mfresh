<template>
  <div id="index">
    <!-- index.html -->
    <!-- swiper: 一款非常专业的滚动组件库 -->
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, i) in banners" :key="i">
        <img :src="item" alt="" style="width: 100%" />
      </swiper-slide>

      <!-- 页数指示器插槽 -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- 上一页 和 下一页 按钮插槽 -->
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>

    <!--banner-->
    <div class="banner" v-if="false">
      <!-- 练习：编写banner的html和css-->
      <!-- 图片列表-->
      <ul>
        <!-- vue的webpack打包机制, 只能自动打包 img 的 src 中的图片 -->
        <!-- 还可以自动识别 style 标签中的图片地址 -->
        <!-- 但是: 无法识别内联样式写法, 除非搭配 require 这个js的引入操作才能实现 -->
        <li style="">
          <a href="#" class="link"></a>
        </li>
        <li
          style="
            background: url(../assets/images/banner_02.jpg) center 0 no-repeat;
          "
        >
          <a href="#" class="link"></a>
        </li>
        <li
          style="
            background: url(../assets/images/banner_03.jpg) center 0 no-repeat;
          "
        >
          <a href="#" class="link"></a>
        </li>
        <li
          style="
            background: url(../assets/images/banner_04.jpg) center 0 no-repeat;
          "
        >
          <a href="#" class="link"></a>
        </li>
      </ul>
      <!-- 左右箭头-->
      <span class="cut prev"></span>
      <span class="cut next"></span>
      <!-- 小圆点指示器-->
      <div class="indicator">
        <a href="" class="cur"></a><a href=""></a><a href=""></a><a href=""></a>
      </div>
    </div>
    <!--main-->
    <div class="main container">
      <div class="ind_con1">
        <h2 class="title"><a href="#" class="more">more</a>净美仕产品</h2>
        <ul class="clearfloat">
          <li>
            <a href="#" class="link"
              ><img src="../assets/images/01.jpg" alt=""
            /></a>
          </li>
          <li>
            <a href="#" class="link"
              ><img src="../assets/images/02.jpg" alt=""
            /></a>
          </li>
          <li>
            <a href="#" class="link"
              ><img src="../assets/images/03.jpg" alt=""
            /></a>
          </li>
        </ul>
      </div>
      <div class="ind_con2 clearfloat">
        <div class="ind_about">
          <h2 class="title"><a href="#" class="more">more</a>关于净美仕</h2>
          <p>
            北京净美仕环境科技有限公司自诞生起一直关注人类呼吸健康的问题，并专注于室内空气质量的研究与改善。2003年，非典来袭，环境安全威胁到了每个人的生命，全国陷入一片恐慌。净美仕肩负着为人类创造健康安全生活环境的使命应运而生。2012年7月，亿朗以“净美仕(Mfresh)”为品牌重塑，以崭新的面貌屹立在净化行业。
            <a href="#">查看更多</a>
          </p>
        </div>
        <div class="ind_news">
          <h2 class="title"><a href="#" class="more">more</a>公司动态</h2>
          <ul>
            <li>
              <span>2016-02-21</span
              ><a href="">空气净化器要逆天？ “玫瑰金”“土豪金”齐上阵</a>
            </li>
            <li>
              <span>2016-02-21</span
              ><a href="">净美仕新风净化系统　助力校园新风行动</a>
            </li>
            <li>
              <span>2016-02-21</span
              ><a href="">全国新风行动全面启动 助推净美仕战略升级</a>
            </li>
            <li>
              <span>2016-02-21</span
              ><a href="">智能空气净化器翻盘：净美仕能否领衔?</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      banners: [
        // 图片必须 利用require才能被webpack识别并打包
        require("../assets/images/banner_01.jpg"),
        require("../assets/images/banner_02.jpg"),
        require("../assets/images/banner_03.jpg"),
        require("../assets/images/banner_04.jpg"),
      ],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true, //循环滚动

        // 页数指示器
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        // 页数按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        // 自动滚动
        autoplay: {
          delay: 2500, //自动滚动间隔  单位ms 毫秒
          disableOnInteraction: false, // 用户触摸后是否停止自动滚动
        },
      },
    };
  },
};
</script>

<style lang="scss">
// vue中 webpack工具 与图片有关的打包机制: 只能自动识别 img 的src标签; 或 style 标签中的图片并打包.
.banner {
  li:nth-of-type(1) {
    background: url(../assets/images/banner_01.jpg) center 0 no-repeat;
    display: block;
    z-index: 20;
  }
}
</style>