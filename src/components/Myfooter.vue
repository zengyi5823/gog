<template>
<div class="footer">
  <div class="footer1">
      <!-- 1L -->
      <div class="container d-flex justify-content-between">
        <div class="footer1-left">
          <span><router-link to="">兑换代码</router-link></span>
          <span><router-link to="">重新兑换您的游戏</router-link></span>
          <span><router-link to="">GOG Connect</router-link></span>
          <span><router-link to="">职业发展机会</router-link></span>
          <span><router-link to="">兑换代码</router-link></span>
          <span><router-link to="">提交您的游戏</router-link></span>
        </div>
        <div class="footer1-right">
          <span><img src="../../public/img/footer/facebook.png" alt=""></span>
          <span><img src="../../public/img/footer/tt.png" alt=""></span>
          <span><img src="../../public/img/footer/bilibili.png" alt=""></span>
        </div>
      </div>
    </div>
    <!-- 2l -->
    <div class="footer2">
      <div class="container d-flex justify-content-between">
          <div class="footer2-left">
            <div>
              <img src="../../public/img/footer/logo.png" alt="">
            </div>
            <ul>
              <li>语言：<span>English</span><span>Deutsch</span><span>Français</span><span>Polski</span><span>Pусский</span><span class="cny">简体中文</span></li>
              <li>货币：<span class="cny">CNY</span><span>USD</span></li>
            </ul>        
        </div>
          <img  class="footer2-right" src="../../public/img/footer/gog_down.png" alt="">
      </div>
    </div>  
    <!-- 3L -->
    <div class="footer3">
      <div class="container d-flex justify-content-between">
          <ul>
            <li>法律</li>
            <li>公司重组</li>
            <li>隐私政策</li>
            <li>鸣谢</li>
          </ul> 
          <img src="../../public/img/footer/cd.png" alt="">
          <div class="footer3-hide">GOG Sp.z.o.o.2019.<span>CD PROJEKT</span>集团的一部分</div>
      </div>
     
    </div>

</div>

</template>

<script>
export default {
    data(){
        return {}
    }
}
</script>

<style scoped>
.footer{
   width:100%;
   background: #262626;
   margin-top:30px;
}
.footer1{
      width:100%;
      height:56px;
      background: #262626;
      color:#ddd;
      padding:10px;
    }
.footer1-left span{
  display:inline-block;
  margin-right:20px;
  font-size: 14px;
}

    .footer1-right span{
      margin-right:1rem;
    
    }
    .footer1-left a{
        text-decoration: none;
        color:#ddd
    }
    .footer1-left a:hover{
        color:#fff;
    }
    .footer1-right img{
      height:20px;
    }
    .footer2{
      width: 100%!important;
      padding:20px;
      display: flex;
      justify-content: space-between;
      height:94px;
      background: #2f2f2f;
    }
    .footer2-left{
      display: flex;
    }
    .footer2-left ul{
      list-style: none;
      padding:8px;
      padding-left:10px;
    }
    .footer2-left ul li{
      text-align: left;
      color:rgba(255,255,255,0.8);
      font-size:12px;
      margin-left:15px;
    }
    .footer2-left ul li span{
      margin-left:12px;
    }
    .cny{
      color:#de8ae5;
    }
    .footer2-right{
      width:160px;
    }
   .footer3-hide{
     display: none
    }
    .footer3 ul{
      display: flex;
      list-style: none;
       color:rgba(255,255,255,0.4);
       font-size: 12px;
       padding-left:0px;
       margin-top:20px;
    }
    .footer3 ul li{
      margin-right:1.5rem;
      padding-left:1rem
    }
    .footer3 ul li:hover{
      color:#fff;
      cursor: pointer;
    }
/* @media screen and (min-width:1200px)

@media screen (min-width:768px) and (max-width:992px)

@media screen and (min-width:768px) */

@media only screen and (min-width:768px) and (max-width:992px){
 .container{
   margin:0;
   padding:0
 } 
 .footer1{
   width: 100%;

   text-align: center;
 }
 .footer1-left a{
      font-size:12px;
 }
}
@media screen and (max-width:768px){
  .footer1-left{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap
  }
  .footer1-right{
    display: none
  }
  .footer2-left ul li{
    /* width: 100px; */
    display: flex
  }
  .footer2-left ul li span{
    display: none; 
  }
  .footer2-left ul li span.cny{
    display: block!important
  }
  .footer3 .container{
    align-items:center!important;
    flex-direction: column
  } 
  .footer3 img{
    display: none
  }
  .footer3 ul{
    margin-bottom:6px;
  }
  .footer3-hide{
    display: block;
    font-size:12px;
    color: rgba(255,255,255,0.43);
    margin-bottom: 21px;
  }
  .footer3-hide span{
    color: #fff
  }
}
</style>