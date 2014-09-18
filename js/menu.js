$(document).ready(function(){
	$("li.lhome").click(function(){
		$("#home").fadeIn("fast");
		$("#thespa").fadeOut("fast");
		$("#treatmean").fadeOut("fast");
		$("#membership").fadeOut("fast");
		$("#aboutus").fadeOut("fast");
		$("#contact").fadeOut("fast");

	})
	$("li.lthespa").click(function(){
		$("#home").fadeOut("fast");
		$("#thespa").fadeIn("fast");
		$("#treatmean").fadeOut("fast");
		$("#membership").fadeOut("fast");
		$("#aboutus").fadeOut("fast");
		$("#contact").fadeOut("fast");

	})
	$("li.ltreatmeans").click(function(){
		$("#home").fadeOut("fast");
		$("#thespa").fadeOut("fast");
		$("#treatmean").fadeIn("fast");
		$("#membership").fadeOut("fast");
		$("#aboutus").fadeOut("fast");
		$("#contact").fadeOut("fast");

	})
	$("li.lmembership").click(function(){
		$("#home").fadeOut("fast");
		$("#thespa").fadeOut("fast");
		$("#treatmean").fadeOut("fast");
		$("#membership").fadeIn("fast");
		$("#aboutus").fadeOut("fast");
		$("#contact").fadeOut("fast");

	})
	$("li.laboutus").click(function(){
		$("#home").fadeOut("fast");
		$("#thespa").fadeOut("fast");
		$("#treatmean").fadeOut("fast");
		$("#membership").fadeOut("fast");
		$("#aboutus").fadeIn("fast");
		$("#contact").fadeOut("fast");

	})
	$("li.lcontact").click(function(){
		$("#home").fadeOut("fast");
		$("#thespa").fadeOut("fast");
		$("#treatmean").fadeOut("fast");
		$("#membership").fadeOut("fast");
		$("#aboutus").fadeOut("fast");
		$("#contact").fadeIn("fast");

	})
})