$(document).ready(function(){
	$("li.lthespa").hover(function(){
		$(this).find("ul.cloneitem").fadeToggle("fast");
	})
	$("li.lmembership").hover(function(){
		$(this).find("ul.cloneitem2").fadeToggle("fast");
	})
})