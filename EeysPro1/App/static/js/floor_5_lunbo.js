$(function(){
	// $.get("json/floor_5f_lunbo.json",function(data){
	// 	for(var i=0; i<data.length; i++){
	// 		var obj = data[i];
	// 		var li = $('<li></li>');
	// 		var a = $('<a href="#"></a>');
	// 		var imgs = $("<img src=" + obj.img + " />");
	//
	// 		$("#wide_infcp_5f_ban  .infcptop").append(li);
	// 		li.append(a);
	// 		a.append(imgs);
	// 	}
	// })

	var infcptop = $('#wide_infcp_5f_ban .infcptop');
	var infcp_baniu = $('#wide_infcp_5f_ban .infcp_baniu');
	var baniu_li = $('#wide_infcp_5f_ban .infcp_baniu li');
	
	var len_5 = $("#wide_infcp_5f_ban .infcp_baniu li").length;
	var index_5 = 0;
	
	var timer_5 = setInterval(function(){		
			index_5++;
			move();
		}, 2000);
		
		function move(){
			if(index_5 <0 ){
				infcptop.css("left", -(len_5-1)*710);
				index_5 = len_5 -1;
			}
			if(index_5 >= len_5){
				index_5 = 0;
			}
			infcptop.stop().animate({left: -index_5*710},500);						
			baniu_li.eq(index_5).removeClass().addClass("changebg").siblings().removeClass("changebg")
					if (index_5 == len_5) {
						baniu_li.eq(0).removeClass().addClass("changebg").siblings().removeClass("changebg")
					}

		}
		//按钮的移入事件
		baniu_li.mouseenter(function(){
			var i = $(this).index();
			index_5 = i;
			move();
		})

		$("#wide_infcp_5f_ban").hover(function(){ 
			//移入 mouseenter
			clearInterval(timer_5); //停止定时器, 停止自动轮播
			}, 
			function(){
			//移出, mouseleave
				clearInterval(timer_5); 
				timer_5 = setInterval(function(){
					index_5++;
					move();
				}, 2000);
			})

})
