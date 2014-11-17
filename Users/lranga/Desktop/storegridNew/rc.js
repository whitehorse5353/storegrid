var WebSocket = require('ws');	
var ws = new WebSocket('ws://192.168.1.157:8080/');
var express = require('express');
var app = express();

ws.on('message', function(data, flags) {
	console.log(data);
	app.get('/', function(req, res) {
		if(data){	
		// document.write(data);	  
		  console.log(res);
		  res.send(data);
		}		
	});	
});

app.listen(5555);