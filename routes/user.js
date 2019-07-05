//国际惯例引入3个
const express=require("express");
const router=express.Router();
const pool=require("../pool");
//添加路由
//1.用户注册(用户名重复)
router.get("/user_repeat",function(req,res){
    var uname=req.query.uname;
    var upwd=req.query.upwd;
    var email=req.query.email;
    var url="select * from gog_user where uname=?"
    pool.query(url,[uname],function(err,result){
        if(err)throw err;
        if(result.length>0){
            res.send("user-repeat")
        }else{
            res.send("no-repeat")
        }
    })
})
//2.用户注册（邮箱重复）
router.get("/email_repeat",function(req,res){
    var uname=req.query.uname;
    var upwd=req.query.upwd;
    var email=req.query.email;
    var url="select * from gog_user where email=?"
    pool.query(url,[email],function(err,result){
        if(err)throw err;
        if(result.length>0){
            res.send("email-repeat")
        }else{
            res.send("no-repeat")
        }
    })
})
//3.用户注册(点击注册按钮:插入)
router.post('/reg_btn',function(req,res){
    console.log(req.query)
    //获取数据
    // console.log(req.body);
    //验证数据是否为空
    var uname=req.query.uname;
    var upwd=req.query.upwd;
    var email=req.query.email;
    if(!uname){
      res.send("0")
      //阻止往后执行
      return;
    }
    if(!upwd){
      res.send("1");
      return;
    }
    if(!email){
      res.send("2");
      return;
    }
    //把数据插入到数据库 
    //执行SQL语句
    pool.query('INSERT INTO gog_user SET ?',[req.query],function(err,result){
      if(err) throw err;
      if(result.affectedRows>0){
        res.send("success");
      }else{
          res.send("fail")
      }
    });
  });
//4.用户登录
router.get("/login",function(req,res){
    var uname=req.query.uname;
    var upwd=req.query.upwd;
    if(!uname){
        res.send("0")
        return
    }
    if(!upwd){
        res.send("1")
        return
    }
    var url="SELECT id FROM gog_user WHERE uname=? AND upwd=?"
    pool.query(url,[uname,upwd],function(err,result){
        if(err) throw err;
        if(result.length>0){
            console.log(result.length)
            req.session.uid=result[0].id; //保存session的uid
            res.send("login-success")
        }
        else{
            res.send("login-error")
        }
    })
})
  //公开路由

module.exports=router;
