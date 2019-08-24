//热门筛选 促销活动的切换
$(function(){
	
	$('.r_con').eq(0).show().siblings('.r_con').hide();
	$("#r_title li").hover(function(){		
		$('#r_title li').removeClass('title');
		$(this).addClass('title');
		var index = $(this).index();
		$('.r_con').eq(index).show().siblings('.r_con').hide();
	})
})

//评论部分切换
$(function(){
	$(' .inlast_l_n').eq(0).show();
	$(' .inlast_l_n').eq(1).hide();
	$(".inlast_left .inlast_title li").hover(function(){
		$(".inlast_left .inlast_title li").removeClass('act');
		$(this).addClass('act');
		var index = $(this).index();
		$(' .inlast_l_n').eq(index).show().siblings('.inlast_l_n').hide();
		
	})
})

//评论更新
function RefreshRemark(Listid, Headid) {
	 var remarks = $('#' + Listid + ' li[id!=' + Headid + ']'); 
	 if (remarks.size() > 2) { 
		 var lastItem = remarks.last(); 		
		 lastItem.hide(); 
		 $('#' + Headid).after(lastItem);
		 $(lastItem).show(400); 
	 }
};
$(function(){	 
	 window.setInterval('RefreshRemark("reamrkList1", "remarkHead1")', 3000); 
	 window.setInterval('RefreshRemark("reamrkList2", "remarkHead2")', 3000);	
	 
//	 微博微信切换
	$(".inlast_right .weixin li").mouseover(function(){
		var obj = $(this);
		$(".inlast_right .weixin li").each(function(){
			$(this).removeClass($(this).attr('on')).addClass($(this).attr('off'));			
		})
		obj.removeClass($(this).attr('off')).addClass($(this).attr('on'));
		
		var index = $(this).index();
		$('.tab_img').eq(index).show().siblings('.tab_img').hide();
	})
})


//秒杀版块切换
$(function(){
	$('.hp_menu').eq(0).show().siblings('.hp_menu').hide();
	$(".hp_t_left div").mouseover(function(){
		$('.hp_t_left div').removeClass('hp_l');
		$(this).addClass('hp_l');
	
		var index = $(this).index();
		$(".hp_menu").eq(index).show().siblings('.hp_menu').hide();
	})
})


