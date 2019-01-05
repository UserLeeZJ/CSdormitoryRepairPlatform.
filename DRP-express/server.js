var express = require("express");        // 后端框架

var bodyParser = require('body-Parser'); // 解析中间件
var multer = require('multer');          // 解析中间件

var dbOperation = require('./database_operation/databaseOperation');



var upload = multer();
var app = express();


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true}));


app.post("/register",function(req,res,next){
	console.log(req.body.sid);
	dbOperation.selectStudent(req.body.sid,function(result){
		console.log(result);
		if (result.length != 0)res.send({status:0,msg:"登录成功"});
		else res.send({status:1,msg:"Can't find users"})
	})
	
});



app.get("",upload.array(),function(req,res,next) {
	console.log(req.body);
	res.send("test send");
});


app.listen(3000);

console.log("listening localhost: 3000 ......");


