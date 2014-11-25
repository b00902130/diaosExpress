var express = require('express');
// var router = express.Router();

/* GET home page. */

exports.load = function(req, res){
	res.render('index');
};

exports.getGoodsByID = function(req, res){
	res.render('index');
};

exports.getGoodsByName = function(req, res){
	res.render('index');
};

exports.getGoodsListByCategory = function(req, res){
	res.render('index');
};

exports.addNewGodds = function(req, res){
	res.render('index');
};

exports.deleteGoods = function(req, res){
	res.render('index');
};

exports.modifyGoods = function(req, res){
	res.render('index');
};