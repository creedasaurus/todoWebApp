console.log('Setting up server');
// =================== Setup
var express = require('express');
// var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// make express app
var app = express();



// =================== Configuration



// mongoose.connect('mongodb://localhost/test');
var url = 'mongodb://localhost/todoApp-db';
MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	console.log("We are connected to Mongodb!");

});



app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser(bodyParser.urlencoded({'extended':'true'})));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

var portNum = 8080;
app.listen(portNum);
console.log(`This app is listening on port ${portNum}`);

app.listen(PORT.)


function shutdownServer() {
	console.log("Shutting down server");

}



