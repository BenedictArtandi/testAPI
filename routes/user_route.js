var express = require('express');
var router = express.Router();
var user = require('../model/user');

//get command /dishub/user/email for get user by email and /dishub/user/ for get all user
router.get('/:email?', function (req, res, next) {
    if (req.params.email) {
        user.getUserByEmail(req.params.email, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {
        user.getAllUser(function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
});

//post command /api/dishub/user/addUser
router.post('/addUser', function (req, res, next) {
    user.addUser(req.body, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(req.body);//or return count for 1 &amp;amp;amp; 0
        }
    });
});

//delete command /api/dishub/user/delete/email for delete user by email
router.delete('/delete/:email', function (req, res, next) {
    user.deleteUser(req.params.email, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(count);
        }
    });
});

//update command /api/dishub/user/update/email for update by email 
router.put('/update/:email', function (req, res, next) {
    user.updateUser(req.params.email, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

//export all router module
module.exports = router;