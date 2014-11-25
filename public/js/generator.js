$('#generate').click(function(){
	// alert('shit');
	// var goodsID = $('#goodsID').val();
	// var name = $('#name').val();
	// var price = $('#price').val();
	// var stock = $('#stock').val();
	// var address = $('#address').val();
	// var imgURL = $('#imgURL').val();
	$('#operation').text(
		'db.mobiles.insert({goodsID:' + $('#goodsID').val() +
		', name:"' + $('#name').val() +
		'", price:' + $('#price').val() +
		', stock:' + $('#stock').val() +
		', address:"' + $('#address').val() +
		'", imgURL:"' + $('#imgURL').val() +
		'"})'
		);
});