
$('#generate').click(function(){
	// alert('shit');
	// var goodsID = $('#goodsID').val();
	// var name = $('#name').val();
	// var price = $('#price').val();
	// var stock = $('#stock').val();
	// var address = $('#address').val();
	// var imgURL = $('#imgURL').val();
	// if (price = ) {};
	$('#operation').text(
		'db.allGoods.insert({goodsID:"' + $('#goodsID').val() +
		'", categoryID:"' + $('#categoryID').val() +
		'", outerID:"' + $('#outerID').val() +
		'", tsc:"' + $('#tsc').val() +
		'", barcode:"' + $('#barcode').val() +
		'", name:"' + $('#name').val() +
		'", categoryName:"' + $('#categoryName').val() +
		'", price:"' + $('#price').val() +
		'", shopPrice:"' + $('#shopPrice').val() +
		'", standardPrice:"' + $('#standardPrice').val() +
		'", desc:"' + $('#desc').val() +
		'", imgURL:"' + $('#imgURL').val() +
		'", modified:"' + $('#modified').val() +
		'", created:"' + $('#created').val() +
		'", status:"' + $('#status').val() +
		'", level:"' + $('#level').val() +
		'", rateNum:"' + $('#rateNum').val() +
		'", saleNum:"' + $('#saleNum').val() +
		'", collectNum:"' + $('#collectNum').val() +
		'", inventoryNum:"' + $('#inventoryNum').val() +
		'", verticalMarket:"' + $('#verticalMarket').val() +
		'", binds:"' + $('#binds').val() +
		'", saleProps:"' + $('#saleProps').val() +
		'", propsStr:"' + $('#propsStr').val() +
		'", customerProps:"' + $('#customerProps').val() +
		'", publicKey:"' + $('#publicKey').val() +
		'"})'
	);
});


$('#getGoodsByID').click(function(){
	// alert('test!');

	var object = {};
	object.goodsID = $('#goodsID').val();

	$.post("/getGoodsByID", object, function(data){
		console.log(data);
		//alert('yes call back in generate.js');
	});
});

$('#getGoodsByName').click(function(){
	var object = {};
	object.categoryID = $('#categoryID').val();

	$.post("/getGoodsByName", object, function(data){
		console.log(data);
		//alert('yes call back in generate.js');
	});
});

// $('getGoodsListByCategory').click(function(){
	
// });

$('#addNewGoods').click(function(){

	var object = {};
	// object.operation = {};

	// function pushToAry(name, val) {
	// 	var obj = {};
	// 	obj[name] = val;
	// 	object.operation.push(obj);
	// }

	object.goodsID = $('#goodsID').val();
	object.categoryID = $('#categoryID').val();
	object.outerID = $('#outerID').val();
	object.tsc = $('#tsc').val();
	object.barcode = $('#barcode').val();
	object.name = $('#name').val();
	object.categoryName = $('#categoryName').val();
	object.price = $('#price').val();
	object.shopPrice = $('#shopPrice').val();
	object.standardPrice = $('#standardPrice').val();
	object.desc = $('#desc').val();
	object.imgURL = $('#imgURL').val();
	object.modified = $('#modified').val();
	object.created = $('#created').val();
	object.status = $('#status').val();
	object.level = $('#level').val();
	object.rateNum = $('#rateNum').val();
	object.saleNum = $('#saleNum').val();
	object.collectNum = $('#collectNum').val();
	object.inventoryNum = $('#inventoryNum').val();
	object.verticalMarket = $('#verticalMarket').val();
	object.binds = $('#binds').val();
	object.saleProps = $('#saleProps').val();
	object.propsStr = $('#propsStr').val();
	object.customerProps = $('#customerProps').val();
	object.publicKey = $('#publicKey').val();

	// pushToAry("goodsID", $('#goodsID').val());
	// pushToAry("categoryID", $('#categoryID').val());
	// pushToAry("outerID", $('#outerID').val());
	// pushToAry("tsc", $('#tsc').val());
	// pushToAry("barcode", $('#barcode').val());
	// pushToAry("name", $('#name').val());
	// pushToAry("categoryName", $('#categoryName').val());
	// pushToAry("price", $('#price').val());
	// pushToAry("shopPrice", $('#shopPrice').val());
	// pushToAry("standardPrice", $('#standardPrice').val());
	// pushToAry("desc", $('#desc').val());
	// pushToAry("imgURL", $('#imgURL').val());
	// pushToAry("modified", $('#modified').val());
	// pushToAry("created", $('#created').val());
	// pushToAry("status", $('#status').val());
	// pushToAry("level", $('#level').val());
	// pushToAry("rateNum", $('#rateNum').val());
	// pushToAry("saleNum", $('#saleNum').val());
	// pushToAry("collectNum", $('#collectNum').val());
	// pushToAry("verticalMarket", $('#verticalMarket').val());
	// pushToAry("binds", $('#binds').val());
	// pushToAry("saleProps", $('#saleProps').val());
	// pushToAry("propsStr", $('#propsStr').val());
	// pushToAry("customerProps", $('#customerProps').val());
	// pushToAry("publicKey", $('#publicKey').val());

	// var operation = 'db.allGoods.insert({goodsID:"' + $('#goodsID').val() +
	// 	'", categoryID:"' + $('#categoryID').val() +
	// 	'", outerID:"' + $('#outerID').val() +
	// 	'", tsc:"' + $('#tsc').val() +
	// 	'", barcode:"' + $('#barcode').val() +
	// 	'", name:"' + $('#name').val() +
	// 	'", categoryName:"' + $('#categoryName').val() +
	// 	'", price:"' + $('#price').val() +
	// 	'", shopPrice:"' + $('#shopPrice').val() +
	// 	'", standardPrice:"' + $('#standardPrice').val() +
	// 	'", desc:"' + $('#desc').val() +
	// 	'", imgURL:"' + $('#imgURL').val() +
	// 	'", modified:"' + $('#modified').val() +
	// 	'", created:"' + $('#created').val() +
	// 	'", status:"' + $('#status').val() +
	// 	'", level:"' + $('#level').val() +
	// 	'", rateNum:"' + $('#rateNum').val() +
	// 	'", saleNum:"' + $('#saleNum').val() +
	// 	'", collectNum:"' + $('#collectNum').val() +
	// 	'", verticalMarket:"' + $('#verticalMarket').val() +
	// 	'", binds:"' + $('#binds').val() +
	// 	'", saleProps:"' + $('#saleProps').val() +
	// 	'", propsStr:"' + $('#propsStr').val() +
	// 	'", customerProps:"' + $('#customerProps').val() +
	// 	'", publicKey:"' + $('#publicKey').val() +
	// 	'"})';

	

	$.post("/addNewGoods", object, function(data){
		console.log(data);
		//alert('yes call back in generate.js');
	});
});

// $('#deleteGoodsByID').click(function(){
	
// });

// $('#deleteGoodsByName').click(function(){
	
// });

// $('#modifyGoodsByName').click(function(){
	
// });

// $('#modifyGoodsByID').click(function(){
	
// });
