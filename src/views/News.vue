<template>
  <div id="News">
    <!-- news.html -->
    <!--面包屑导航-->
    <div class="breadcrumb">
      <div class="container">
        <h2><a href="">首页</a>&gt;<a href="">公司动态</a></h2>
      </div>
    </div>
    <!--页面主体-->
    <div class="main container" v-if="data">
      <div class="news">
        <ul>
          <li v-for="(item, i) in data.data" :key="i">
            <span>{{ item.pubTime | date }}</span>
            <router-link :to="`/news_details/${item.nid}`">
              {{ item.title }}
            </router-link>
          </li>
          <!--<li><span>2016-02-21</span><a href="">空气净化器要逆天？ “玫瑰金”“土豪金”齐上阵</a></li>-->
          <!--<li><span>2016-02-21</span><a href="">净美仕新风净化系统　助力校园新风行动</a></li>-->
          <!--<li><span>2016-02-21</span><a href="">全国新风行动全面启动 助推净美仕战略升级</a></li>-->
          <!-- <li><span>2016-02-21</span><a href="">智能空气净化器翻盘：净美仕能否领衔?</a></li> -->
        </ul>
      </div>
      <!-- 分页导航-->
      <div class="pages">
        <a @click="getData(data.pageNum - 1)" v-show="data.pageNum > 1">
          上一页
        </a>
        <a class="default" v-show="data.pageNum <= 1">上一页</a>
        <!--<a href="" class="">上一页</a>-->
        <a
          @click="getData(item)"
          :class="{ cur: item == data.pageNum }"
          v-for="(item, index) in data.pageCount"
          :key="index"
          >{{ item }}</a
        >
        <!--<a href="" class="cur">1</a>-->
        <!--<a href="">2</a>-->
        <!--<a href="">3</a>-->
        <!--<a href="">4</a>-->
        <!--<a href="">5</a>-->
        <!--<a href="">下一页</a>-->
        <a
          @click="getData(data.pageNum + 1)"
          v-show="data.pageNum < data.pageCount"
        >
          下一页
        </a>
        <a class="default" v-show="data.pageNum >= data.pageCount">下一页</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
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
      const url = "news_select.php?pageNum=" + pno;

      this.axios.get(url).then((res) => {
        // console.log(res);
        this.data = res.data;
      });
    },
  },
};
</script>

<style>
.pages {
  user-select: none;
}
</style>