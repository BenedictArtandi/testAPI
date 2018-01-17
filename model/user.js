var db=require('../dbconnection'); //reference of dbconnection.js
//include sha1
var sha1=require('sha1');
//include datetime
var dateTime = require('node-datetime');
//get current datetime with format y-m-d H:M:S
var dt = dateTime.create();
var currentDate = dt.format('Y-m-d H:M:S');
//class user
var user={
    //get all user function    
    getAllUser:function(callback){
        return db.query("Select * from user",callback);
    },
    //get one user function
    getUserByEmail:function(email,callback){
        return db.query("select * from user where email=?",[email],callback);
    },
    //add user function
    addUser:function(user,callback){
        return db.query("Insert into user (email,password,first_name,last_name,user_ktp,user_photo,address,is_male,phone_number) values(?,?,?,?,?,?,?,?,?)",[user.email,sha1(user.password),user.first_name,user.last_name,user.user_ktp,user.user_photo,user.address,user.is_male,user.phone_number],callback);
    },
    //delete user function
    deleteUser:function(email,callback){
        return db.query("update user set is_active='0' where email=?",[email],callback);
    },
    //update user function
    updateUser:function(email,user,callback){
        return db.query("update user set password = ?,first_name = ?,last_name = ?,user_ktp = ?,user_photo = ?,address = ?,is_male = ?,phone_number = ?,date_updated = ? where email=?",[sha1(user.password),user.first_name,user.last_name,user.user_ktp,user.user_photo,user.address,user.is_male,user.phone_number,currentDate,email],callback);
    } 
};

//export all user module
module.exports=user;