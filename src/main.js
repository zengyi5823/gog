import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// +引入element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
//+引入swiper
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';


//+引入axios模块
import axios from "axios"
//+以下两步引入页头
import Myheader from "./components/Myheader"
Vue.component("my-header",Myheader) //封装为全局组件
import Myfooter from "./components/Myfooter"
Vue.component("my-footer",Myfooter)
//+引入组件
import Card from "./components/Card"
Vue.component("Card",Card)

Vue.config.productionTip = false
//+让axios自动携带cookiesid到服务端，保存session值
axios.defaults.withCredentials=true;

//+axios如果用post请求，需先定义全局请求头信息
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//+将axios对象放入Vue的原型对象中，所有的组件都可以使用this.axios.get发送ajax请求。
Vue.prototype.axios=axios

//看到new Vue,就知道main.js是整个应用程序的入口
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
