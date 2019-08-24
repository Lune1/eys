$(function(){
		console.log('light.js')
	//点击光度，出现下拉菜单
	// $.get("/light/",function(data){
	// 		if (data.status == 1){
	// 			for(var i=0; i<data.length; i++){
	// 			var obj = data[i];
	// 			// var li = create
	// 			$('.lgd_rgd_select li').eq(i+1).val(obj.light)
	//
	// 			}
	// 		}
	// 		else{
	// 			alter(data.msg)
	// 		}
	// 	})
		
	$('#rgd i').click(function(){
		console.log('click')
		$.get("/light/",function(data){
			console.log('get')
			if (data.status == 1){
				for(var i=0; i<data.length; i++){
				var obj = data[i];
				// var li = create
				$('.lgd_rgd_select').append($('<div>'+obj.light+'</div>'))

				}
			}
			else{
				alter(data.msg)
			}
		})
		$("#lgd_rgd_select").show();
		$("#lgd_rgd_select").css('top','26px');
		$("#lgd_rgd_select li").click(function(){
			$("#rightEyeGd").text($(this).text());
			$("#lgd_rgd_select").hide();
		})
	})
	
	$('#lgd i').click(function(){		
		$("#lgd_rgd_select").show();
		$("#lgd_rgd_select").css('top','58px');
		$("#lgd_rgd_select li").click(function(){
			$("#leftEyeGd").text($(this).text());
			$("#lgd_rgd_select").hide();
		})
	})
	
//	数量的加减
	//右眼
	$("#rsl_plus").click(function(){
		var count = document.getElementById('rsl_input');
    	var value = parseInt(count.value); //数目
		count.value = value + 1;
	})
	
	$("#rsl_minus").click(function(){
		var count = document.getElementById('rsl_input');
    	var value = parseInt(count.value); //数目		
		if(value <= 0){
			value = 0;
		}else{
			count.value = value - 1;
		}
	})
	
	//左眼
	$("#lsl_plus").click(function(){
		var count = document.getElementById('lsl_input');
    	var value = parseInt(count.value); //数目
		count.value = value + 1;
	})
	
	$("#lsl_minus").click(function(){
		var count = document.getElementById('lsl_input');
    	var value = parseInt(count.value); //数目		
		if(value <= 0){
			value = 0;
		}else{
			count.value = value - 1;
		}
	})
	
	//点击加入购物车
	var offset = $('#pf_right_5').offset(); //结束的地方的元素
	$('#appendCart').click(function(e){
		// var l_count = $('#lsl_input').val();
		// var r_count = $('#rsl_input').val();
		// var countToal =parseInt(l_count) +parseInt(r_count);
		// $("#pf_right_5").text(countToal);
		//
		var appendcart = $(this);
		var img = $("#slist li").eq(0).find('img').attr('src');
		var flyer = $('<img class="u-flyer" src="'+img+'">');
		
		flyer.fly({
			start:{
				left:e.clientX,
				top:e.clientY -$('#appendCart').height() ,
				
			},
			end:{
				left:offset.left + $('#pf_right_5').width()+20,
				top:offset.top,
				width:0,
				height:0
			}
		})
		
	})
	
	//点击立即购买,跳转到购物车页面
	$("#buy").click(function(){
		location.href = "cart.html";
	})
})
