<template>
    <div class="indexpage">
        <my-header class="header"></my-header>
        <Index_carousel></Index_carousel>
        <Index_2l></Index_2l>
        <Galaxy></Galaxy>
        <Index_3l></Index_3l>
        <Index_4l></Index_4l>
        <Index_5l></Index_5l>
        <Index_6l></Index_6l>
        <my-footer></my-footer>
    </div>
    
</template>


<script>
import Index_carousel from './Index_carousel.vue'
import Index_2l from './Index_2l.vue'
import Galaxy from "./Galaxy.vue"
import Index_3l from './Index_3l.vue'
import Index_4l from './Index_4l.vue'
import Index_5l from './Index_5l.vue'
import Index_6l from './Index_6l.vue'
export default {
    data(){
        return {}
    },
    components:{  //配置子组件
        "Index_carousel":Index_carousel,
        "Index_2l":Index_2l,
        "Galaxy":Galaxy,
        "Index_3l":Index_3l,
        "Index_4l":Index_4l,
        "Index_5l":Index_5l,
        "Index_6l":Index_6l
       
    },
    // important传递数据，生命周期
    created() {
        this.axios.get("http://localhost:3000/index").then(function(result){
            console.log(result.data)
        })
    },
}
</script>


<style scoped>
    .indexpage{
        position: relative;
    }
    .header{
        position: fixed;
        top:0

    }
</style>