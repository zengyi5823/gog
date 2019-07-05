<template>
<div>
    <div class="index_1l_head container">
            <div class="title">
                    <img src="../../public/img/index_4l/title.png" alt="">
                    <span>焦点</span>
            </div>
    </div>

    <div>
        <el-carousel :interval="6000" type="card" height="450px">
            <el-carousel-item v-for="(item,index) in list" :key="index">

                <img  :src="list[index].url" alt="">

            </el-carousel-item>
        </el-carousel>
        <!-- <img src="../../public/img/index_carousel/carousel1.png" alt=""> -->
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            // list:[require("../../public/img/index_carousel/carousel1.png"),require("../../public/img/index_carousel/carousel2.png"),require("../../public/img/index_carousel/carousel3.png"),require("../../public/img/index_carousel/carousel4.png"),require("../../public/img/index_carousel/carousel5.png")],
            // list:["carousel1.png","carousel2.png","carousel3.png","carousel4.png","carousel5.png"],
            list:[
                { url:require("../../public/img/index_carousel/carousel1.png")},
                { url:require("../../public/img/index_carousel/carousel2.png")},
                { url:require("../../public/img/index_carousel/carousel3.png")},
                { url:require("../../public/img/index_carousel/carousel4.png")},
                { url:require("../../public/img/index_carousel/carousel5.png")},
              ]
            
        }
    },
    
    
    methods: {
        
    
    },
}
</script>
<style scoped>
.index_1l_head{
    border-bottom: 1px solid #bfbfbf;
    height: 32px;
    font-weight: bold;
    margin-top:30px;
    margin-bottom: 20px;
}
.index_1l_head div{
    float: left;
}
</style>