<template>
<div class="details">
    <my-header class="header"></my-header>
    <!-- 顶部背景 -->
    <div class="bg">
        <div class="logo container" style="{height:imgHeight+'px'}">
            <img src="../../public/img/details/logo.png" alt="">
        </div>
    </div>
    <!-- 标题-->
    <div class="titlebox container">
        <h1>Cyberpunk 2077</h1>
        <div>
            <span> | </span>
            <span>中文(简体), English & 16 更多</span>
        </div>
        <div class="titlebox_right">
            <div class="titlebox_right_title">开放下载日期：2020年4月16日</div>
            <div class="titlebox_right_price">￥298</div>
            <div class="buttonbox">
                <button class="cart_botton">立即预购</button>
                <a class="wish_button"><img src="" alt=""> 加入愿望单</a>
            </div>
        </div>
    </div>
    <!-- 轮播图 -->
    <div class="container">
        <el-carousel height="200px" interval=5000 indicator-position="outside" trigger="click"  class="w-100" >
                 <el-carousel-item v-for="(item,index) in 2" :key="index" >
                     <div class="carousel_img_box" >
                        <img class="carousel_img" v-for="(item,index) in 3" :key="index" src="../../public/img/details/car1.jpg" alt="">
                     </div>
                 </el-carousel-item>
        </el-carousel>
    </div>

    <!-- 介绍和why买 -->
    <div class="container">

    
        <div class="row d-flex justify-content-between">
                <!-- 游戏介绍 -->
                <div class="jieshaobox col-sm-7">
                    <div class="jieshao_title"><div>介绍</div></div>
                    <div class="jieshao_content">
                        <img src="../../public/img/details/jieshao1.png" alt="">
                        <hr>
                        <br>
                        <b>《赛博朋克 2077》</b>
                        是一款开放世界游戏，动作冒险的故事发生在夜之城。这是一座五光十色的大都会，权力更迭和身体改造是不变的主题。您扮演一名野心勃勃的雇佣兵：V，正在追寻一种独一无二的植入体。只要得到它，就能掌握获得永生的关键。您可以自定义角色的义体、技能和玩法，探索包罗万象的城市。您做出的选择也将会对剧情和周遭的世界产生影响。
                        <br>
                        <br>    
                        <img src="../../public/img/details/jieshao2.jpg" alt="">  
                        <br>
                        <br>          
                        化身装备机械强化义体的城市雇佣兵，成为一名赛博朋克，在夜之城的街头谱写属于您的传奇。
                        <br>
                        <br>    
                        <img src="../../public/img/details/jieshao3.jpg" alt="">  
                        <br>
                        <br>           
                        进入夜之城的庞大开放世界。在这里，视觉效果、复杂程度和游戏深度都将得到全新的定义。
                        <br>
                        <br>    
                        <img src="../../public/img/details/jieshao4.jpg" alt="">  
                        <br>
                        <br>                
                        接下有生以来最危险的任务，追寻能够带来永生的原型植入体。
    
                        <p class="copyright">     
                        CD PROJEKT®, Cyberpunk®, Cyberpunk 2077® are registered trademarks of CD PROJEKT S.A. © 2019
                        CD PROJEKT S.A. All rights reserved. All other copyrights and trademarks are the property of their
                        respective owners.
                        </p>   
                    </div>
                    <!-- 包含内容 -->
                    <div class="incude">
                        <div class="incude_title">
                            <div>包含内容</div>
                        </div> 
                        <div class="incude_content">
                            <div class="incude_single_svgspan" v-for="(item,index) in 6" :key="index">
                                    <svg t="1562233447984" class="icon" viewBox="0 0 1024 1024"         version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3500" width="16" height="16" data-spm-anchor-id="a313x.7781069.0.i2">
                                <path d="M 870.836 176.985 c 58.959 0 106.758 47.799 106.757 106.757 v 587.372 c 0 58.96 -47.801 106.758 -106.757 106.758 h -710.591 c -58.96 0 -106.758 -47.799 -106.758 -106.758 v -587.372 c 0 -58.96 47.801 -106.757 106.758 -106.757 h 710.591 Z M 160.243 238.592 c -24.937 0 -45.153 20.213 -45.153 45.152 v 587.372 c 0 24.937 20.213 45.153 45.153 45.153 h 710.591 c 24.937 0 45.151 -20.214 45.152 -45.153 v -587.372 c 0 -24.937 -20.213 -45.152 -45.151 -45.152 h -710.591 Z" p-id="3501" fill="#2c2c2c"></path><path d="M 899.311 949.289 h -222.033 c -7.482 0 -13.536 -6.056 -13.536 -13.537 c 0 -7.482 6.055 -13.537 13.536 -13.537 h 222.033 c 21.364 0 33.551 -25.593 33.551 -65.198 v -43.095 c 0 -7.482 6.054 -13.537 13.537 -13.537 c 7.469 0 13.537 6.054 13.537 13.537 v 43.095 c -0.001 56.05 -22.818 92.272 -60.626 92.272 Z" p-id="3502" fill="#2c2c2c"></path><path d="M 940.568 766.141 c -5.526 0 -11.049 -2.138 -15.103 -6.167 c -3.821 -3.844 -6.167 -9.365 -6.167 -15.103 c 0 -5.546 2.346 -11.069 6.167 -14.892 c 8.101 -7.87 22.119 -8.079 30.197 -0.207 c 3.844 4.027 6.171 9.551 6.171 15.099 c 0 5.529 -2.326 11.049 -6.171 15.103 c -4.027 4.027 -9.552 6.167 -15.097 6.167 Z" p-id="3503" fill="#2c2c2c"></path><path d="M 294.156 295.41 c -14.95 0 -27.074 -12.122 -27.074 -27.074 v -175.976 c 0 -14.951 12.122 -27.074 27.074 -27.074 s 27.074 12.122 27.074 27.074 v 175.976 c 0.001 14.952 -12.122 27.074 -27.073 27.074 Z" p-id="3504" fill="#2c2c2c"></path><path d="M 443.059 295.41 c -14.952 0 -27.074 -12.122 -27.074 -27.074 l 0.001 -175.976 c 0 -14.951 12.122 -27.074 27.074 -27.074 c 14.95 0 27.074 12.122 27.074 27.074 v 175.976 c -0.001 14.952 -12.123 27.074 -27.074 27.074 Z" p-id="3505" fill="#2c2c2c"></path><path d="M 591.962 295.41 c -14.952 0 -27.074 -12.122 -27.074 -27.074 v -175.976 c 0 -14.951 12.122 -27.074 27.074 -27.074 c 14.951 0 27.074 12.122 27.074 27.074 v 175.976 c 0 14.952 -12.122 27.074 -27.073 27.074 Z" p-id="3506" fill="#2c2c2c"></path><path d="M 740.865 295.41 c -14.952 0 -27.074 -12.122 -27.074 -27.074 v -175.976 c 0 -14.951 12.122 -27.074 27.074 -27.074 s 27.074 12.122 27.074 27.074 v 175.976 c 0.001 14.952 -12.12 27.074 -27.073 27.074 Z" p-id="3507" fill="#2c2c2c"></path><path d="M 931.458 682.572 v -340.773 c 0 -3.924 3.175 -7.1 7.1 -7.1 s 7.1 3.175 7.1 7.1 v 340.773 c 0 3.916 -3.175 7.1 -7.1 7.1 s -7.1 -3.184 -7.1 -7.099 Z" p-id="3508" fill="#2c2c2c"></path>
                                </svg>
                                <span>Cyberpunk 2020 Sourcebook</span>
                            </div>
                        
                        </div>
                    </div>

                    <!-- 系统要求 -->
                    <div class="system">
                        <dir class="system_title">
                            <div>系统要求</div>
                            <div class="system_window">
                                    <svg t="1562234587800" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4760" width="16" height="16"><path d="M425.138188 490.418472 83.446016 501.001505 83.446016 227.345891 425.138188 177.452551Z" p-id="4761" fill="#86328A"></path><path d="M940.195827 478.322993 470.495212 488.906026 470.495212 168.381965 940.195827 113.952308Z" p-id="4762" fill="#86328A"></path><path d="M426.649612 857.813027 81.934592 824.550459 81.934592 541.823236 426.649612 541.823236Z" p-id="4763" fill="#86328A"></path><path d="M940.698271 910.729214 470.495212 865.371166 470.495212 541.823236 940.698271 541.823236Z" p-id="4764" fill="#86328A"></path></svg>
                            </div>
                        </dir>
                        <div class="system_yaoqiu">
                            最低系统配置要求:
                        </div>
                        <div class="system_yaoqiu">
                            系统: &nbsp;&nbsp;&nbsp;&nbsp; TBC
                        </div>
                    </div>
                </div>
                <!-- <div class="emptybox col-sm-1"></div> -->
                <!-- 为什么买 -->
                <div class="whyplaybox col-sm-5">
                    <div class="jieshao_title whybuy_title">
                        <div > 为什么 要来GOG.com购买？</div>
                        <div class="whybuy_word"><strong>√ DRM FREE.</strong>  无需激活或联网验证即可开始游玩。</div>
                        <div class="whybuy_word"><strong>√ 退款担保。</strong>  购买后30天内有效。</div>
                    </div>
                    <div class="jieshao_title whybuy_title gamedetail">
                        <div>游戏详情</div>
                        <ul>
                            <li v-for="(item,index) in 5" :key="index" class="row">
                                <span class="gamedetail_title col-sm-3">类型：</span>
                                <span class="gamedetail_subtitle col-sm-8">动作 - 角色扮演 - 科幻</span>
                            </li>
                            <hr class="hrline">
                            <li v-for="(item,index) in 3" :key="index" class="row">
                                <span class="gamedetail_title col-sm-3">类型：</span>
                                <span class="gamedetail_subtitle col-sm-8">动作 - 角色扮演 - 科幻</span><span class="col-sm-1">></span>
                            </li>
                            <hr class="hrline">
                            <li v-for="(item,index) in 19" :key="index" class="row">
                                <span class="gamedetail_title col-sm-3">语言：</span>
                                <span class="gamedetail_subtitle col-sm-5">English</span>
                                <span class="gamedetail_subtitle col-sm-2">English</span>
                                <span class="gamedetail_subtitle col-sm-2">English</span>
                            </li>
                        </ul>
                    </div>
                </div>




        </div>
    </div>   
    
