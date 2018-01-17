var mysql=require('mysql');
/*connection to database*/
var connection=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'dishub_invision'
    });
 module.exports=connection;