$(function() {
	$.fn.Scrolling = function(obj, tar) {
		var _this = this;
		$(window).scroll(function(e) {
			var end = obj + tar;
			$(window).scrollTop() >= obj ? _this.addClass("fixed") : _this.removeClass("fixed");
			if($(window).scrollTop() >= end) _this.removeClass("fixed");
		});
	};
 
	$("#test1").Scrolling($("#test1").offset().top, ($(".aa").height() - $("#test1").height()));
	$("#test2").Scrolling($("#test2").offset().top, ($(".bb").height() - $("#test2").height()));
});