var coleCourses = require('../../models/courses').courses;
var coleUsers = require('../../models/users').users;

var express = require("express");
var router = express.Router();
var path = require('path');
module.exports = router;


router.get("/",function(req,res){
	res.sendFile(path.resolve('public/views/principal.html'));
});

router.get("/user",function(req,res){



 coleUsers.findOne({login:req.session.user},function(err,user){

   if(user != null){
                
        res.json(user); 
        }
        else{
            console.log("Error: " + err);
        }

    
  });
});

  router.get('/Courses/:username', function(req, res){

 var username = req.params.username;
 coleCourses.find({users: username}, function(err, doc){
  res.json(doc);
 });
});


router.get("/logout",function(req,res){
	req.session =null;
	res.json("");
});

//_______________________________________________________________________________________________________
