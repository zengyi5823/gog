<template>


    <div class="index_5l_box">

        <div class="container d-flex justify-content-between ">  
            <!-- 左边 -->
            <div class="leftbox md-col-8">
                     
                <!-- 头部 -->
                <div class="index_5l_head">
                    <div class="title">
                        <img src="../../public/img/index_4l/title.png" alt="">
                        <span>发现游戏</span>
                    </div>
                    <ul>
                        <li @click="head1ToBody1()"><a class="head1" >近期热门</a></li>
                        <li @click="head1ToBody2()"><a class="head2" >新品</a></li>
                        <li @click="head1ToBody3()"><a class="head3">即将推出</a></li>
                    </ul>
                </div>
                <!-- 内容 -->
                <div class="index_5l_body">
                    <div class="body1" :style="{display:isShow1}">
                        <ul>
                            <li>
                                <card2 ></card2>
                            </li>
                            <li v-for="(item,index) in 9" :key="index">
                                <card2_1></card2_1>
                            </li>
                        </ul>
                            
                        
                    </div>
                


                    <div class="body2" :style="{display:isShow2}">
                        <ul>
                            <li v-for="(item,index) in 10" :key="index">
                                <card2_1></card2_1>
                            </li>
                        </ul>
                    </div>


                    <div class="body3" :style="{display:isShow3}">
                        <ul>
                            
                            <li v-for="(item,index) in 10" :key="index">
                                <card2></card2>
                            </li>
                        </ul>
                    </div>
                
                </div>
                <div class="more">显示更多
                    <span>{{jiantou}}</span>
                </div>
            </div>  
      
           
            <!-- 右边精选和推荐 -->
            <div class="rightbox md-col-4">
                <!-- 头部 -->
                <div class="index_5l_head">
                    <div class="title">
                        <img src="../../public/img/index_4l/title.png" alt="">
                        <span>精选和推荐</span>
                    </div>       
                </div>
                <!-- 内容 -->
                <div class="right_content">
                    <div class="right_content_img1">
                        <img src="../../public/img/index_5l/p1.png" alt="">
                    </div>

                    <div class="right_content_img23_4">
                        <div class="right_content_img23">
                            <div>
                                <img src="../../public/img/index_5l/p2.png" alt="">
                            </div>
                            <div>
                                <img src="../../public/img/index_5l/p3.png" alt="">
                            </div>
                        </div>
                        <div class="right_content_img4">
                             <img src="../../public/img/index_5l/p4.png" alt="">
                        </div>
                    </div>

                    <div class="right_content_img56 d-flex">
                        <div>
                            <img src="../../public/img/index_5l/p5.png" alt="">
                        </div>
                        <div>
                            <img src="../../public/img/index_5l/p6.png" alt="">
                        </div>
                    </div>
                </div>
            </div>

        </div> 
        
    </div>

</template>

<script>
import Card2 from '../components/Card2.vue' //引入子组件
import Card2_1 from '../components/Card2_1.vue'
export default {
    data(){
        return{
          isShow1:"block",
          isShow2:"none",
          isShow3:"none",
          jiantou:">"
        
        }
    },
    components:{  //配置子组件
        "Card2":Card2,
        "Card2_1":Card2_1
       
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
        }
   
    }
}
</script>
<style scoped>
.more{
    width: 200px;
    height:40px;
    line-height: 40px;
    margin: 0 auto;
    border: 1px solid #bfbfbf;
    border-radius: 3px;
    font-weight: bold;
    color:#404040;
    margin-top:10px;
    cursor: pointer;
    background: transparent;
    transition: all 0.5s linear
}
.more:hover{
    /* background: red!important */
    background-color: hsla(0,0%,100%,.15);
}
.more span{
    float:right;
    margin-right:10px;
}
.leftbox{
    display: flex;
    flex-direction: column;
    width:100%;
    margin-right:50px;
}

    .index_5l_head{
        display: flex;
        position: relative;
        margin: 32px 0 16px;
        border-bottom: 1px solid #bfbfbf;
        height: 32px;
        z-index: 50;
        font-weight: 600
    }
    .index_5l_head ul{
        list-style:none;
        display: flex;
        position: absolute;
        right:0;
        font-size: 16px;
        margin-left:24px;
        padding: 0
    }
    .index_5l_head ul li{
    margin-left:24px;
    
    }
    .index_5l_head ul li:hover{
        margin-bottom:-10px;
        border-bottom:3px solid #86328A;
       
    }

    .index_5l_head ul li a{
        text-decoration: none;
        color:#595959;
        font-weight: bold;
        cursor: pointer;
    }
    .index_5l_head ul li a:hover{
        color:#86328A;
    
    }
    /* 内容 */
    .index_5l_body ul{
        list-style: none;
        margin:0;padding: 0
    }
    /* 右边 */
    .right_content_img23_4{
        display: flex;
        /* overflow:hidden; */
     
    }
    .right_content_img23_4,.right_content_img1,.right_content_img56{
        margin-bottom: 2px;
    }
    .right_content_img23{
        margin-right:2px;
    }
    .right_content_img23 div:last-child{
        margin-top:2px
    }
    .right_content_img56 div{
        margin-right:3px;
    }
    .right_content img{
        cursor: pointer;
    }
    .right_content_img1,.right_content_img23 div,.right_content_img4,.right_content_img56 div{
        opacity: 1;
        transition: all 0.25s linear
    }
    .right_content_img1:hover,.right_content_img23 div:hover,.right_content_img4:hover,.right_content_img56 div:hover{
       opacity:0.8;
     
    }
   /* 媒体查询 */
@media (min-width:768px) and (max-width: 1200px){
    .container{
        margin:0
    }
    .index_5l_head ul{
        list-style:none;
        display: flex;
        position: absolute;
        right:0;
        font-size:14px;
        margin-left:24px;
        padding: 0
    }
    .index_5l_head ul li{
    /* margin-left:24px; */
    
    }
    .index_5l_head ul li:hover{
        margin-bottom:-10px;
        border-bottom:3px solid #86328A;
       
    }

    .index_5l_head ul li a{
        text-decoration: none;
        color:#595959;
        font-weight: bold;
        cursor: pointer;
    }
    .index_5l_head ul li a:hover{
        color:#86328A;
    
    }  
@media (max-width:576px){
    .right_content{
        /* width:60%; */
        margin-left:-10px;
        padding-right:2px;
    }
}
}
</style>