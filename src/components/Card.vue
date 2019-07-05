<template>
    <li class="card">
      <router-link to="">
        <!-- 上部分 -->
        <div class="card_top">
             <img src="../../public/img/card/card1.jpg" alt="">
             <div class="inCar"  v-show="buyToCar">
                 <span>在购物车中</span>
             </div>
        </div>
        <!-- 下部分 -->
        <div class="card_bottom">
            <!-- 下部分的标题 -->
            <div class="card_bottom_title">{{cardTitle}}</div>
            <!-- 下部分的价格栏 -->
            <div class="card_bottom_content">
                <div class="card_bottom_content_img"><img src="../../public/img/card/windows.png" alt=""></div>
               <div class="card_botttom_right">    
                    <div class="card_bottom_content_pricebox">
                        <span class="off">{{discount}}</span>
                        <div class="pricebox">
                            <span class="outline">{{outlinePrice}}</span>
                            <span class="price">{{nowPrice}}</span>
                        </div>
                    </div>
                    <!-- 加入购物车图标 -->
                    <div class="hide_car" @click="buy">
                        <img src="../../public/img/card/caricon.png" alt="">
                    </div>
              </div> 
            </div>
           
        </div>
      </router-link>
    </li>


    
</template>
<script>
export default {
    data(){
        return {
            cardTitle:"Warcraft I & II Bundle",
            winIcon:"",
            //折扣百分比
            discount:"-50%",
            //原价
            outlinePrice:"￥130",
            //现价
            nowPrice:"￥65",
            // 加入购物车出现绿色：已在购物车中
            buyToCar:false
            
        }
    },
    methods: {
        buy(){
            this.buyToCar=true
            // 同时header的购物车里+1，待完成
        }
    },
}
</script>
<style scoped>
    .card{
        /* width: 100%; */
        /* max-width: 256px;
        max-height: 200px; */
        overflow: hidden;
        background: hsla(0,0%,98%,.6);
        box-shadow: 0 1px 4px 0 rgba(0,0,0,.15);
        font-size: 12px;
    }
    .card:hover .hide_car{
        display: block
    }
    .card a{
        text-decoration: none;
        color:#1a1a1a;
    }
    .card_top{
        position: relative;
    }
     .card_top img{
         width: 100%
     }
    /* 在购物车中 */
    .inCar{
        position: absolute;
        bottom:0.5px;left: 0;
        width:110px;
        height: 24px;
        line-height: 24px;
        color:#fff;
        background:#80b02a;
        border: 2.5px;
        font-weight: bold
    }
    .card_bottom_title{
        text-align: left;
        margin-left:16px;
        margin-top:10px;
        margin-bottom: 5px;
    }
    .card_bottom_content{
        display: flex;
        justify-content: space-between;
        height:100%;
        padding:20px;
        padding-top:0;
        /* padding-top:15px; */
    }
    .card_bottom_content_img img{
        width: 13px;
        height: 13px;
        margin-top:10px;
        /* margin-left:-10px */
    }
    .card_botttom_right{
        display: flex
    }
    /* 购物车标记 */
    .card_botttom_right .hide_car{
        margin-left:10px;
        width:30px;height:30px;
        background: linear-gradient(-180deg,#c1ec51,#80b02a);
        margin-top:3px;
        border-radius:2.5px;
        display: none
    }
    .card_bottom_content_pricebox{
        display: flex;
        /* justify-content: space-between; */
        /* margin-left:-50px; */
    }
    .off{
        color: #fff;
        width:53px;height:30px;
        font-size: 16px;
        background: #78387b;
        margin: 0px 8px 0px 0px;
        font-weight: bold;
        line-height: 30px;
        border-radius:2.5px;
        margin-top:3px;
    }
    .pricebox{
        display: flex;
        flex-direction: column;

    }
    .pricebox .outline{
        font-size: 12px;
        color:#999999;
        text-decoration: line-through;
        margin:0;padding: 0
    }
    .pricebox .price{
        font-size: 16px;
        color:#404040;
        font-weight: bold;
        margin-top:-5px;
    }
  
    .hide_car img{
       width:320;height:30px;
        
    }
@media (min-width: 576px) and (max-width: 768px){
    .card_bottom_content_img{
        display: none
    }
}
</style>