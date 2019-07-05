<template>
    <div class="card3box">
        <div class="card3box_bg">
            <div class="card3box_bg_contente_title">111111111111111111111111111111111111111111111111111111111</div>
            <div class="card3box_bg_contente_subtitle">
                <span>0</span>
                <span>2019/1/30</span>
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
.card3box{
    width:256px;
    height:264px;
    cursor: pointer;
    transition: all 0.25s linear
}
.card3box:hover{
    opacity: 0.85;
}
.card3box_bg{
    width:100%;
    height:100%;
    background-image:url("../../public/img/index_6l/pic2.jpg");
    padding: 0 16px 12px;
    display: flex;
    flex-direction: column;
    justify-content:flex-end
    
}
.card3box_bg_contente_title{
    
    margin-bottom: 18px;
    font-size: 20px;
    line-height: 20px;
    color:#fff;
    text-align: left;
    font-weight: 600;
    word-wrap: break-word;word-break: break-all;overflow: hidden;
    
}
.card3box_bg_contente_subtitle{
    font-size: 12px;
    color:#fff;
    
}
.card3box_bg_contente_subtitle span{
  
}
.card3box_bg_contente_subtitle span:first-child{
    float:left
}
.card3box_bg_contente_subtitle span:last-child{
    float:right
}
@media (min-width: 576px) and (max-width: 768px) {
.card3box_bg{
    width:256px;
    height:264px;}
}
</style>
