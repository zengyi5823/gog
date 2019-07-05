//使用express构建web服务器
const express = require('express');
const session = require("express-session");
const bodyParser = require('body-parser');
const cors=require("cors");
/*引入路由模块*/
const user=require("./routes/user")

// 处理跨域
var app = express();
app.use(cors({
  origin:['http://localhost:8080',"http://127.0.0.1:8080"],//跨域！
  credentials:true //认证，允许接受客户端带来的身份信息
}))
var server = app.listen(3000);
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
app.use(express.static('public'));
// 添加session
app.use(session({
  secret:'随机字符串',
  cookie:{maxAge:60*1000*30},//过期时间ms
  resave:true,//每次请求是否更新数据
  saveUninitialized:true //保存初始化数据
}));//将服务器的session，放在req.session中

/*使用路由器来管理路由*/
app.use("/user",user)

