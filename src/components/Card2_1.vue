<template>
    <div class="card2_box">
        <div class="card2_left">
            <img src="../../public/img/card2/card2_1.png" alt="">
        </div>   
         <div class="card2_right">
            <div>
                <div class="card2_right_1l">Cyberpunk 2077</div>
                <div class="card2_right_2l">
                    <div class="soon_buy" :style="{background:cor,display:isnone}">
                        <span  href="" >{{buybuybuy}}</span>
                    </div>
                    <div class="window">
                        <img src="../../public/img/card2/windows.png" alt="">
                    </div>
                </div>
            </div>
        
            <div class="card2_right_pircebox">
                <span>￥298</span>
                <div class="hide_car" @click="buy">
                    <img src="../../public/img/card2/caricon.png" alt="">
                </div>
            </div>
            
        </div>
       

    </div>
</template>
<script>
export default {
    data(){
        return{
            buybuybuy:"",
            cor:"transparent",
            isnone:"none"
        }
    },
    methods: {
        buy(){
            this.buybuybuy="购物车中"
            this.cor="green"
            this.isnone="block"
        }
    },
}
</script>
<style scoped>

.card2_box{
    display: flex;
    height:92px;
    width:100%;
    border-bottom: 1px solid #ccc;
    padding: 8px 8px;
    margin:0;
    overflow: hidden;
    background: transparent;
    transition: all 0.5 linear
}
.card2_box:hover{
    cursor: pointer;
    background: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,.15);
}
.card2_box:hover .hide_car{
   
    display: block
}
.card2_left{
    margin-right: 15px
}
.card2_left img{
    width:136px;
}
.card2_right{
    width: 100%;
    display: flex;
    justify-content:space-between;
    padding: 15px 15px 15px 0;
}
.card2_right .soon_buy{
    bottom:1px;
    width:80px;
    height: 24px;
    line-height: 24px;
    color:#fff;
    background:#094a77;
    border: 2.5px;
    font-weight: bold;
    font-size: 10px;
    margin-right: 10px;

}
.card2_right_1l{
    font-size:13px;
    margin-bottom: 3px;
    font-weight:600;
}
.card2_right_2l{
    display: flex
}
.card2_right div .window img{
    width: 13px;
    height: 13px;
}
.card2_right_pircebox{
    margin-top:10px;
    display:flex
}
.card2_right_pircebox span{
    font-weight: 600
}
.hide_car{
        margin-left:10px;
        width:20px;height:20px;
        background: linear-gradient(-180deg,#c1ec51,#80b02a);
        /* margin-bottom:30px; */
        border-radius:2.5px;
        display: none;
        padding-bottom:10px;
}
.hide_car img{
       width:18;height:18px;    
}
/* 媒体查询 */
@media (max-width:576px){
    .card2_box{
         font-size: 14px;
    }
    .card2_box .card2_right_1l{
        font-size: 14px;
    }
    .card2_box .window img,.soon_buy{
        display: none!important
    } 
    .card2_right{
        padding-top:5px 
    }
    .card2_right_pircebox{
        margin-top:30px;
    }
}
</style>
