var mysql = require("mysql");
//Database connection
var connection=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
	database:'test'
 });
 module.exports=connection;