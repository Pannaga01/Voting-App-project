
var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'nivvi',
	database : 'User_Registration'
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");
} else {
    console.log("Error connecting database ... nn");
}
});

var app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/login.html'));
});


app.post('/auth', function(request, response) {
	var users={
		"email" : request.body.emailid,
		"password" : request.body.password,
	}
	
  	connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
  	if (error) {
    		console.log("error ocurred",error);
    		res.send({
      		"code":400,
      		"failed":"error ocurred"
    		})
  	}else{
    		console.log('The solution is: ', results);
    		res.send({
     	 	"code":200,
      		"success":"user registered sucessfully"
        	});
  	}
	});
 });


app.get('/home/pannagasreya/project/select.html', function(request, response) {
	if (console.log) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

app.listen(6700);
