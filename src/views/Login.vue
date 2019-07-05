<template>
<div class="log_box">
    <div class="log">
        <div class="log_title">
            <img src="../../public/img/login/loginlogo.png" alt="">
            登录</div>
        <ul class="log_ul">
            <li>
                <el-input v-model="unameInput" :placeholder="unamePlaceholderText"></el-input>
                 <span class="logInputSpan">{{logUnameSpan}}</span>
            </li>
            <li>
                <el-input :placeholder="upwdPlaceholderText" v-model="upwdInput" show-password></el-input>
                 <span class="logInputSpan">{{logUpwdSpan}}</span>
            </li>
        </ul>
        <!-- 切换按钮 -->
        <button class="btn_log" @click="btnLog">现在登录</button>
        <div class="log_line"><span>或者</span></div>
        <button class="btn_facebook">继续使用FACEBOOK</button>  
    </div>
    <div class="log_footer">
            <router-link to="">{{upwdRepeatText}}</router-link>
            <router-link to="/reg">{{jumpText}}</router-link>
           
    </div>
</div>
</template>
<script>
export default {
    data(){
        return {
            // 用户输入值
            unameInput:"",
            upwdInput:'',
            //输入框的默认提示
            unamePlaceholderText:"用户名",
            upwdPlaceholderText:"密码",
            //跳转按钮的内容文本
            jumpText:"立即注册",
            upwdRepeatText:"密码重置",
            //提示内容
            logUnameSpan:"",
            logUpwdSpan:''

        }
    },
    methods: {
       btnLog(){
           if(!this.unameInput){
               this.$message({message:"用户名不能为空"})
               return
           }
           if(!this.upwdInput){
               this.$message({message:"密码不能为空"})
               return
           }
           var url="http://127.0.0.1:3000/user/login"
           this.axios.get(url,{
               params:{uname:this.unameInput,upwd:this.upwdInput}
           }).then(res=>{
               console.log(res)
               if(res.data=="login-success"){
                   this.$message({message:"登录成功"})
               }
               else{
                   this.$message({message:"用户名或密码错误"})
               }
           })
       }
    },
}
</script>
<style scoped>
.log_box{
    width: 390px;
    height: 513px;
     margin:0 auto;
}
    .log{
        width: 100%;
        max-width: 390px;
        min-width: 200px;
       
        background: #dedede;
        padding: 25px 30px 30px 30px;
        
    }
    .log_title{
        font-size: 32px;
        color:#595959;
        text-align: center;
        margin-bottom: 27px
    }
    .log_ul{
        list-style: none;
        padding:0
    }
    .log_ul li{
        margin-bottom: 10px;
        position: relative;
    }
    .logInputSpan{
        position: absolute;
        right:5%;
        top:30%;
        color: #f25100;
        font-size:12px
    }
    .log-info{
        font-size: 12px;
        color: #595959;
        margin:10px 0 10px 0
    }
     .log-info a{
         font-weight: bold;
         color: #595959;
         border-bottom: 1px dotted #595959;
         text-decoration: none
     }
     button{
            color: #fff;
            font-weight: 500;
            font-size: 14px;
            letter-spacing: .5px;
            width: 100%;
            height:36px;
            padding: 0 10px;
            line-height:36px;
            cursor: pointer;
            outline:0;
            border-radius: 3px;
            border: #b1b1b1 solid 1px;
     }
     .btn_log{
        background: linear-gradient(#9fbf00, #80ab00);
        background-color: #9fbf00;
        border-color: #7ca600;
        box-shadow: 0 1px 3px rgba(0,0,0,0.15);
     }
     .btn_log:hover{
        background: linear-gradient(#a3c400, #84b000);
        opacity: 0.9;
     }
     .btn_facebook{
        background: linear-gradient(to bottom, #4267b2, #375899);
        background-color: initial;
        border-color: #304d86;
     }
     .btn_facebook:hover{
        background: linear-gradient(to bottom, #4c71bd, #375899);
        background-color: #4369b6;
        opacity:0.9;
     }
     .log_line{
         font-size: 12px;
         color: #959595;
         margin:7px 0 7px 0;
         position: relative;
         overflow: hidden;
     }
     .log_line span::before,.log_line span::after{
         position:absolute;
         content: "";
         width:1000px;
         display:block;
         top: 50%;
         border-top: 1px solid #c4c4c4;
     }
     .log_footer{
        width: 390px;
        height: 51px;
        padding:14px 0 16px 0;
        background-color: #d2d2d2;
        border-top: 1px solid #ccc;
        text-align: center;
     }
     .log_footer a{
         color: #4f4f4f;
         font-size: 12px;
         text-decoration: none;
         cursor: pointer;
     }
     .log_footer a:last-child::before{
        content: "\2022";
        display: inline-block;
        margin: 0 10px;
        color: #4f4f4f !important;
        font-family: 'Lato';
        font-size: 12px;
     }
</style>