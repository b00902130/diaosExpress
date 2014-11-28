
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
		'db.mobiles.insert({goodsID:"' + $('#goodsID').val() +
		'", name:"' + $('#name').val() +
		'", price:"' + $('#price').val() +
		'", stock:"' + $('#stock').val() +
		'", address:"' + $('#address').val() +
		'", imgURL:"' + $('#imgURL').val() +
		'"})'
	);
});


$('#getGoodsByID').click(function(){
	alert('test!');

	var object = {};
	object.goodsID = $('#goodsID').val();

	$.post("/getGoodsByID", object, function(data){
		console.log(data);
		//alert('yes call back in generate.js');
	});
});

$('getGoodsByName').click(function(){
	
});

$('getGoodsListByCategory').click(function(){
	
});

$('addNewGoods').click(function(){
	
});

$('deleteGoodsByID').click(function(){
	
});

$('deleteGoodsByName').click(function(){
	
});

$('modifyGoodsByName').click(function(){
	
});

$('modifyGoodsByID').click(function(){
	
});
