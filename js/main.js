$(document).ready(function() {
	$.getJSON('js/data.json', function(datam){
		console.log(datam[1]);
	});
});