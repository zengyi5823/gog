<template>
    <div class="galaxy">
        我们是GOG.COM，一个拥有
        
            
        <div class="move" @mousemove="show1()" @mouseout="show2()">
            <router-link to="" class="omnibus">
                精选集
                <!-- 隐藏栏 -->
                <div class="hidebox" v-show="isShow">
                        <div class="hide" >
                            <img src="../../public/img/galaxy/hide1.png" alt="">
                            <div class="hide_title">一个精选集</div>
                            <div class="hide_content">所有游戏都是精心挑选的，从现代超级开发者打造的大作到你小时候曾玩过的经典
                            </div>
                            <div class="hide_Triangle">
                            </div> 
                        </div>
                </div>  
            </router-link> 
        </div>   
        和
        <div class="move" @mousemove="show3()" @mouseout="show4()">
            <router-link to="" class="drm">DRM-free
                <!-- 隐藏栏 -->
                <div class="hideboxDrm" v-show="isShow1">
                        <div class="hide" >
                            <img src="../../public/img/galaxy/hide1.png" alt="">
                            <div class="hide_title">一个jj集</div>
                            <div class="hide_content">所有游戏都是精心挑选的，从现代超级开发者打造的大作到你小时候曾玩过的经典
                            </div>
                            <div class="hide_Triangle">
                            </div> 
                        </div>
                </div>  
            </router-link>
        </div>
        的游戏基地。这里 
        <div class="move" @mousemove="show5()" @mouseout="show6()">
             <router-link to="" class="forPlayer">为玩家打造，
                 <!-- 隐藏栏 -->
                <div class="hideboxPlayer" v-show="isShow2">
                        <div class="hide" >
                            <img src="../../public/img/galaxy/hide1.png" alt="">
                            <div class="hide_title">一个BB集</div>
                            <div class="hide_content">所有游戏都是精心挑选的，从现代超级开发者打造的大作到你小时候曾玩过的经典
                            </div>
                            <div class="hide_Triangle">
                            </div> 
                        </div>
                </div>  
             </router-link>
        </div>
        请把这里当自己家吧！
        <div class="move" @mousemove="show7()" @mouseout="show8()">
            <router-link to="" class="galaxy_right">
                <img src="../../public/img/galaxy/littlelogo.png" alt=""> <span class="bootWord1">新的GOG GALAXY 2.0</span>
                 <!-- 隐藏栏 -->
                <div class="hideboxHome" v-show="isShow3">
                        <div class="hide" >
                            <img src="../../public/img/galaxy/hide1.png" alt="">
                            <div class="hide_title">一个jj集</div>
                            <div class="hide_content">所有游戏都是精心挑选的，从现代超级开发者打造的大作到你小时候曾玩过的经典
                            </div>
                            <div class="hide_Triangle">
                            </div> 
                        </div>
                </div>  
            </router-link>
        </div>
       
    </div>
</template>
<script>
export default {
    data(){
        return{
            isShow:false,
            isShow1:false,
            isShow2:false,
            isShow3:false
        }
    },
    methods: {
       show1(){
           this.isShow=true
       },
       show2(){
           this.isShow=false
       },
       show3(){
           this.isShow1=true
       },
       show4(){
           this.isShow1=false
       },
       show5(){
           this.isShow2=true
       },
       show6(){
           this.isShow2=false
       },
       show7(){
           this.isShow3=true
       },
       show8(){
           this.isShow3=false
       }

    },
}
</script>
<style scpoed>
    .galaxy{
        box-shadow: 0 -1px 0 0 rgba(64,64,64,.4), 0 1px 0 0 rgba(64,64,64,.4);
        background-color: transparent;
        font-size: 14px;
        padding: 10px 16px;
        margin-top:50px;
        margin-bottom:50px
    }
    .galaxy a{
        text-decoration: none;
        color:#86328A;
        font-weight: bold;
   
        
    }
    .galaxy_right{
        margin-left: 60px;
        border-top: none;
        border-left: 1px solid rgba(64,64,64,.4);
        padding-left: 44px;
    }
     .galaxy a img{
        width: 26px;
       
    }
    .galaxy_right img{
        margin-right:8px;
         width:20px!important;
    }
   
    .omnibus,.drm,.forPlayer,.galaxy_right{
        position: relative;
        z-index: 10
    }
    /*隐藏栏 */
    .hidebox{
        position: absolute;
        bottom:160%;right:-320%;
        z-index: 20;
        background: #f8f9fa;
        border-radius: 2.5px;
    }
    .hideboxDrm{
        position: absolute;
        bottom:160%;right:-200%;
        z-index: 20;
        background: #f8f9fa;
        border-radius: 2.5px;
    }
    .hideboxPlayer{
        position: absolute;
        bottom:160%;right:-120%;
        z-index: 20;
        background: #f8f9fa;
        border-radius: 2.5px;
    }
    .hideboxHome{
        position: absolute;
        bottom:160%;right:-30%;
        z-index: 20;
        background: #f8f9fa;
        border-radius: 2.5px;
    }
    .hide{
        width: 300px;
        border: 1px solid #e9e9e9;
        padding: 5px;
        padding-top: 25px;
        box-shadow: 0 1px 1px 0 rgba(0,0,0,.3);
        text-align: center;
        position: relative;
    }
    .hide_Triangle{
        width: 0;
        border: 10px solid #e9e9e9;
        border-bottom-color:transparent ;
        border-left-color: transparent;
        border-right-color: transparent;
        position: absolute;
        bottom:-20px;
        left:45%;
        
    }
    .hide_content{
        font-size: 14px;
        color:black;
        font-weight: normal
        
    }
    .hide .hide_title{
        color: #86328a;
        font-weight: 700; 
    }
    .move{
        display: inline-block
    }
    /*媒体查询  */
@media (min-width: 577px) and (max-width: 768px){
    .bootWord1{
        text-align: center
    }
    .galaxy_right{
        border-left:0;
         padding-left:0
    }
}
@media (max-width: 576px){
    .galaxy_right{
        border-left:0;
        padding-left:0
    }
    .galaxy_right img{
        margin-left:0px;
        }
}
@media (max-width:426px) {
    .galaxy_right{
        margin-left:0;
        margin-top:20px;

    }
}
</style>