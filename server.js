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

// mongoose.connect('mongodb://localhost/test');
var url = 'mongodb://localhost/vaultdb';


// =================== Configuration


MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);

    var collection = db.collection('vaultdb');

    console.log("We are connected to Mongodb!");


    app.get('/api/object', function (req, res) {
        collection.find({"Serialnumber": "MXL0231KZ5"}).toArray(function (err, item) {
            if (!err) {
                res.json(item);
            }
            else {
                console.log('error', err);
            }
        });


    });

});


app.use(morgan('dev'));
app.use(bodyParser(bodyParser.urlencoded({'extended':'true'})));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());


// REST STUFF
app.use(express.static(__dirname + '/public'));



var portNum = 8080;
app.listen(portNum);
console.log('This app is listening on port ' + portNum);



function shutdownServer() {
	console.log("Shutting down server");

}



