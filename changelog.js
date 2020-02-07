$(document).ready(function(){
	$("#filter").click(function(){
		var json_url = "https://raw.githubusercontent.com/Arcadier/API-Changelog/master/Postman%20Collections/Arcadier_API_v2.0.json";
		$.getJSON(json_url, function(result){ 
			console.log(result.info.name); 
			console.log(result.item[0].item[0].name); 
		});
	});
	
	var header = document.querySelector(".page-header");
	
});
