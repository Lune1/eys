$(function(){
	var index = 0;
	$(".smallImg").eq(0).show().siblings('.smallImg').hide();
	$(".bigImg").eq(0).show().siblings('.bigImg').hide();
	
	$("#slist li").mouseover(function(){
		$("#slist ul li").removeClass();
		$(this).addClass('hover');
		index = $(this).index();
		
		$(".smallImg").eq(index).show().siblings('.smallImg').hide();
		$(".bigImg").eq(index).show().siblings('.bigImg').hide();
	})
	
		var _smallImag = $('.details_top_img');
		
		var _smallArea = $('#smallArea');
		var _bigImag = $('.bigImg');
		var _bigArea = $('#bigArea');
				
	//计算小区域的宽和高
		_smallArea.width(_smallImag.width()/_bigImag.width()*_bigArea.width());
		_smallArea.height(_smallImag.height()/_bigImag.height()*_bigArea.width());
		
		//放大系数
		var scale = _bigImag.width()/_smallImag.width();
		
		
	
	$(".details_top_img").mousemove(function(e){
		$("#bigArea").show();
						
		var leftSide = _smallImag.offset().left; //小图左边界
		var rightSide = leftSide + _smallImag.width(); //小图右边界
		var topSide = _smallImag.offset().top; //小图上边界
		var bottomSide = topSide + _smallImag.height(); //小图下边界
		
		if (e.pageX > leftSide && e.pageX < rightSide && e.pageY > topSide && e.pageY < bottomSide) {
			_smallArea.show(); //显示小区域
			
			//移动小区域，跟随鼠标移动
			var x = e.pageX - _smallImag.offset().left- _smallArea.width()/2;
			var y = e.pageY - _smallImag.offset().top - _smallArea.width()/2;
			
			if(x<0){
				x = 0;
			}else if(x>_smallImag.width()-_smallArea.width()){
				x = _smallImag.width()-_smallArea.width();
				
			}
			
			if(y<0){
				y = 0;						
			}else if(y> _smallImag.height()-_smallArea.height()){
				y = _smallImag.height()-_smallArea.height();
			}
			
			_smallArea.css({left:x,top:y});
			
			//移动大图
			_bigImag.css({left:-x*scale,top:-y*scale});
		}
		else{
			_smallArea.hide();
		}
	})
	
	$(".details_top_img").mouseleave(function(){
		$("#bigArea").hide();
		$('#smallArea').hide();
	})
	
})

