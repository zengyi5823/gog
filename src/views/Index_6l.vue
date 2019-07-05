<template>
    <div class="container">
            <div class="index_6l_head">
                    <div class="title">
                        <img src="../../public/img/index_4l/title.png" alt="">
                        <span>新闻</span>
                    </div>
            </div>
            <!-- 轮播 -->
            <el-carousel indicator-position="outside" autoplay:false trigger="click" arrow="never"  interval="5000">
                 <el-carousel-item>
                     <div class="index_6l_card row">
                          <Card3_1 class="col-md-6"></Card3_1>
                          <Card3 v-for="(item,index) in 2" :key="index" class="col-md-3 smcard1"></Card3>
                     </div>
                    
                 </el-carousel-item>
                    
                 <el-carousel-item v-for="(item,index) in 2" :key="index">
                     <div class="index_6l_card row">
                         <Card3 v-for="(item,index) in 4" :key="index" class="col-md-3 smcard"></Card3>
                     </div>
                     
                 </el-carousel-item>
                
            </el-carousel>
    </div>
</template>
<script>
import Card3 from '../components/Card3'
import Card3_1 from '../components/Card3_1'
export default {
    data(){
        return {

        }
    },
    components:{
        "Card3":Card3,
        "Card3_1":Card3_1
    },
    methods: {
        
    },
}
</script>
<style scoped>
.container{
    display: flex;
    flex-direction: column
}
    .index_6l_head{
        width: 100%;
        margin: 32px 0 16px;
        border-bottom: 1px solid #bfbfbf;
        height: 32px;
        z-index: 50;
        font-weight: 600
    }
    .index_6l_head div{
        float: left;
    }
    .index_6l_card{
        display: flex;
        justify-content: space-around
    }
    /* 媒体查询 */
@media (min-width: 576px) and (max-width: 768px) {
    .index_6l_card{
        flex-wrap: wrap
    }
    .smcard:last-child, .smcard:nth-child(3){
        display: none
    }
    .smcard1{
        display: none
    }
}
@media (max-width: 576px) {
    .smcard1{
        display: none
    }
    .index_6l_card>.smcard:not(:first-child){
         display: none
    }
}
</style>