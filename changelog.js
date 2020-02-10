$(document).ready(function(){
	import_css();
// 	var catalog = document.createElement("div");
// 	var wrapper = document.querySelector(".wrapper");
// 	catalog.innerHTML = "<div class=\"catalog-banner\"><div class=\"background-image-holder\" style=\"background: url(&quot;https://api.arcadier.com/assets/images/catalog-banner-top.png &quot;);\"><img src=\"https://api.arcadier.com/assets/images/catalog-banner-top.png \" alt=\"catalog\" style=\"display: none;\"></div><div class=\"over-catalog-search text-center\"><h1>Find the right Plug-ins for <br>your marketplace </h1><div class=\"search-bar-catalog\"><form><input type=\"text\" name=\"search-catalog\" class=\"cat-search\" placeholder=\"Search Plug-in\"><button class=\"ser-round-square\"><i class=\"fa fa-search\"></i></button></form></div></div></div>";
// 	$("body").insertBefore(catalog, wrapper);
	
	$("#filter").click(function(){
		var json_url = "https://raw.githubusercontent.com/Arcadier/API-Changelog/master/Postman%20Collections/Arcadier_API_v2.0.json";
		$.getJSON(json_url, function(result){ 
			console.log(result.info.name); 
			console.log(result.item[0].item[0].name); 
		});
	});
	
	addPostmanButton();
	changeViewButton();
	changeTitles();
	
	function addPostmanButton(){
		var header = document.querySelector(".wrapper > header");
		var postman = "<div class=\"postman-run-button\" data-postman-action=\"collection/import\" data-postman-var-1=\"346b915f84ec00600260\"></div>";
		var postman_ctn = document.createElement("div");
		postman_ctn.innerHTML = postman;
		header.appendChild(postman_ctn);

		(function (p,o,s,t,m,a,n) {!p[s] && (p[s] = function (){(p[t] || (p[t] = [])).push(arguments);});!o.getElementById(s+t) && o.getElementsByTagName("head")[0].appendChild(((n = o.createElement("script")), (n.id = s+t), (n.async = 1), (n.src = m), n));}
		(window, document, "_pm", "PostmanRunObject", "https://run.pstmn.io/button.js"));
	}
	
	function changeViewButton(){
		var timer = setInterval(function(){
			var view_btn = document.querySelector(".wrapper > header > p > a");
			if(view_btn){
				console.log("exists");
				view_btn.href = "https://apiv2.arcadier.com";
				view_btn.target = "_blank";
				view_btn.innerHTML = "View on Postman";
				clearInterval(timer);
			}
		}, 100);
	}
});

function changeTitles(){
	var title = document.querySelector(".wrapper > header > h1 > a");
	title.innerHTML = "Arcadier API Changelog";
}

function import_css(){
	var i=0;
	var timer = setInterval(function(){
		if(i == 2){
			var style = document.createElement('link');
			style.href = "/API-Changelog/changelog.css"
			style.type = 'text/css';
			style.rel = "stylesheet";
			document.getElementsByTagName('head')[0].appendChild(style);
			clearInterval(timer);
		}
		i++;
	}, 50);
	
}
