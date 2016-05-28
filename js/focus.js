$(function(){
	$(".focus_button").click(function(){
		var $number = $("#focus_button_box div").index(this);
		if ($number == 0) {
			$("#focus_photo_area").animate({
				"margin-top":"0px"},0);
		}else if ($number == 1) {
			$("#focus_photo_area").animate({
				"margin-top":"-356px"},0);
		}else if ($number == 2) {
			$("#focus_photo_area").animate({
				"margin-top":"-712px"},0);
		};;;
		$(".focus_button").addClass("red");
		$(".focus_button").removeClass("orange");
		$(this).addClass("orange");
		$(this).removeClass("red");
	})
})
$(function(){
	$(".red").mouseover(function(){
		$(this).addClass("orange")
	});
	$(".red").mouseout(function(){
		$(this).removeClass("orange")
	})
})