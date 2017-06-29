import Vue from 'vue'
import Router from 'vue-router'

import App from '../App.vue'
import Home from '../components/Home.vue'
import Cart from '../components/Cart.vue'
import Login from '../components/Login.vue'
import News from '../components/News.vue'
import Newsarticle from '../components/Newsarticle.vue'
import HomeFirst from '../components/HomeFirst.vue'
import Collections from '../components/Collections.vue'
import Shop from '../components/Shop.vue'
import Shoppingitem from '../components/Shoppingitem.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',redirect:'/home'
      
    },
    {
      path:'/home',
      component:Home,
      children:[
        {path:'',component:HomeFirst},
      ]
    },
    {
      //购物车
      path:'/cart',component:Cart
    },
    {
    //  登录注册
      path:'/login',component:Login
    },
    {
      path:'/news',component:News
    },
    {
      path:'/newsarticle',component:Newsarticle
    },
    {
      path:'/collections',component:Collections
    },
    {
      path:'/shop',component:Shop
    },
    {
      path:'/shoppingitem',component:Shoppingitem
    }

  ]
})
