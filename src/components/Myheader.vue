<template>
<div>


  <div class="header">
    <div class="container">
      <div>
          <router-link to="" class="header-left">
            <img src="../../public/img/header/logo.png" alt="">
          </router-link>

          <ul class="header-center">
            <li>
              <router-link to="">
                <span>商店</span><span class="span-mini">∨</span>
              </router-link>
            </li>
            <li>
              <router-link to="">
                <span>关于</span><span class="span-mini">∨</span>
              </router-link>
            </li>
            <li>
              <router-link to="">
                <span>社区</span><span class="span-mini">∨</span>
              </router-link>
            </li>
            <li>
              <router-link to="">
                <span>支持</span><span class="span-mini">∨</span>
              </router-link>
            </li>
            <li>
              <router-link to="/login" class="header-center-login">
                <span>登录</span><span class="span-mini">∨</span>
              </router-link>
            </li>
        </ul>
      </div>
     

        <ul class="header-right">
          <li>
            <router-link to="">
              <img src="../../public/img/header/car.png" alt="">&nbsp;
            </router-link>
          </li>
          <li>
            <router-link to="" class="header-right-search">
              <img src="../../public/img/header/search.png" alt="">
            </router-link>
          </li>  
          <li @click="handleclick">
             <router-link to="" class="nav-button" >
                <img src="../../public/img/header/nav0.png" alt="">
                <span style="margin-left:5px;">菜单</span>
            </router-link>  
          </li>
         
        </ul>
        
    </div>
     
  </div>
  <div class="sm-content" v-show="isOpen">
     <ul>
       <li @click.prevent="handleclick2">商店<span>⊙</span>
        <div class="sm-content-hide" v-show="isOpen2">
          <div class="sm-content-ori" >
              <router-link to="">最新发布</router-link>
              <router-link to="">畅销商品</router-link>
              <router-link to="">正在打折</router-link>
          </div>
        </div>
       </li>
        <li @click.prevent="handleclick3">关于<span>⊙</span>
        <div class="sm-content-hide" v-show="isOpen3">
          <div class="sm-content-ori" >
              <router-link to="">GOG.com</router-link>
              <router-link to="">GOG.Galaxy</router-link>
              <router-link to="">加入团队</router-link>
          </div>
        </div>
       </li>
       <li @click.prevent="handleclick4">社区<span>⊙</span>
        <div class="sm-content-hide" v-show="isOpen4">
          <div class="sm-content-ori">
              <router-link to="">所有论坛</router-link>
              <router-link to="">中文讨论论坛</router-link>
              <router-link to="">论坛回复</router-link>
          </div>
        </div>
       </li>
       <li @click.prevent="handleclick5">支持<span>⊙</span>
        <div class="sm-content-hide" v-show="isOpen5">
          <div class="sm-content-ori">
              <router-link to="">游戏技术性支持</router-link>
              <router-link to="">订单与支付</router-link>
              <router-link to="">账户和网站</router-link>
              <router-link to="">下载</router-link>
              <router-link to="">GOG.Galaxy</router-link>
          </div>
        </div>
       </li>
     </ul>
  </div>
</div>  
</template>

<script>

// 抛出对象 相当于module.exports=对象
export default {
    data(){
        return {
          isOpen:false,
          isOpen2:false,
          isOpen3:false,
          isOpen4:false,
          isOpen5:false
        }
    },
    methods: {
      handleclick(){
          this.isOpen=!this.isOpen
      },
      handleclick2(){
          this.isOpen2=!this.isOpen2
      },
       handleclick3(){
          this.isOpen3=!this.isOpen3
      },
       handleclick4(){
          this.isOpen4=!this.isOpen4
      },
       handleclick5(){
          this.isOpen5=!this.isOpen5
      }
    }
     
}

</script>

<style scoped>
    .header{
      width:100%;
      height: 56px;
      line-height:56px;
      background:rgb(0,0,0,0.9);
      z-index:50
    }
    .header div{
      display: flex;
      justify-content: space-between
    }
    .header-center{
      list-style: none;
      display: flex;
      margin-left:-10%;
    }
    .header-center a{
      color:#ccc;
      text-decoration: none;
      width: 100px;
      margin-right:25px;
      font-weight: bold;

    }
    .header-center a :hover{
      color:#fff
    }
    .header-center .header-center-login{
      color:#de8ae5;
    }
    .header-center .header-center-login :hover{
       color:#f9afff!important;
    }
   
    .span-mini{
      font-size:12px;
      margin-left:2px;
    }
    .header-left img{
     height:34px;
    }
    .header-right{
       list-style: none;
      display: flex; 
   
    }
    .header-right img{
      width:21px;
    }
    .header-right-search{
      margin-left:15px;
    }
    .header-right span{
      color:#fff
    }
    .nav-button{
      display:none;
       margin-left:15px;
    }
    .nav-button img{
      height:25px;
    }
    .sm-content{
      /* display: none; */
      background:rgb(0,0,0,0.9);
      padding-left:0
    }

@media (max-width:426px) and (max-width: 767px) {
 
  .header-center{
    display: none
  }
  .header-right img{
      width:21px;
    }
    .nav-button{
      display: block
    }  
    .nav-button-img-hide{
      display:none;
    }
    .nav-button-img-show{
      display: block;
    }
    .sm-content{
      /* display: block; */
      width: 100%;
      height: 100%;
      background:rgb(0,0,0,0.9);
    }
    .sm-content-show{
    display: block
  }
  .sm-content ul{
    list-style: none;
    /* margin:0px; */
    padding-left:3rem!important;
    text-align: left;
  }
  .sm-content ul span{
    /* float: right; */
    margin-left:70%;
    right:0;
    color:#fff
  }
  .sm-content ul li{
    color:#de8ae5;
    font-size:16px;
    margin-bottom:10px;
  }
  .sm-content-ori{
    color:#fff!important;
    display: flex;
    justify-content: left;
    flex-direction: column;
  }
  .sm-content-hide{
   
    display: none
  }
  .sm-content-show{
    
    display: block
  }
 
  .sm-content-ori a{
    color:#fff;
    text-decoration: none;
    font-size: 14px;
    margin-top:10px;
  }
}  

@media (min-width:426px) and (max-width: 992px) {
  .sm-content{
    display: none
  }

}
@media (min-width: 992px) {
  .sm-content{
    display: none
  }
}
@media (max-width:426px) {
  .header-center{
    display: none
  }
  .sm-content{
      /* display: block; */
      width: 100%;
      height: 100%;
      background:rgb(0,0,0,0.9);
      display: block
    }
   .sm-content-hide{
   
    display: block
  }
}
</style>