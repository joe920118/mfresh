<template>
  <div id="product">
    <!-- product.html -->
    <!--面包屑导航-->
    <div class="breadcrumb">
      <div class="container">
        <h2><a href="">首页</a>&gt;<a href="">产品中心</a></h2>
      </div>
    </div>
    <!--页面主体-->
    <div class="main container" v-if="data">
      <div class="pl_header">
        <router-link to="/product/1" :class="{ cur: $route.params.type == 1 }">
          净美仕净化器
        </router-link>
        <router-link to="/product/2" :class="{ cur: $route.params.type == 2 }">
          净美仕滤网
        </router-link>
      </div>
      <!-- 产品列表-->
      <ul class="product_list clearfloat">
        <li v-for="(item, index) in data.data" :key="index">
          <router-link :to="`/product_details/${item.pid}`">
            <img :src="'http://101.96.128.94:9999/mfresh/' + item.pic" alt="" />
          </router-link>
          <div class="pdlist_text clearfloat">
            <h3>
              <p>{{ item.model }}</p>
              <span>{{ item.title2 }}</span>
            </h3>
            <router-link :to="`/product_details/${item.pid}`">
              查看详情
            </router-link>
          </div>
        </li>
        <!--<li>-->
        <!--<a href=""><img src="product-imgs/jhq-m8088a.jpg" alt=""/></a>-->
        <!--<div class="pdlist_text clearfloat">-->
        <!--<h3>-->
        <!--<p>M-8088A</p>-->
        <!--<span>带“大脑”的空气净化器</span>-->
        <!--</h3>-->
        <!--<a href="">查看详情</a>-->
        <!--</div>-->
        <!--</li>-->
        <!--<li>-->
        <!--<a href=""><img src="product-imgs/jhq-m8088a.jpg" alt=""/></a>-->
        <!--<div class="pdlist_text clearfloat">-->
        <!--<h3>-->
        <!--<p>M-8088A</p>-->
        <!--<span>带“大脑”的空气净化器</span>-->
        <!--</h3>-->
        <!--<a href="">查看详情</a>-->
        <!--</div>-->
        <!--</li>-->
        <!--<li>-->
        <!--<a href=""><img src="product-imgs/jhq-m8088a.jpg" alt=""/></a>-->
        <!--<div class="pdlist_text clearfloat">-->
        <!--<h3>-->
        <!--<p>M-8088A</p>-->
        <!--<span>带“大脑”的空气净化器</span>-->
        <!--</h3>-->
        <!--<a href="">查看详情</a>-->
        <!--</div>-->
        <!--</li>-->
        <!--<li>-->
        <!--<a href=""><img src="product-imgs/jhq-m8088a.jpg" alt=""/></a>-->
        <!--<div class="pdlist_text clearfloat">-->
        <!--<h3>-->
        <!--<p>M-8088A</p>-->
        <!--<span>带“大脑”的空气净化器</span>-->
        <!--</h3>-->
        <!--<a href="">查看详情</a>-->
        <!--</div>-->
        <!--</li>-->
        <!--<li>-->
        <!--<a href=""><img src="product-imgs/jhq-m8088a.jpg" alt=""/></a>-->
        <!--<div class="pdlist_text clearfloat">-->
        <!--<h3>-->
        <!--<p>M-8088A</p>-->
        <!--<span>带“大脑”的空气净化器的空气净化器的空气净化器</span>-->
        <!--</h3>-->
        <!--<a href="">查看详情</a>-->
        <!--</div>-->
        <!--</li>-->
      </ul>
      <!-- 分页导航-->
      <div class="pages">
        <a @click="getData(data.pageNum - 1)" v-show="data.pageNum > 1">
          上一页
        </a>
        <a class="default" v-show="data.pageNum <= 1">上一页</a>
        <!--<a href="">上一页</a>-->
        <a
          @click="getData(item)"
          :class="{ cur: item == data.pageNum }"
          v-for="(item, index) in data.pageCount"
          :key="index"
          >{{ item }}</a
        >
        <!--<a href="">1</a>-->
        <!--<a href="" class="cur">2</a>-->
        <!--<a href="">3</a>-->
        <!--<a href="">4</a>-->
        <!--<a href="">5</a>-->
        <!--<a href="">下一页</a>-->
        <a
          @click="getData(data.pageNum + 1)"
          v-show="data.pageNum < data.pageCount"
          >下一页</a
        >
        <a class="default" v-show="data.pageNum >= data.pageCount">下一页</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    this.getData(1);
  },
  methods: {
    getData(pno) {
      const type = this.$route.params.type;

      const url = `product_select.php?pageNum=${pno}&type=${type}`;

      this.axios.get(url).then((res) => {
        // console.log(res);
        this.data = res.data;
      });
    },
  },
  // 监听器
  watch: {
    "$route.params.type"(to) {
      // console.log(to);
      // 监听到type变化, 则获取新的数据
      this.getData(1);
    },
  },
};
</script>

<style lang="scss">
.pages {
  user-select: none;
}
</style>