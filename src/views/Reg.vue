<template>
<div class="reg_box">
    <div class="reg">
        <div class="reg_title">
            <img src="../../public/img/login/loginlogo.png" alt="">
            注册</div>
        <ul class="reg_ul">
            <li>
                <el-input @focus="unameFocus" @blur="unameBlur" v-model="unameInput" :placeholder="unamePlaceholderText"></el-input>
                <span class="regInputSpan" :class="regInput">{{regUnameSpan}}</span>
            </li>
            <li>
                <el-input @focus="upwdFocus" @blur="upwdBlur" :placeholder="upwdPlaceholderText" v-model="upwdInput" show-password ></el-input>
                 <span class="regInputSpan" :class="regInput">{{regUpwdSpan}}</span>
            </li>
            <li>
                 <el-input @focus="emailFocus" @blur="emailBlur"  v-model="emailInput" :placeholder="emailPlaceholderText"></el-input>
                  <span class="regInputSpan" :class="regInput">{{regEmailSpan}}</span>
            </li>
        </ul>
        <div class="reg_info">注册意味着您的年龄不低于13岁，并且接受<router-link to="">GOG用户协议和GOG隐私策略</router-link>。</div>
        <!-- 切换按钮 -->
        <button @click="btnRegister" class="btn_regsiter">立即注册</button>
        <div class="reg_line"><span>或者</span></div>
        <button class="btn_facebook">继续使用FACEBOOK</button>  
    </div>
    <div class="reg_footer">
            <router-link to="/login">{{jumpText}}</router-link>
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
            emailInput:"",
            //输入框的默认提示
            unamePlaceholderText:"用户名",
            upwdPlaceholderText:"密码",
            emailPlaceholderText:'邮箱',
            //切换按钮的内容文本
            jumpText:"登录到您的账户",
            // 验证的提示文本
            regUnameSpan:"",
            regUpwdSpan:"",
            regEmailSpan:"",
            //验证提示文本样式
            regInput:"",
            // 定义正则为全局
            zx1:/^[a-zA-Z0-9]{6,10}$/,
            zx2:/^[a-zA-Z0-9]{8}$/,
            zx3:/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        }
    },
    methods: {
        // 开始前端验证
         //1.用户名验证
        unameFocus(){//得到焦点
            if(!this.unameInput){
              this.regUnameSpan="请输入6-10位英文数字用户名"
              this.regInput="regInputSpanError"
             
            }   
        },
        unameBlur(){//失去焦点
             if(!this.unameInput){
                this.regUnameSpan="用户名不能为空";
                this.regInput="regInputSpanError";
             }else{
                var zxUname= /^[a-zA-Z0-9]{6,10}$/; //用户名正则
                if(zxUname.test(this.unameInput)){
                   this.axios.get(
                       "http://127.0.0.1:3000/user/user_repeat",
                       { //uname=req.query.uname发给服务器端接口的请求参数
                        params:{uname:this.unameInput} 
                       })
                       .then(result=>{
                       console.log(result)
                       if(result.data=="user-repeat"){
                           this.regUnameSpan="用户名已经注册了";
                           this.regInput="regInputSpanError";
                       }else{
                           this.regUnameSpan="用户名可用";
                           this.regInput="regInputSpanCorrect"
                       }
                    }).catch(err=>{
                        console.log(err)
                    })   
                }
                else{
                    this.regUnameSpan="用户名格式不正确"
                    this.regInput="regInputSpanError"
                }
             }  
        },
        //2.密码验证
        upwdFocus(){//得到焦点
            if(!this.upwdInput){
                this.regUpwdSpan="请输入8位英文或数字密码"
                this.regInput="regInputSpanError"
            }
        },
        upwdBlur(){
            if(!this.upwdInput){
                this.regUpwdSpan="密码不能为空";
                this.regInput="regInputSpanError" 
            }else{
                var zxUpwd=/^[a-zA-Z0-9]{8}$/
                if(zxUpwd.test(this.upwdInput)){
                    this.regUpwdSpan="验证通过";
                    this.regInput="regInputSpanCorrect"    
                }else{
                    this.regUpwdSpan="密码格式错误";
                    this.regInput="regInputSpanError"
                }
            }
        },
        // 3.邮箱验证
        emailFocus(){
            if(!this.emailInput){
                this.regEmailSpan="请输入邮箱地址"
                this.regInput="regInputSpanError";
            }
        },
        emailBlur(){
            var zxEmail=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
            if(zxEmail.test(this.emailInput)){
                var url="http://127.0.0.1:3000/user/email_repeat"
                this.axios.get(url,
                { params:{email:this.emailInput} })
                .then(res=>{
                    console.log(res)
                    if(res.data=="email-repeat"){
                        this.regEmailSpan="该邮箱已经注册"
                        this.regInput="regInputSpanError"
                    }else{
                        this.regEmailSpan="邮箱可用"
                        this.regInput="regInputSpanCorrect"    
                    }
                }).catch(err=>{
                    console.log(err)
                })
            }
            else{
                this.regEmailSpan="邮箱格式错误"
                this.regInput="regInputSpanError"
            }
        },
           
        //4. 注册按钮
        btnRegister(){
            //阻断
            if(!this.unameInput){
                this.$message({message:"用户名不能为空"})
                return
            }
            if(!this.upwdInput){
                this.$message({message:"密码不能为空"})
                return
            }
            if(!this.emailInput){
                this.$message({message:"邮箱不能为空"})
                return
            }
            if(!this.zx1.test(this.unameInput)){
                this.$message({message:"用户名格式不正确"})
                return
            }
            if(!this.zx2.test(this.upwdInput)){
                this.$message({message:"密码格式不正确"})
                return
            }
            if(!this.zx3.test(this.emailInput)){
                this.$message({message:"邮箱格式不正确"})
                return
            }
            var zd=0;
            if(this.zx1.test(this.unameInput)){ //用户名阻断
                   this.axios.get(
                       "http://127.0.0.1:3000/user/user_repeat",
                       { //uname=req.query.uname发给服务器端接口的请求参数
                        params:{uname:this.unameInput} 
                       })
                       .then(result=>{
                            console.log(result)
                            if(result.data=="user-repeat"){
                                this.regUnameSpan="用户名已占用";
                                this.regInput="regInputSpanError";
                                console.log(result.data)
                                zd=zd+50;
                                console.log(zd)
                                
                            }
                            if(zd==50){
                                    this.$message({message:"用户名已占用"})
                                    return
                            }else{
                                    f1();
                            }
                           
                           
                        })
                    
            }
        
            if(this.zx3.test(this.emailInput)){ //邮箱阻断
         
                   this.axios.get(
                       "http://127.0.0.1:3000/user/email_repeat",
                       { //uname=req.query.uname发给服务器端接口的请求参数
                        params:{email:this.emailInput} 
                       })
                       .then(result=>{
                            if(result.data=="email-repeat"){
                                this.regEmailSpan="邮箱已占用";
                                this.regInput="regInputSpanError";
                                console.log(result.data)
                                zd=zd+60
                                console.log(zd)
                            }  
                            if(zd==60){
                                    this.$message({message:"邮箱已占用"})
                            }else{
                                    f1();
                            }                
                        })
                    
            }
            
            function f1(){
                var url="http://127.0.0.1:3000/user/reg_btn"
                var obj={ uname:this.unameInput,
                          upwd:this.upwdInput,
                          email:this.emailInput   }
        
                this.axios({  //post请求用此类方法包装成get,把请求的数据放在url字符串里，而不是请求头，后端接口需修改req.query，post方法不变
                    method: 'post',
                    url: url,
                    headers: {
                        'Content-type': 'application/x-www-form-urlencoded'
                    },
                    params: obj
                }).then(res=>{
                    console.log(res)
                    if(res.data=="success"){
                        setTimeout(this.$message({message:"注册成功"}),3000)
                        this.$router.push("/login");
                    }else{
                        setTimeout(this.$message({message:"注册失败"}),3000)
                    }
                })
            }
            
            
        }

    },
}
</script>
<style scoped>
.reg_box{
    width: 390px;
    height: 513px;
     margin:0 auto;
}
    .reg{
        width: 100%;
        max-width: 390px;
        min-width: 200px;
       
        background: #dedede;
        padding: 25px 30px 30px 30px;
        
    }
    .reg_title{
        font-size: 32px;
        color:#595959;
        text-align: center;
        margin-bottom: 27px
    }
    .reg_ul{
        list-style: none;
        padding:0
    }
    .reg_ul li{
        margin-bottom: 10px;
        position: relative;
    }
    .regInputSpan{
        position: absolute;
        right:5%;
        top:30%;
        font-size: 12px;
    }
    .regInputSpanError{
        color: #f25100;
    }
    .regInputSpanCorrect{
        color: #9fbf00;
    }
    .reg_info{
        font-size: 12px;
        color: #595959;
        margin:10px 0 10px 0
    }
     .reg_info a{
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
     .btn_regsiter{
        background: linear-gradient(#9fbf00, #80ab00);
        background-color: #9fbf00;
        border-color: #7ca600;
        box-shadow: 0 1px 3px rgba(0,0,0,0.15);
     }
     .btn_regsiter:hover{
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
     .reg_line{
         font-size: 12px;
         color: #959595;
         margin:7px 0 7px 0;
         position: relative;
         overflow: hidden;
     }
     .reg_line span::before,.reg_line span::after{
         position:absolute;
         content: "";
         width:1000px;
         display:block;
         top: 50%;
         border-top: 1px solid #c4c4c4;
     }
     .reg_footer{
        width: 390px;
        height: 51px;
        padding:14px 0 16px 0;
        background-color: #d2d2d2;
        border-top: 1px solid #ccc;
        text-align: center;
     }
     .reg_footer a{
         color: #4f4f4f;
         font-size: 12px;
         text-decoration: none;
         cursor: pointer;
     }
</style>