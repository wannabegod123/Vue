<template>
  <div id="app">
    <header>
      <ul class="login_nav">
        <li @click ="changeLoginWay('register')"><router-link to="/login" class="register">Register</router-link></li>
        <li>|</li>
        <li @click ="changeLoginWay('login')"><router-link to="/login" class="login">Login</router-link></li>
        <li><router-link to="/cart">购物车()</router-link></li>
      </ul>
    </header>
    <!-- 这里是登录注册的展示
    <p>{{this.$store.state.loginway}}</p>
    -->

    <!--  这里是路由的输出  <router-view></router-view>  -->


    <!--nav部分-->
    <div class="nav">
      
      <ul class="left_nav">
        <li :class="{bg:show===left_nav_value}" v-for="left_nav_value in left_navs">
            <router-link :to="'/'+left_nav_value" class="nav_a">{{left_nav_value.toUpperCase()}}</router-link>
        </li>
      </ul>

      <ul class="right_nav">
        <!-- brands是通过mapgetters来的数据，在index.js中 -->
        <li :class="{bg:show===brand.name}" v-for="brand in brands">
          <router-link :to="'/home/'+brand.name" class="nav_a">{{brand.name.toUpperCase()}}</router-link>
        </li>
      </ul>

      <h1 class="theme"><router-link to="/home">Evil Genius!</router-link>
        </h1>
    </div>

    <!-- 路由展示区域 -->
    <section>
      <transition name="display">
        <router-view></router-view>
      </transition>
    </section>

    <!-- footer -->
    <footer>
      <strong><a href="https://github.com/UNDERCOVERj/vogue" target="_blank">auther:UNDERCOVERj</a></strong>
      <ul class="bottom">
        <li v-for="item in items" class="items">
          <h1><router-link to='/home'>{{item.title}}</router-link></h1>
          <ul>
            <li v-for="content in item.contents" class="item"><router-link to='/home'>{{content}}</router-link></li>
          </ul>
        </li>
      </ul>
      <p class="payment">
        <span>we accept:</span>
        <img :src="'../static/images/pay_1.jpg'" alt="pay" />
      </p>
    </footer>

  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  methods:{
    changeLoginWay(msg){
      this.$store.dispatch("changeLoginway",msg)
    }
  },
  computed:{
    ...mapGetters({
        cart:'getCart',
        left_navs:'getLeft_nav',
//      这里的brands包括right_nv  原数据是一个对象 包含了名字和图片地址
        brands:'getBrands',
        show:'getShow',
        items:'getItems'
    })
  },
}
</script>

<style>
  body,form,div,span,ul,ol,li,p,pre,dl,dt,dd,h1,h2,h3,h4,h5,h6,em,a,fieldset,legend,address,label,textarea,select,input,figure,table,th,td,b,i{margin:0;padding:0;}
  fieldset,img{border:0;}
  ul,li{list-style:none;}
  em,i{font-style:normal;}
  table{border-collapse:separate;border-spacing:0;}
  a{text-decoration:none;color: black}
  a:focus,input,button,select,textarea{outline:none;}
  h1,h2,h3,h4,h5,h6{ font-size:100%; font-variant: normal;font-weight: 400}
  body{margin:0px;width: 100% ;font-family: "Segoe UI","Lucida Grande",Helvetica,Arial,"Microsoft YaHei",FreeSans,Arimo,"Droid Sans","wenquanyi micro hei","Hiragino Sans GB","Hiragino Sans GB W3",FontAwesome,sans-serif;font-size:16px;}
  input{text-shadow: none}
header{
  width: 100%;
  height: 50px;
  background: #000;
}
header>ul.login_nav{
  width: 100%;
  height: 100%;
}
header>ul.login_nav>li{
  float: right;
  display: inline-block;
  color: white;
  line-height:50px;
  padding-right:10px;
}
header>ul.login_nav>li:nth-child(2):hover{
  text-decoration: none;
}
header>ul.login_nav>li:hover{
  text-decoration: underline;
}
.login_nav li a{color:#fff;}


.nav h1{width: 200px;height: 90px;text-align: center;line-height: 90px;font-size: 32px;font-family: verdana;cursor: pointer;transition: all .5s ease;margin: 0 auto}
.nav h1:hover{font-size: 48px}
.left_nav{float:left;margin-left: 15px}
.left_nav li,.right_nav li{display: inline-block;text-align: center;height: 90px;line-height: 90px;font-size: 20px;font-family: verdana;transition: all .3s ease-in-out;cursor: pointer}
.left_nav li:hover{background: #00BC9B}
.right_nav{float:right;margin-right: 15px}
.right_nav li:hover{background: #00BC9B}
.nav_a{display: inline-block;height: 90px;padding: 0 15px;}
.nav{width: 100%;overflow: hidden;}

.bg{background: #00BC9B;}

footer{height: 72px;background: #3d444c;width: 100%;min-width: 1150px;padding-top: 8px;position: relative;color:#a9b8ca;bottom:-50px}
      .bg{background: #00BC9B;}
     
      footer .items{display: inline-block;padding: 0 2px;}
      footer strong {position: absolute;left: 0;top:27.5px;}
      footer strong a{text-decoration: underline;color:#a9b8ca;}
      footer .item a{color:#a9b8ca;font-size: 12px;}
      footer ul{text-align: center;}
      footer h1{text-decoration: underline;}
      footer h1 a{color:#fff}
      footer .item:hover>a{text-decoration: underline;color:#08c;}
      footer .payment{position: absolute;right:0;top: 27.5px}
      footer .payment span{display: inline-block;vertical-align: top;height: 22px;line-height: 22px}
      .scroll{width: 60px;position: fixed;bottom: 90px;right: 0}
      .scroll-enter,.scroll-leave-active{
        opacity: 0
      }
      .scroll-enter-active,.scroll-leave{
        transition: all 1s ease;
        -moz-transition: all 1s ease;/* Firefox 4 */
        -webkit-transition: all 1s ease; /* Safari 和 Chrome */
        -o-transition: all 1s ease;  /* Opera */
      }
      .display-enter,.display-leave-active{
        opacity: 0
      }
      .display-enter-active,.display-leave{
        transition: all .5s ease;
        -moz-transition: all .5s ease;/* Firefox 4 */
        -webkit-transition: all .5s ease; /* Safari 和 Chrome */
        -o-transition: all .5s ease;  /* Opera */
      }


</style>