</div>
    
</template>


<script>
export default {
    data(){
        return {
            i:0,
            imgHeight:100
        }
    },
    mounted(){
           
            
    },
    methods: {
 
    }
}

</script>


<style scoped>
.details{
    position: relative;
}
    .header{
        position: fixed
    }
    .bg{
        background-image: url("../../public/img/details/bg.jpg");
        width: 100%;
        height:530px;
        overflow: hidden;
         position: relative;
    }
    .bg::after{
        content: "";
        /* height:48%; */
        position: absolute;
        top: 40%;
        bottom:0;
        left: 0;
        right: 0;
        background: linear-gradient(180deg,transparent 0,rgba(0,0,0,.6));
    }
    .logo{
        height:100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end
    }
    .logo img{
        width:480px;height: 285px;
    }
    .titlebox {
        display: flex;
        flex-direction: column;
        margin-top:35px;
        padding-bottom:38px;
        position: relative;
        /* float: left; */
       
    }
    .titlebox h1{
        font-size: 32px;
        font-weight: 600;
        color:#212121;
         text-align: left
    }
    .titlebox{
        font-size: 16px;
        text-align: left
    }
    .titlebox_right{
        position: absolute;
        right:0;
        margin-top:-100px;
        z-index: 50;
        width: 38.68613%;
        min-width: 380px;
        min-height: 161px;
        padding: 24px 20px;
        padding-top: 16px;
        padding-bottom: 10px;
        background-color: #e9e9e9;
        box-shadow: 0 0 6px 0 rgba(0,0,0,.25);
    }
    .titlebox_right_title{
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        padding: 17px 60px 14px 20px;
        width: 100%;
        transform: translateY(-100%);
        background: linear-gradient(-135deg,#e9e9e9,#d4d4d4);
        font-size: 14px;
        line-height: 17px;
        color: rgba(33,33,33,.7);
    }
    .titlebox_right_price{
        font-size: 32px;
        letter-spacing: 0;
        line-height: 32px;
        height: 32px;
        color: #404040;
        font-weight: 600;

    }
    .buttonbox{
        display: flex;
        flex-direction: column;
        
        text-align: center;
    }
    .buttonbox .cart_botton{
        border: 1px solid #96bd27;
        border-bottom-color: #69941b;
        border-left-color: #7fa721;
        border-right-color: #7fa721;
        margin-top: 16px;
        color: #fff;
        background-image: linear-gradient(-180deg,#9fbf00,#80ab00 91%);
        display: block;
        border-radius: 5px;
        padding: 10px;
        width: 100%;
        box-shadow: 0 1px 3px 0 rgba(0,0,0,.25);
        font-weight: 700;
        cursor: pointer;
    }
    .buttonbox .cart_botton:hover{
        background: linear-gradient(180deg,#a7c900,#88b500);
    }
    .buttonbox .wish_button{
        box-shadow: none;
        font-size: 14px;
        padding: 0;
        border: 0;
        outline:0;
        display: block;
        /* border-radius: 5px; */
        padding: 15px;
        width: 100%;
        font-weight:600;
        cursor: pointer;
        
    }
    /* 轮播图 */
    .carousel_img_box{
        display: flex;
        justify-content: space-around
    }
    .carousel_img_box .carousel_img{

    }
    /* 空盒子 */
    
    /* 介绍 */
    .jieshaobox{
        padding-right: 30px;
        padding-left: 0px;
    }
    .jieshao_title{
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        line-height: 19px;
        font-weight: 600;
        width: 100%;
        border-bottom: 1px solid #bfbfbf;
        margin-bottom: 20px;
       
    }
    .jieshao_title>div{
        padding: 16px 0;
        line-height: 12px;
        border-bottom: 1px solid;
        margin-bottom: -1px;
    }
    .jieshao_content{
        margin-top:7px;
        margin-bottom: 50px;
    }
    .copyright{
        margin-top: 2em;
        font-size: 12px;
        line-height: 18px;
        font-weight: 300;
        color:#212121;
    }
    /* 包含内容 */
    .incude_title{
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        line-height: 19px;
        font-weight: 600;
        border-bottom: 1px solid #bfbfbf;
        margin-bottom: 20px;
    }
    .incude_title>div{
        padding: 16px 0;
        line-height: 12px;
        border-bottom: 1px solid;
        margin-bottom: -1px;
    }
    .incude_single_svgspan{
        margin-right:20px;
        margin-bottom: 15px;
    }
    .incude_content{
        display: flex;
        flex-wrap: wrap;
    }
    .incude_content span{
        font-size:13px;
        vertical-align: top;
        margin-left: 3px;
    }
    /* 系统要求 */
    .system{}
    .system .system_title{
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        line-height: 19px;
        font-weight: 600;
        border-bottom: 1px solid #bfbfbf;
        padding-left: 0
    }
    .system .system_title div{
        padding: 16px 0;
        line-height: 12px;
        border-bottom: 1px solid;
        margin-bottom: -1px;

    }
    .system_yaoqiu{
        display: flex;
        line-height: 17px;
        font-size: 14px;
        padding: 16px 0;
        border-bottom: 1px solid #bcbcbc;
        color: rgba(33,33,33,.7);
    }
    /* 大右边 */
    .whyplaybox{
        padding-left: 30px;
        padding-right: 0
    }
    .whyplaybox .whybuy_title{
        flex-direction: column;
        border-bottom:0;
        margin-bottom: 50px;
        text-align: left
    }
 
    .whyplaybox .whybuy_title .whybuy_word{
        border-bottom:0;
        font-size: 14px;
        text-align: left;
        margin-top:5px;
        margin-bottom: 5px;
        padding-bottom: 0;
        font-weight: normal
    }
    .whyplaybox .whybuy_title .whybuy_word:last-child{
        padding-top:0px;
        
    }
    .gamedetail>div{
        margin-bottom: 10px;
    }
    .gamedetail ul{
        list-style: none;
         padding-left: 0;
    }
     .gamedetail ul li{
         font-size: 14px;
         color:#212121;
         font-weight: normal;
        
         padding-top: 7px;
         padding-bottom: 8px;
     }
     .gamedetail ul li span.gamedetail_title{
         color: raga(33,33,33,0.7)
     }
     .hrline{
        background: #bfbfbf;
        border: none;
        height: 1px;
        width: 100%;
        margin-top: 10px;
        margin-bottom: 10px;
     }
</style>