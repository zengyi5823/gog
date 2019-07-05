<template>
<div>
    <div class="index_3l_head container">
            <div class="title">
                    <img src="../../public/img/index_4l/title.png" alt="">
                    <span>推荐</span>
            </div>
    </div>
    <!-- 轮播图 -->
    <el-carousel indicator-position="outside" autoplay:false trigger="click" arrow="never" height="480px" interval="5000" >
        <el-carousel-item>
                <div class="container">
                    <div class="page1 row">
                        <div class="page1_left col-sm-6 col-md-5 col-lg-6">
                            <div class="page1_left_top">
                                <img src="../../public/img/index_3l/img1.png" alt="">
                                <div class="soon_buy" :style="{background:color}" v-show="soonToBuy">
                                    <span>{{change}}</span>
                                </div>
                            </div>
                            
                            <div class="page1_left_bottom">
                                <div class="page1_left_bottom_title">{{page1LeftBottomTitle}}</div>
                                <div class="page1_left_bottom_content">
                                    <div>
                                        <img  src="../../public/img/index_3l/windows.png" alt="">
                                    </div>
                                    <div class="page1_left_pricebox">
                                        <div class="page1_left_price">{{page1LeftPrice}}</div>
                                        <!-- 加入购物车图标 -->
                                        <div class="hide_car" @click="buy">
                                            <img src="../../public/img/index_3l/caricon.png" alt="">
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                        <div class="page1_right col-sm-6 col-md-7 col-lg-6">
                            <ul class="page1_right_ul">
                                <card v-for="(item,index) in 2" :key="index" class="cardone">{{item}}</card>
                            </ul>
                            <ul class="page1_right_ul">
                                <card v-for="(item,index) in 2" :key="index" class="cardone">{{item}}</card>
                            </ul>
                        </div>
                    </div>
                 </div>
        </el-carousel-item >
            
        <!-- 后面3个 -->
         <el-carousel-item v-for="(item,index) in 3" :key="index">
            <div class="container">
                <div class="page2">
                    <div class="page2_content">
                            <ul class="page2_ul">
                                    <card v-for="(item,index) in 4" :key="index" class="cardone">{{item}}</card>
                            </ul>
                            <ul class="page2_ul">
                                    <card v-for="(item,index) in 4" :key="index" class="cardone">{{item}}</card>
                            </ul>
                    </div>
                </div>
            </div>
        </el-carousel-item >
        
    </el-carousel>
</div>


</template>
<script>

export default {
    data() {
        return {
            soonToBuy:true,
            page1LeftBottomTitle:"Cyberpunk 2077",
            page1LeftPrice:"￥298",
            change:"即将推出",
            color:""
        }
    },
    methods: {
        buy(){
            this.change="在购物车中"
            this.color="#80b02a"
        }
       
    },
}
</script>
<style scoped>

.index_3l_head{
    border-bottom: 1px solid #bfbfbf;
    height: 32px;
    font-weight: bold;
    margin-top:30px;
    margin-bottom: 20px;
    
}
.index_3l_head div{
    float: left;
}
     /* 第二三四页 */
    .page2{
        background:transparent;
        width:100%;height: 450px;
        /* padding-left:15%;
        padding-right:15%; */
    }
    .page2_content{
        display: flex;
        flex-direction: column
    }
    .page2_content .page2_ul{
        display: flex;
        justify-content: space-between;
        padding:0;
        margin-left:-10px
    }
    .page1{
        display: flex;
        justify-content: space-between;
        width:100%;
        margin:0 auto;  
        background:transparent;
         /* padding-left:15%;
        padding-right:15%; */
    }
    
    .page1_left{
        background: hsla(0,0%,98%,.6);
        box-shadow: 0 1px 4px 0 rgba(0,0,0,.15);
        font-size: 12px;
        /* height:100%; */
        overflow: hidden;
        margin-bottom: 15px;
    }
    .page1_left:hover .hide_car{
        display: block
    }
    .page1_left img{
        width: 100%;height: 100%;
    }
    .page1_left_top{
        position: relative;
       
    }
    .page1_left .soon_buy{
        position: absolute;
        bottom:1px;left: 0;
        width:110px;
        height: 24px;
        line-height: 24px;
        color:#fff;
        background:#094a77;
        border: 2.5px;
        font-weight: bold
    }
    .page1_left_bottom{
        /* height:40px; */
        padding:10px;
        overflow: hidden;
        padding-bottom:0;
    }
    .page1_left_bottom_content{
        
        padding-left:16px;
        padding-right:16px;
        display: flex;
        justify-content: space-between;
        padding-top:10px;
        /* padding-bottom:10px; */
        text-align: center

       
    }
    .page1_left_bottom_content img{
        width: 13px;
        height: 13px;
     
        text-align: start
    }
      
    .page1_left_bottom_title{
        /* margin-top:10px; */
        text-align: left;
        margin-left:15px;
    }
    .page1_left_pricebox{
        display: flex
    }
    .page1_left_price{
        font-size: 16px;
        color:#404040;
        font-weight: bold; 
    }
    .hide_car{
        margin-left:10px;
        width:30px;height:30px;
        background: linear-gradient(-180deg,#c1ec51,#80b02a);
        border-radius:2.5px;
        display: none
     }     
    .hide_car img{
        width:30px;height:30px;
    }
    .page1_right_ul{
        display: flex;
        margin-bottom:3%;
        padding-left:0;
    }
    .cardone{
        margin-left:25px;
        width: 50%
    }
    /* 媒体查询 */
@media (min-width: 576px) and (max-width: 768px){
   
    .container{
        padding: 0
    }
    .el-carousel__container,.el-carousel{
       
        width:100%;
    }
    .page2_content,.page2{
        width:100%;
    }
    .cardone{
        margin-left:10px;
        width:180px;
    }
    .cardone .card_bottom_content_img img{
        width: 0
    }
    .page2_ul .cardone:last-child{
        display: none
    }
    .page2_ul{
        margin-left:-10px
    }
    .container{
        padding:4%;
    }
    .page1_left{
        margin-top:10px
    }
    
    .page1_right_ul .cardone:last-child{
         display: none
    }
}
@media (max-width:576px){
    .el-carousel__container,.el-carousel{
        width:100%;
    }
    .el-carousel__container{
        
    }
    .page2_content,.page2{
        width:100%;
        
    }
   
    .cardone{
        margin-left:10px;
        /* width:180px; */
    }
    .page2_ul{
        flex-wrap: wrap
    }
    .page2_ul:last-child{
        display: none
    }
    .page1_left{
        display: none
    }
}
</style>
