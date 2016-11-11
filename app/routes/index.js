// app/routes/index.js
'use strict';
var path = require('path');

var users = require('../../models/users').users;

var cookieSession = require("cookie-session");
var session_middleware = require("../middelwares/session");
var router_app = require("./router_app");
var path = require('path');

module.exports = function(app) {


app.use(cookieSession({
		name: "login",
		keys: ["llave-1","llave-2"]
	}));



 app.get('/', function(req, res) {
    res.sendFile(path.resolve('public/views/index.html'));
  });


app.post('/login', function(req, res) {

 users.findOne({login: req.body.username, password:req.body.password},function(err,user){
   
   if(user != null){
   
    req.session.authenticated = true;
    req.session.user_id = user._id;
    req.session.user = user.login;
    //req.session.user= user.fname;
   // req.session.user= user.lname;
    
    res.redirect("/app");
   }else{
    
    res.sendFile(path.resolve('public/views/index.html'));
   }
  }
  );
});

app.use("/app",session_middleware);
app.use("/app",router_app);

}
