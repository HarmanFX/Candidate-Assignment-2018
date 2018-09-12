var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var EventEmitter = require('events');
var bodyParser = require('body-parser');

app.use(bodyParser.json());					// json-ecoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

const events = new EventEmitter();

//////// get events from distance sensor
io.on('connection', function(client){
  console.log('IO Client connected...');

  // text platform extension / retraction
  setTimeout(function(){
    console.log("Extending Platform...");
    client.emit('extendPlatform');
  }, 1500);

  setTimeout(function(){
      client.emit('retractPlaform');
  }, 5000);


  client.on('sensorUpdate', function(value) {
    console.log("Distance update " + value + " cm");
    // YOUR CODE HERE


    //
  });
})



/////////
/// Static directories
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/scripts'));
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/css'));

//app.use(express.static(__dirname + '/resources'));

///// Serve index.html
app.get('/', function(req, res, next) {
	res.sendFile(__dirname + '/index.html')
});

//Specifies port to listen for client connections. ex. localhost:4200
server.listen(4200);
