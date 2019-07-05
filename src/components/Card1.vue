<template>
    <div class="card1_box">
        <div class="card1_box_top">每周特价</div>
        <div class="card1_box_middle">
            <div>多至</div>
            <div>-80%</div>
        </div>
        <div class="card1_box_bottom">
            <router-link to="">查看折扣</router-link>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style scoped>
.card1_box{
     background-image: url("../../public/img/card1/card1.jpg");
     background-repeat:no-repeat;
     background-size:100% 100%;
     width:256px;min-height:425px;
     cursor: pointer;
     box-shadow: rgba(61, 32, 54, 0.75) 0px 0px 0px 1000px inset;
     transition: all 0.2s linear
   
 }
.card1_box:hover{
    opacity: 0.85;
}
.card1_box_top{
    margin: auto 20%;
    padding-top:20%;
    padding-bottom:20%;
    font-size: 1.4rem;
    line-height: 30px;
    color:#fff;
    font-weight: bold;
    
}
.card1_box_middle{
    color: #ffec00;
    font-size: 1.1rem;
    font-weight: bold;
}
.card1_box_middle div:first-child{
   margin-bottom: -20px
}
.card1_box_middle div:last-child{
    font-size: 64px;
}
.card1_box_bottom{
    margin-top:30%!important;
    margin-bottom: 24px;
    width:50%;height:8%;
    border: 1px solid #fff;
    border-radius: 4px;
    margin:0 auto;
    padding: 4px 16px;
    background: hsla(0,0%,100%,.16);
    font-weight: bold
}
.card1_box_bottom:hover{
    background-color: hsla(0,0%,100%,.25);
}
.card1_box_bottom a{
    font-size:0.7rem;
    color: #fff;
    text-decoration: none
}





</style>

