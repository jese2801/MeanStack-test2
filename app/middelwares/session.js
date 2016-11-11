var users = require("../../models/users").users;
var path = require('path');



module.exports = function(req,res,next){
	if(!req.session.user_id){
		res.sendFile(path.resolve('public/views/index.html'));
	}else{
		users.findById(req.session.user_id,function(err,user){
			if(err){
				res.sendFile(path.resolve('public/views/index.html'));
			}else{
				res.locals = { user: user }
				next();
			}
		});
	}
}