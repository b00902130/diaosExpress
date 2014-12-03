
$('#generate').click(function(){
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
		'", stock:"' + $('#stock').val() +
		'", verticalMarket:"' + $('#verticalMarket').val() +
		'", binds:"' + $('#binds').val() +
		'", saleProps:"' + $('#saleProps').val() +
		'", propsStr:"' + $('#propsStr').val() +
		'", customerProps:"' + $('#customerProps').val() +
		'", publicKey:"' + $('#publicKey').val() +
		'"})'
	);
});


$('#ggetGoodsByName').click(function(){
	// alert('getGoodsByName!');
	var object = {};
	object.goodsName = $('#queryGoodsName').val();

	$.post("/getGoodsByName", object, function(data){
		console.log(data);
		$('#queryGoodsNameResult').text(JSON.stringify(data));
		//alert('yes call back in generate.js');
	});
});


$('#getGoodsByID').click(function(){
	// alert('test!');

	var object = {};
	object.goodsID = $('#queryGoodsID').val();

	$.post("/getGoodsByID", object, function(data){
		console.log(data);

		$('#queryGoodsIDResult').text(JSON.stringify(data));
		//alert('yes call back in generate.js');
	});
});

// alert('hey?');


$('#ggetGoodsListByCategory').click(function(){
	alert('getGoodsListByCategory!');
	var object = {};
	object.categoryName = $('#queryCategory').val();

	$.post("/getGoodsListByCategory", object, function(data){
		console.log(data);

		$('#queryCategoryResult').text(JSON.stringify(data));
		//alert('yes call back in generate.js');
	});
});

$('#addNewGoods').click(function(){

	var object = {};

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
	object.stock = $('#stock').val();
	object.verticalMarket = $('#verticalMarket').val();
	object.binds = $('#binds').val();
	object.saleProps = $('#saleProps').val();
	object.propsStr = $('#propsStr').val();
	object.customerProps = $('#customerProps').val();
	object.publicKey = $('#publicKey').val();

	$.post("/addNewGoods", object, function(data){
		console.log(data);
		//alert('yes call back in generate.js');
	});
});

$('#ddeleteGoodsByID').click(function(){
	var object = {};
	object.deletedID = $('#ddeletedID').val();

	$.post("/deleteGoodsByID", object, function(data){
		console.log(data);
		alert('call back deleteGoodsByID!');
	});
});

$('#ddeleteGoodsByName').click(function(){
	var object = {};
	object.deletedName = $('#ddeletedName').val();

	$.post("/deleteGoodsByName", object, function(data){
		console.log(data);
		alert('call back deletedName!');
	});
});

// $('#modifyGoodsByName').click(function(){
	
// });

// $('#modifyGoodsByID').click(function(){
	
// });
