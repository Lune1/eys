
$(function(){
	var showShop = function(){
		var key = $('.index_shop ol li[class=on]').attr('key');
        var rel = $('.index_shop .left li[class=on]').attr('off');
        
        $('.index_shop .left li').each(function () {
            if ($(this).attr('class') == $(this).attr('on')) {
            	rel = $(this).attr('off');
            }
        });

        $('.index_shop .right').children().css('display', 'none');
        $('.index_shop .tit').children().css('display', 'none');
        
        $('.index_shop .right').children().removeClass('aas');
        $('.index_shop .right .info .changeBox_a1 ul').css('left', '0');
        
        $('[rel=' + rel+'_' +key+ ']').css('display', 'block');
        $('[rel=' + key + ']').css('display', 'block');
		
		$('[rel=' + rel+'_' +key +']').addClass('aas');
        $('[rel=' + key + ']').addClass('aas');
          $('.index_shop .right .map').removeClass('aas');
	}
	
	$(".index_shop ol.tab li").mouseover(function(){
		$('.index_shop ol.tab li').removeClass('on');
		$(this).addClass('on');
		showShop();
	});
	
	$(".index_shop .left li").mouseover(function(){
		var obj = $(this);
		$(".index_shop .left li").each(function(){
			$(this).removeClass($(this).attr('on')).addClass($(this).attr('off'));
		})
		obj.removeClass($(this).attr('off')).addClass($(this).attr('on'));
		showShop();
	});
	
	
})


$(function(){
	
	$(".shopService a").mouseover(function(){
		this.myTitle = this.title;
		this.title = "";
		var tip = "<div id = 'tip'><div id = 'tip_icon'></div>" + this.myTitle + "</div>";
		$(this).parent().append(tip);		
		$("#top_icon").css({
			"margin-left":(parseInt($("#tip").width()/2))+"px"
		});
		$("#tip").css({
			"top":(parseInt($(this).position().top + 30))+"px",
			"left":(parseInt($(this).position().left - $("#tip").width()/2 + 12))+ "px"
		})
	}).mouseout(function(){
		this.title = this.myTitle;
		$(tip).remove();
	})
})

