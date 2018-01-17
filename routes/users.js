var express = require('express');
var router = express.Router();

/* GET all user*/
router.get('/', function(req, res, next) {
	res.locals.connection.query('SELECT * from user', function (error, results, fields) {
		if(error){
			res.send(JSON.stringify({"{error": error, "response": false})); 
			//If there is error, we send the error in the error section with 500 status
		} else {
			res.send(JSON.stringify({"users": results}));
			//If there is no error, all is good and response is 200OK.
		}
	});
});

module.exports = router;
