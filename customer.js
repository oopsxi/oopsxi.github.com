$(document).ready(function(){
	$(".slide_1").click(function(event){
		event.preventDefault();
		if (!$(this).hasClass("active")) {
			$(".active").removeClass("active");
			$(this).addClass("active");
			$(".show").hide().removeClass("show");
			$(".slide_content_1").addClass("show").fadeIn(1000);
		};
		
	});
	$(".slide_2").click(function(event){
		event.preventDefault();
		if (!$(this).hasClass("active")) {
			$(".active").removeClass("active");
			$(this).addClass("active");
			$(".show").hide().removeClass("show");
			$(".slide_content_2").addClass("show").fadeIn(1000);	
		};
	});
	$(".slide_3").click(function(event){
		event.preventDefault();
		if (!$(this).hasClass("active")) {
			$(".active").removeClass("active");
			$(this).addClass("active");
			$(".show").hide().removeClass("show");
			$(".slide_content_3").addClass("show").fadeIn(1000);	
		};
	});
})