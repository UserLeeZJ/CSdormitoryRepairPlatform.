var express = require("express");        // 后端框架

var bodyParser = require('body-Parser'); // 解析中间件
var multer = require('multer');          // 解析中间件

var upload = multer();
var app = express();


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true}));

app.get("",upload.array(),function(req,res,next) {
	console.log(req.body);
	res.send("test send");
})


app.listen(3000);

console.log("listening localhost: 3000 ......")


