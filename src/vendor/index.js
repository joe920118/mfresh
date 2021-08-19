// vendor: 专门存放第三方相关的扩展
import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";

// import style (>= Swiper 6.x)
// import 'swiper/swiper-bundle.css'

// 我们安装的是 swiper5.4.5  所以应该保留这里的代码
// import style (<= Swiper 5.x)
import "swiper/css/swiper.css";

Vue.use(VueAwesomeSwiper /* { default options with global component } */);

/***************************************************************************/
// 集成 axios
import axios from "axios";

// baseURL: 基础路径;  设置完毕后, 发送的网络请求都会自动添加这个路径作为前缀
axios.defaults.baseURL = "http://101.96.128.94:9999/mfresh/data/";

Vue.prototype.axios = axios;
