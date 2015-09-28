$(document).ready(function() {


var params = {
	client_id: 'ed9a920ebd23472b8733b9b8a754f77a'
};

var urlBegin = "https://api.instagram.com/v1/tags/";
var urlEnd= "/media/recent";
var goldenberries = "goldenberries";

$('li:nth-child(1)').click(function(event) {
	$('#search-results').empty();
	showFruit("tamarillo");
	showFruit("tamarillos");
	showFruit("treetomato");
	showFruit("tomatedearbol");
});


$('li:nth-child(2)').click(function(event) {
	$('#search-results').empty();
	showFruit(goldenberries);
	showFruit("goldenberry")
	showFruit("capegooseberries");
	showFruit("capegooseberry");
});

$('li:nth-child(3)').click(function(event) {
	$('#search-results').empty();
	showFruit("babacopapaya")
	showFruit("babaco");
	
});

$('li:nth-child(4)').click(function(event) {
	$('#search-results').empty();
	showFruit("tazziberry");
	showFruit("tazziberries");
	showFruit("chileanguava")
	showFruit("ugni")

});





function showFruit(fruit){

		$.get(urlBegin+fruit+urlEnd, params,
		function(data){
			

			for (var i = 0; i < data.data.length; i++) {
				var image = data.data[i].images.thumbnail.url;
				var text = data.data[i].caption.text;

				text = shortenText(text);

				$('#search-results').append("<figure><img src="+image+"><figcaption>"+text+"</figcaption></figure>");
				
			};
			
		}, 'jsonp');
}



function shortenText(text){
	var newStr='';

	for (var i = 0; i < 140 ; i++) {
		if(text[i]){
			newStr+= text[i];
		}
	};

	return newStr+"...";

}

});