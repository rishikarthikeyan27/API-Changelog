$(document).ready(function(){
	$("#filter").click(function(){
		var json_url = "https://raw.githubusercontent.com/Arcadier/API-Changelog/master/Postman%20Collections/Arcadier_API_v2.0.json";
		$.getJSON(json_url, function(result){ 
			console.log(result.info.name); 
			console.log(result.item[0].item[0].name); 
		});
	});
	
	addPostmanButton();
	changeViewButton();
	
	function addPostmanButton(){
		var header = document.querySelector(".page-header");
		var postman = "<div class=\"postman-run-button\" data-postman-action=\"collection/import\" data-postman-var-1=\"346b915f84ec00600260\"></div>";
		var postman_ctn = document.createElement("div");
		postman_ctn.innerHTML = postman;
		header.appendChild(postman_ctn);

		(function (p,o,s,t,m,a,n) {!p[s] && (p[s] = function (){(p[t] || (p[t] = [])).push(arguments);});!o.getElementById(s+t) && o.getElementsByTagName("head")[0].appendChild(((n = o.createElement("script")), (n.id = s+t), (n.async = 1), (n.src = m), n));}
		(window, document, "_pm", "PostmanRunObject", "https://run.pstmn.io/button.js"));
	}
	
	function changeViewButton(){
		var view_btn = document.querySelector(".page-header > a.btn");
		view_btn.hide();
	}
});
