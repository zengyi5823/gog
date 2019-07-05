<template>
<div>

    <div class="index_4l_box">
        <div class="container">
            
            <!-- 头部 -->
            <div class="index_4l_head">
                <div class="title">
                    <img src="../../public/img/index_4l/title.png" alt="">
                    <span>全新促销</span>
                </div>
                <ul>
                    <li @click="head1ToBody1()"><a class="head1" >特色优惠</a></li>
                    <li @click="head1ToBody2()"><a class="head2" >每周特价</a></li>
                    <!-- <li @click="head1ToBody3()"><a class="head3">The Witcher</a></li> -->
                    <li @click="head1ToBody4()"><a class="head4">周末特价</a></li>
                </ul>
            </div>
            <!-- 内容 -->
            <div class="index_4l_body">
                <div class="body1" :style="{display:isShow1}">
                    <div>
                        <div class="Card1_box">
                                <Card1 class="Card1_1"></Card1>
                                <Card1 ></Card1>
                        </div>
                        <div class="Card1_Bigbox">
                            <div class="Card_box">
                                <Card class="Card_1"></Card>
                                <Card></Card>
                            </div>
                            <div class="Card_box">
                                <Card class="Card_1"></Card>
                                <Card></Card>
                            </div>
                        </div>
                    </div>
                </div>
            


                <div class="body2" :style="{display:isShow2}">
                    <div>
                        <div class="Card2_box">
                                <Card class="Card_2"></Card>
                                <Card class="Card_2c"></Card>
                        </div>
                        <div class="Card2_2_box">
                                <Card1 class="Card2_2"></Card1>     
                        </div>
                        <div class="Card2_box">
                                <Card class="Card_2"></Card>
                                <Card class="Card_2c"></Card>
                        </div>
                        <div class="Card2_box">
                                <Card class="Card_2"></Card>
                                <Card class="Card_2c"></Card>
                        </div>
                    </div>
                </div>
                
                <div class="body4" :style="{display:isShow4}">
                    <div>
                        <div class="Card2_box">
                                <Card class="Card_2"></Card>
                                <Card class="Card_2c"></Card>
                        </div>
                        
                        <div class="Card2_box">
                                <Card class="Card_2"></Card>
                                <Card class="Card_2c"></Card>
                        </div>
                        <div class="Card2_2_box">
                                <Card1 class="Card2_2"></Card1>     
                        </div>
                        <div class="Card2_box">
                                <Card class="Card_2"></Card>
                                <Card class="Card_2c"></Card>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import Card1 from '../components/Card1.vue' //引入子组件
import Card from '../components/Card.vue' //引入子组件
export default {
    data(){
        return{
          isShow1:"block",
          isShow2:"none",
          isShow3:"none",
          isShow4:"none"
        }
    },
    components:{  //配置子组件
        "Card1":Card1,
        "Card":Card
    },
    methods:{
        head1ToBody1(){
           this.isShow1="block"
           this.isShow2="none"
           this.isShow3="none"
           this.isShow4="none"
        },
        head1ToBody2(){
           this.isShow2="block"
           this.isShow1="none"
           this.isShow3="none"
           this.isShow4="none"
        },
         head1ToBody3(){
           this.isShow3="block"
           this.isShow1="none"
           this.isShow2="none"
           this.isShow4="none"
        },
         head1ToBody4(){
           this.isShow4="block"
           this.isShow1="none"
           this.isShow2="none"
           this.isShow3="none"
        }
    }
}
</script>
<style scoped>
.container{
    display: flex;
    flex-direction: column
}
/* 选项卡1 */
.Card1_box{
    display: flex
}
.Card1_box .Card1_1{

    margin-right:10%
}
.Card1_Bigbox {
    margin-left:2%
}
.Card1_Bigbox .Card_box{
    width:100%;
}
.Card1_Bigbox .Card_box:first-child{
    margin-bottom:7%;
  
}
.Card1_Bigbox .Card_box{
    display: flex;
    margin-left: 5%;
    width:100%
    
}
.Card_box .Card_1{
    margin-right: 8%;
}
/* 选项卡2 */
.Card2_box{
    width:100%;
}
.Card2_box .Card_2{
    margin-bottom:10px;
    
}
.body2 div div,.body4 div div{
    margin-right:8px
}


.Card2_2_box{
    width:100%;height:100%;
    
}

/* 头部 */
.index_4l_head{
    display: flex;
    position: relative;
    margin: 32px 0 16px;
    border-bottom: 1px solid #bfbfbf;
    height: 32px;
    /* z-index: 50; */
    
}
.index_4l_head .title{
    font-weight: bold
}
.index_4l_head ul{
    list-style:none;
    display: flex;
    font-size: 16px;
    margin-left:24px;
    padding: 0
    
}
.index_4l_head ul li{
    margin-left:24px;
    
}
.index_4l_head ul li:hover{
    margin-bottom:-18px;
    border-bottom:3px solid #86328A;
}

.index_4l_head ul li a{
    text-decoration: none;
    color:#595959;
    font-weight: bold;
    cursor: pointer;
}
.index_4l_head ul li a:hover{
    color:#86328A;
   
}
 .index_4l_body{
      margin-top:-70px;
      margin-bottom: 20px;
    }

/* 内容 */

.body1,.body2,.body3,.body4{ 
    /* position: absolute; */
    /* top:64px; */
 
}
.body1>div,.body2>div,.body3>div,.body4>div{
    display: flex!important;
  
    margin-top:80px;
   
}
.active{
    display: block
}

/* 媒体查询 */
@media (min-width:768px) and (max-width: 1200px){
    .body1 div{
        width: 98%
    }
    .Card1_box>div{
        width: 98%;
        background-size:auto auto;
        min-height:200px ;
    }
   
    .Card1_1{
        width:98%
    }
    .Card1_Bigbox{
        width: 98%
    }
    /* 选项卡2 */
    .body2 div,.body4 div{
        width: 98%
    }
    .Card1_box>div{
        width: 98%;
        background-size:auto auto;
        min-height:200px ;
    }
   
    .index_4l_body .Card2_2{
        width: 98%;height:50%;
        max-height:300px!important;
        background-size:auto auto;
    }
    .body2,.body4{
        max-height:480px ;
        min-height:400px ;
     
    

    }
    .Card2_2_box {
        max-height:370px ;
         min-height:365px;
         overflow:hidden!important;
     }
    .Card2_box .Card_2{
        margin-bottom:8%;
    }
  
}   
@media (min-width: 576px) and (max-width: 768px){
    .Card1_Bigbox{
        display: none
    }
    .Card1_box{
        /* margin:0; */
         margin-left:10px;
         
    }
    .Card1_box .Card1_1{
       margin-right:20px; 
    }
    .Card2_2_box{
     display: none   
    }
    .body2,.body4{
        left:0;
        padding-left:10px;
        padding-right:10px;
    }
}
@media (max-width:576px){
    .Card1_Bigbox{
        display: none
    }
     .Card1_box{
         margin-left:10px;
         padding-left:10px;
         
         flex-direction: column;
        width:100%;
       
    }
    .Card1_box>div{
        background-size:auto auto;
        max-height:100px ;
        margin-left:0px;
    }
     .Card1_box .Card1_1{
       margin-right:10px; 
       margin-bottom: 20px;
    }
    .index_4l_head ul li a{
        font-size:0.9rem;
    }
    .Card2_2_box{
     display: none   
    }
    .body2,.body4{
        left:0;
        padding-left:0px;
        padding-right:5px;
    }
    .Card_2,.Card_2c{
        width: 175px;
        margin-bottom:15%!important
    }
}
</style>
