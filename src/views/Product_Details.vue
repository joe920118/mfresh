<template>
  <div id="product_details">
    <!-- product_details.html  -->
    <!--面包屑导航-->
    <div class="breadcrumb">
      <div class="container">
        <h2>
          <a href="">首页</a>&gt;<a href="">产品中心</a>&gt;<a href=""
            >净美仕净化器</a
          >
        </h2>
      </div>
    </div>
    <!--页面主体-->
    <div class="main container" v-if="data">
      <div class="pd_info clearfloat">
        <div class="pdinfo_img">
          <img :src="'http://101.96.128.94:9999/mfresh/' + data.pic" alt="" />
        </div>
        <div class="pdinfo_text">
          <h2>{{ data.title2 }}</h2>
          <ul>
            <li>型号：{{ data.model }}</li>
            <li>功能：{{ data.func }}</li>
            <li>噪音：{{ data.noise }}</li>
            <li>风量：{{ data.wind }}</li>
            <li>适用对象：{{ data.applyTo }}</li>
            <li>适用面积：{{ data.size }}</li>
            <li>空气净化能效等级：{{ data.level }}</li>
          </ul>
          <p>
            价格：<span>¥</span><strong id="price">{{ data.price }}</strong>
          </p>
          <a @click="addToCart()" id="addCart" class="add_text"
            ><span class="icon_cart"></span>加入购物车</a
          >
        </div>
      </div>
      <div class="details_box">
        <h2 class="title">产品详情</h2>
        <div class="pd_details" v-html="detail">
          <!--<p>家用除甲醛静音M-8088A，带大脑的空气净化器。家用除甲醛静音M-8088A，带大脑的空气净化器。家用除甲醛静音M-8088A，带大脑的空气净化器。家用除甲醛静音M-8088A，带大脑的空气净化器。家用除甲醛静音M-8088A，带大脑的空气净化器。家用除甲醛静音M-8088A，带大脑的空气净化器。家用除甲醛静音M-8088A，带大脑的空气净化器。</p>-->
          <!--<img src="product-imgs/m8088a/01.jpg" alt=""/>-->
          <!--<img src="product-imgs/m8088a/02.jpg" alt=""/>-->
          <!--<img src="product-imgs/m8088a/03.jpg" alt=""/>-->
          <!--<img src="product-imgs/m8088a/04.jpg" alt=""/>-->
          <!--<img src="product-imgs/m8088a/05.jpg" alt=""/>-->
          <!--<img src="product-imgs/m8088a/06.jpg" alt=""/>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product_Details",
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    // 加入购物车
    addToCart() {
      if (this.$store.state.user) {
        const uid = this.$store.state.user.uid;
        const pid = this.$route.params.pid;

        const url = `cart_detail_add.php?uid=${uid}&pid=${pid}`;
        this.axios.get(url).then((res) => {
          console.log(res);
          if (res.data.code == 1) alert("购物车添加成功!");
          this.$router.push("/cart");
        });
      } else {
        alert("登录后添加购物车, 即将为您跳转到登录页面!");
        this.$router.push("/login");
      }
    },

    getData() {
      const pid = this.$route.params.pid;
      const url = `product_detail.php?pid=${pid}`;

      this.axios.get(url).then((res) => {
        // console.log(res);
        this.data = res.data;
      });
    },
  },
  // 图片路径问题
  computed: {
    detail() {
      return this.data.detail.replace(
        /<img src="/g,
        '<img src="http://101.96.128.94:9999/mfresh/'
      );
    },
  },
};
</script>

<style>
.add_text {
  user-select: none; /*防止选取文本*/
  cursor: pointer;
}
</style>