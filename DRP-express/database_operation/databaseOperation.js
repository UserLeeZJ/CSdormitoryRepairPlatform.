

var mysql = require('mysql');
const util = require('util');
var db_config = require('./databaseConfiguration');


var connection = mysql.createConnection(db_config.mysql);


var sqlSeg = {
	student:{
		insert:"INSERT INTO `reportplatform`.`student`(`sid`, `sname`, `sphone`, `sbedchamber`) VALUES (?, ?, ?, ?)",
		update:"UPDATE `reportplatform`.`student` SET `sname` = ?, `sphone` = ?, `sbedchamber` = ? WHERE `sid` = ?",
		select:"SELECT * FROM `reportplatform`.`student` WHERE `sid` = ?",
	}
}

function toArray(obj)
{
	var value = [];
	if ( util.isString(obj)) 
	{
		value.push(obj);
		return value;
	}
	if ( util.isNull(obj)) return value;
	for(var i in obj)
	{
		if(util.isArray(obj[i]))
		{
			var tmp = toArray(obj[i]);
			value = value.concat(tmp);
		}
		else value.push(obj[i]);
	}
	return value;
}


module.exports = {
	 selectStudent: function(sid,callback){
	 	connection.query(sqlSeg.student.select,toArray(sid),function(error,result){
	 		callback(result);
	 	})
	 }
}

// console.log("----------------------------------------");
// var cq = connection.query(sqlSeg.student.insert,['JK154009','古力','17238256417','603'],function(error,result){
// 	console.log("插入结果:",error);
// })



// connection.query(sqlSeg.student.select,['JK154000'],function(error,result){
// 	console.log("1.查询结果:",result);	
// })


// connection.query(sqlSeg.student.update,['古利','17238256418','602','JK154002'],function(error,result){
// 	console.log("更新结果:",error);	
// })

// connection.query(sqlSeg.student.select,['JK154002'],function(error,result){

// 	console.log("2.查询结果:",result);
	
// })


// connection.end();

