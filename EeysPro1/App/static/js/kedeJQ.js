$(function(){
		console.log('kede.js')


	// 显示/隐藏头部下拉列表
	$('.main_left h3').mouseover(function(){
		$(this).addClass('active');
		$(this).find('ul').show();
	})
	$('.main_left h3').mouseout(function(){
		$(this).removeClass('active');
		$(this).find('ul').hide();
	})
	//显示/隐藏手机二维码
	$('.phone').mouseover(function(){
		$('.phone img').eq(1).show();
	})
	$('.phone').mouseout(function(){
		$('.phone img').eq(1).hide();
	})
//	聊天方式弹出框
	$("#chart").click(function(){
		$("#chartWay").show();
	})

	$("#close").click(function(){
		$("#chartWay").hide();
	})
	//主菜单兰划过显示右边内容
	$('.l_list').mouseover(function(){
		$(this).find('.l_list_line').hide();
		$(this).siblings().addClass('border');
		$(this).find('.left_div').show();
	})
	$('.l_list').mouseout(function(){
		$(this).find('.l_list_line').show();
		$(this).siblings().removeClass('border');
		$(this).find('.left_div').hide();
	})

	//背景图创建
	// $(function(){
		$.get('/eye/lunbotu/',function (response) {
			if (response.status == 1) {
				var ul = $("<ul class ='slidebox'></ul>");
				ul.appendTo(".banner");
				let data = response['data']
				for (var i = 0; i < data.length; i++) {
					var obj = data[i];

					var li = $("<li style ='background-color:" + obj.db_color + "'></li>");
					li.appendTo(ul);
					var a = $("<a href='#'></a>");
					a.appendTo(li);
					var imgs = $("<img src='/static/" + obj.db_img + "' />");
					imgs.appendTo(a);
				}

			}
			else if (response.status == 0){
				location.href = '/logoin/'
			}
			//背景图轮播
		var $slidebox = $('.slidebox');
		var $dot = $('.s_dot');
		var $prev = $('#prev');
		var $next = $('#next');

		var index = 0;
		var len = $slidebox.children('li').length;
		show();
		var timer = setInterval(animation,3000);
		function show(){
			if(index == len){
				index = 0;
			}else if(index < 0){
				index = len - 1;
			}
			$slidebox.children('li').eq(index).animate({opacity:1}).siblings().animate({opacity:0});

			$dot.children('li').eq(index).addClass('cur').siblings().removeClass();
		}

		function animation(){
			index ++;
			show();
		}

		//左右按钮
		$prev.click(function(){
			index --;
			show();
		});
		$next.click(function(){
			index ++;
			show();
		});

		$(".arrow").mouseenter(function(){
			$(".arrow").css("opacity","1");
		})
		$(".arrow").mouseout(function(){
			$(".arrow").css("opacity","0.6");
		})

		//点击小图切换大图
		$dot.on('click','li',function(){
			index = $(this).index();
			$(this).addClass('cur').siblings().removeClass();
			show();
		});

		//	鼠标划入图片,图片停止轮播
		$('.slidebox li a img').mouseenter(function(){
			clearInterval(timer);
			$('.arrow').show();
		}).mouseleave(function(){
			timer = setInterval(animation,3000);
			$('.arrow').hide();
		})

	})
// })
		})

		// }



//右边内容的轮播
$(function(){
	var infcptop = $('#wide_infcp_top .infcptop');
	var infcp_baniu = $('#wide_infcp_top .infcp_baniu');
	var top_li = $('#wide_infcp_top .infcptop li');
	var baniu_li = $('#wide_infcp_top .infcp_baniu li');

	var len = $("#wide_infcp_top .infcptop li").length;
	var index = 0;

	var timer = setInterval(function(){
			index++;
			move();
		}, 2000);

		function move(){
			if(index <0 ){
				infcptop.css("left", -(len-1)*208);
				index = len -1;
			}
			if(index >= len){
				index = 0;
			}
			infcptop.stop().animate({left: -index*208},500);
			baniu_li.eq(index).removeClass().addClass("changebg").siblings().removeClass("changebg")
					if (index == len) {
						baniu_li.eq(0).removeClass().addClass("changebg").siblings().removeClass("changebg")
					}

		}
		//按钮的移入事件
		baniu_li.mouseenter(function(){
			var i = $(this).index();
			index = i;
			move();
		})

		$("#wide_infcp_top").hover(function(){
			//移入 mouseenter
			clearInterval(timer); //停止定时器, 停止自动轮播
			},
			function(){
			//移出, mouseleave
				clearInterval(timer);
				timer = setInterval(function(){
					index++;
					move();
				}, 2000);
			})

		//logo部分的输入框
		$(".search_left #txt").focus(function () {
			$(this).css('color', '#000');
			$(this).css('box-shadow', '0px 0px 3px rgba(255,153, 0, 0.5) inset');
		});
		$(".search_left #txt").blur(function () {
			$(this).css('color', '#a0a0a0');
			$(this).css('box-shadow', 'none');
		});

})


//右侧浮动的切换
$(function(){
	$(".pf_right_3").mouseenter(function(){
		$(".pf_ygs").show();
	})

	$(".pf_ygs").mouseout(function(){
		$(".pf_ygs").hide();
	})

	$(".pf_right_4").mouseenter(function(){
		$(".pf_weixin").show();
	})

	$(".pf_weixin").mouseout(function(){
		$(".pf_weixin").hide();
	})

})
//点击事件

