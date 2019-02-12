var express=require('express');
var bodyParser = require('body-parser')
var jwt = require('jsonwebtoken');
var app=express();
​
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
​
app.post('/login',function(req,res){
	console.log(req.body);
	var token = jwt.sign(req.body, 'shhhhh');
	res.send(token);
})
​
app.listen(3000, function(){
	console.log('Server started at port 3000');
});
