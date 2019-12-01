var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'nivvi',
	database : 'User_Registration'
});

var app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/login.html'));
});


app.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
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
 }});


app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

app.listen(6000);
