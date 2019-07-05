import Vue from 'vue'
import Router from 'vue-router'
//引入页面组件
import Index from "./views/Index.vue"
import Details from "./views/Details.vue"
import Products from "./views/Products.vue"
import Reg from "./views/Reg.vue"
import Login from './views/Login'
import Index_carousel from './views/Index_carousel'
import Card from './components/Card'
import Card1 from './components/Card1'
import Card2 from './components/Card2'
import Card2_1 from './components/Card2_1'
import Card3 from './components/Card3'
import Card3_1 from './components/Card3_1'
import Index_2l from './views/Index_2l'
import Galaxy from './views/Galaxy'
import Index_3l from './views/Index_3l'
import Index_4l from './views/Index_4l'
import Index_5l from "./views/Index_5l"
import Index_6l from "./views/Index_6l"
Vue.use(Router)

export default new Router({
  routes: [
    //引入字典中
   {path:"/index",component:Index},
   {path:"/products",component:Products},
   {path:"/details",component:Details},
   {path:"/reg",component:Reg},
   {path:"/login",component:Login},
   {path:"/Index_carousel",component:Index_carousel},
   {path:"/Card",component:Card},
   {path:"/Card1",component:Card1},
   {path:"/Card2",component:Card2},
   {path:"/Card2_1",component:Card2_1},
   {path:"/Card3",component:Card3},
   {path:"/Card3_1",component:Card3_1},
   {path:"/index_2l",component:Index_2l},
   {path:"/galaxy",component:Galaxy},
   {path:"/index_3l",component:Index_3l},
   {path:"/index_4l",component:Index_4l},
   {path:"/index_5l",component:Index_5l},
   {path:"/index_6l",component:Index_6l},
   {
     path:"*",
     component:{
       template:`<h2>404:Not Found</h2>`
     }
    }
  ]
})
