var express = require('express');
var path = require('path');
var http = require('http');
var portNum = process.env.PORT || 3000;
var index = require('./routes/index');

var app = express();

app.set('port', portNum);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));



app.get('/', index.load);


app.get('/', function(req, res){
    res.send('hello world');
});

var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    ReplSetServers = require('mongodb').ReplSetServers,
    ObjectID = require('mongodb').ObjectID,
    Binary = require('mongodb').Binary,
    GridStore = require('mongodb').GridStore,
    Grid = require('mongodb').Grid,
    Code = require('mongodb').Code,
    BSON = require('mongodb').pure().BSON,
    assert = require('assert');

  // Connect using the connection string
  MongoClient.connect("mongodb://fountain:opennet@ds051640.mongolab.com:51640/aipustore", {native_parser:true}, function(err, db) {
    assert.equal(null, err);
    var collection = db.collection("mobiles");
    collection.findOne({stock:7000}, function(err, item) {
      assert.equal(null, err);
      console.log(item);
      db.close();
    })
  });

app.listen(3000);