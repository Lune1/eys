$(function(){

	console.log('dingdan.js')
//	鼠标移入,显示下拉菜单
	$('.main_left h3').mouseenter(function(){
		$('.left_menu').show();
	})
	
	$('.main_left').mouseleave(function(){
		$('.left_menu').hide();
	})
	
//	分享模块
	$(".share_s a i").mouseover(function(){
		this.myTitle = this.title;
		this.title = "";
		var s_tip = "<div id = 's_tip'>" + this.myTitle + "</div>";
		$(this).parent().append(s_tip);	
		
		$("#s_tip").css({
			"top":(parseInt($(this).position().top +30))+"px",
			"left":(parseInt($(this).position().left +20))+ "px"
		})
	}).mouseout(function(){
		this.title = this.myTitle;
		$(s_tip).remove();
	})
	
	$('.weixin').mouseenter(function(){
		$('.weixin_twocode').show();
	})
	$('.weixin').mouseleave(function(){
		$('.weixin_twocode').hide();
	})
	
   //	可得价部分的显示
	$(".message_member_price").mouseover(function(){
		$(".message_member_price .i").css({"background-position":"-10px -911px"});
		$(".message_member_prices").show();
	})
	
	$(".message_member_price").mouseout(function(){
		$(".message_member_price .i").css({"background-position":"0px -911px"});
		$(".message_member_prices").hide();
	})
	
	
	
	$('.details_purchasebtn1').click(function () {
		let productid = $(this).attr('product_id')
		let lsl_num = $('#lsl_input').val()
		let rsl_num = $('#rsl_input').val()
		let sum = parseInt(lsl_num)+parseInt(rsl_num)
		$.post('/eye/genorder/',{productid:productid,sum:sum},function (response) {
			if (response.status == 1){
            	location.href = '/eye/order/'+ response.order_id +'/'
			}
            else if (response.status == 0){
            	location.href == '/eye/logoin/'
			}
			else{
				alert(response.msg)
			}
		},'json')
	})
					
	



	$('#appendCart').click(function(){

	let productid = $(this).children('p').attr('productid')
	var l_count = $('#lsl_input').val();
	var r_count = $('#rsl_input').val();
	let num = parseInt(l_count) + parseInt(r_count)
	$.get('/eye/addcart/',{show_id:productid,num:num},function (response) {
		if (response.status == 1){
			$('#pf_right_5').text(parseInt($('#pf_right_5').html()) + num);
			$('#gwc_count').text(parseInt($('#gwc_count').html()) + num)
		}
		else if (response.status == 0){
			location.href = '/eye/logoin/'
		}
		else{
			alert(response.msg)
		}
	})
})
})





