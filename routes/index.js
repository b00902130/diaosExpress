var express = require('express');
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
// var router = express.Router();

/* GET home page. */

exports.load = function(req, res){
	res.render('index');
};

exports.getGoodsByID = function(req, res){
	console.log('yo!');
	console.log(req.body.goodsID);
	// Connect using the connection string
  	MongoClient.connect("mongodb://fountain:opennet@ds051640.mongolab.com:51640/aipustore", {native_parser:true}, function(err, db) {
		assert.equal(null, err);
		var collection = db.collection("mobiles");
		var query = {};
		query.goodsID = parseInt(req.body.goodsID);
		collection.findOne(query, function(err, item) {
			assert.equal(null, err);
			console.log(item);
			res.send(item);
			db.close();
		})
	});
	// var data = req.body.goodsID + 'dicks';
	// res.send(data);
};

exports.getGoodsByName = function(req, res){
	res.render('index');
};

exports.getGoodsListByCategory = function(req, res){
	res.render('index');
};

exports.addNewGoods = function(req, res){
	res.render('index');
};

exports.deleteGoodsByName = function(req, res){
	res.render('index');
};

exports.deleteGoodsByID = function(req, res){
	res.render('index');
};

exports.modifyGoodsByName = function(req, res){
	res.render('index');
};

exports.modifyGoodsByID = function(req, res){
	res.render('index');
};