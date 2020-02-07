$(document).ready(function(){
	$("#filter").click(function(){
		var json_url = "https://raw.githubusercontent.com/Arcadier/API-Changelog/master/Postman%20Collections/Arcadier_API_v2.0.json";
		$.getJSON(json_url, function(result){ 
			console.log(result.info.name); 
			console.log(result.item[0].item[0].name); 
		});
	});
	
	var header = document.querySelector(".page-header");
	var postman = "<div class=\"postman-run-button\" data-postman-action=\"collection/import\" data-postman-var-1=\"346b915f84ec00600260\"></div>";
	var postman_ctn = document.createElement("div");
	postman_ctn.innerHTML = postman;
	header.appendChild(postman_ctn);
});
