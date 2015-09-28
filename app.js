$(document).ready(function() {
	

	$.getJSON('https://api.instagram.com/v1/tags/goldenberries/media/recent?client_id=ed9a920ebd23472b8733b9b8a754f77a',
		function(data){console.log(data);
		});


});