<template>
  <div id="cart">
    <!-- cart.html -->
    <!--面包屑导航-->
    <div class="breadcrumb">
      <div class="container">
        <h2><a href="">首页</a>&gt;<a href="">产品中心</a></h2>
      </div>
    </div>
    <!--页面主体-->
    <div class="main container">
      <div class="cart">
        <div class="cart_header">
          <span
            >已选商品<em>{{ totalChecked }}</em
            >件</span
          >
          <span
            >总金额：<strong>{{ totalPrice }}</strong></span
          >
          <button type="button">结算</button>
        </div>
        <div class="cart_con">
          <div class="cartcon_title">
            <span
              ><input type="checkbox" v-model="checkAll" @change="doCheckAll" />
              全选</span
            >
            <span>商品信息</span>
            <span>单价</span>
            <span>数量</span>
            <span>金额</span>
            <span>操作</span>
          </div>
          <ul>
            <h2 v-show="products.length == 0">购物车中没有任何商品！</h2>
            <li v-for="(item, index) in products" :key="index">
              <input
                type="checkbox"
                class="cart_checkbox"
                v-model="item.checked"
                @change="checkOne"
              />
              <a href="" class="cart_img">
                <img
                  :src="`http://101.96.128.94:9999/mfresh/${item.pic}`"
                  alt=""
                />
              </a>
              <a href="" class="cart_title">{{ item.title1 }}</a>
              <i>{{ item.price }}</i>
              <div>
                <span @click="updateCount(index, -1)">-</span>
                <input type="text" v-model="item.count" />
                <span @click="updateCount(index, +1)">+</span>
              </div>
              <strong>¥{{ item.price * item.count }}</strong>
              <em @click="removeProduct(index)"></em>
            </li>
            <!--<li>-->
            <!--<input type="checkbox" class="cart_checkbox"/>-->
            <!--<a href="" class="cart_img"><img src="product-imgs/jhq-m8088a.jpg" alt=""/></a>-->
            <!--<a href="" class="cart_title">家用除甲醛静音M-8088A</a>-->
            <!--<i>¥1599</i>-->
            <!--<div>-->
            <!--<span>-</span><input type="text" value="2"/><span>+</span>-->
            <!--</div>-->
            <!--<strong>¥1599.00</strong>-->
            <!--<em></em>-->
            <!--</li>-->
            <!--<li>-->
            <!--<input type="checkbox" class="cart_checkbox"/>-->
            <!--<a href="" class="cart_img"><img src="product-imgs/jhq-m8088a.jpg" alt=""/></a>-->
            <!--<a href="" class="cart_title">家用除甲醛静音M-8088A</a>-->
            <!--<i>¥1599</i>-->
            <!--<div>-->
            <!--<span>-</span><input type="text" value="2"/><span>+</span>-->
            <!--</div>-->
            <!--<strong>¥1599.00</strong>-->
            <!--<em></em>-->
            <!--</li>-->
          </ul>
        </div>
        <div class="cart_header">
          <span
            >已选商品<em>{{ totalChecked }}</em
            >件</span
          >
          <span
            >总金额：<strong>{{ totalPrice }}</strong></span
          >
          <button type="button">结算</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      products: [],
      totalChecked: 0, //勾选的总数量
      totalPrice: 0, //总金额
      checkAll: false,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    doCheckAll() {
      this.products.forEach((item) => (item.checked = this.checkAll));

      this.checkOne();
    },

    checkOne() {
      let total = 0;
      let totalPrice = 0;
      this.products.forEach((item) => {
        if (item.checked) {
          total++;
          totalPrice += item.price * item.count;
        }
      });

      this.totalChecked = total;
      this.totalPrice = totalPrice;

      this.checkAll = total == this.products.length;
    },

    removeProduct(index) {
      const did = this.products[index].did;
      const url = "cart_detail_delete.php?did=" + did;

      this.axios.get(url).then((res) => {
        console.log(res);
        if (res.data.code == 1) {
          this.products.splice(index, 1);
        }
      });
    },

    updateCount(index, delta) {
      // delta: +1 or -1
      const { did, pid, count } = this.products[index];
      const new_count = count * 1 + delta;
      const url = `cart_detail_update.php?did=${did}&pid=${pid}&count=${new_count}`;

      this.axios.get(url).then((res) => {
        console.log(res);
        if (res.data.code == 1) {
          this.products[index].count = new_count;
          this.checkOne();
        }
      });
    },

    getData() {
      const uid = this.$store.state.user.uid;

      const url = "cart_detail_select.php?uid=" + uid;

      this.axios.get(url).then((res) => {
        console.log(res);
        this.products = res.data.products;
        // 人为 为每个数据添加 选中标识
        this.products.forEach((item) => (item.checked = false));
      });
    },
  },
};
</script>

<style>
.cart_con {
  user-select: none;
}
</style>