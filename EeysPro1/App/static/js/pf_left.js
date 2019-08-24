$(function(){
	$(window).scroll(function(){
		var _scrollTop = $(document).scrollTop();
		if (_scrollTop > 400) { 
			$(".pf_left").fadeIn("slow");
			$(".pf_right_6").fadeIn("slow");
		} else {
			$(".pf_left").fadeOut("slow");
			$(".pf_right_6").fadeOut("slow");
		}
	})
	
	var isMoving = false;
	$(".pf_left a").click(function(){
		var index = $(this).index();
		var _top = $(".wide_f_main").eq(index).offset().top - $(".wide_f_main").eq(index).height()/2 +240;
		isMoving = true; //即将移动..
		$("body, html").stop().animate({scrollTop: _top}, 50, function(){
			isMoving = false; //停止移动!
		});
					
	})
	
	//点击右侧浮动的购物车
	$(".J-shoping").click(function(){
		window.location.href = "cart.html";
	})
	
	
	//	点击回到顶部
	$('.pf_right_6').click(function(){
		var _top = $("#page").offset().top + $(".header").height();
		isMoving = true; //即将移动..
		$("body, html").stop().animate({scrollTop: _top}, 1000, function(){
			isMoving = false; //停止移动!
		});
	})

})