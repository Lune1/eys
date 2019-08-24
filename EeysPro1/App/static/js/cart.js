$(function(){
		console.log('cart.js')
		//点击免费注册，跳转到注册页面
		// $('.register').click(function(){
		// 	window.location.href = "register.html";
		// })

		//点击继续购物，跳转首页
		$("#cart_continue").click(function(){
			location.href = "/eye/kede/";
		})


		var sumTotal = 0;
					$('.subtotal span').each(function(){
						let e_price = $(this).parent().prev().find('span').text()
						console.log(e_price)
						let num = $(this).parent().prev().prev().find('input').val()
						console.log(num)
						let sumprice = parseFloat(e_price)*parseInt(num)
						$(this).text(sumprice)
						var subs = sumprice;
						var ret = [];
						ret.push(parseFloat(subs));

						for(var j =0;j <ret.length;j++){
							sumTotal += ret[j];
						}
					})
					$("#settlementTotalMoney").text((sumTotal).toFixed(2));
					$("#settlementRealTotalMoney").text( (sumTotal).toFixed(2));


		//获取cookie信息
		// var goodsList = $.cookie("cart");
		// var isExists = false; //表示是否存在相同商品
		// var select = 0;
		// var Tol_price = 0;
		// var sum = 0;
		// if (goodsList) {
		// 	goodsList = JSON.parse(goodsList);
		// 	for (var i=0; i<goodsList.length; i++) {
		// 		var goods = goodsList[i];
		//
		// 		var div1 = $("<div></div>");
		// 		div1.addClass('cart_product_item');
		// 		div1.appendTo("#cartItemContainer");
		//
		// 		var ul = $("<ul></ul>");
		// 		ul.addClass('cart_product_ul');
		// 		ul.appendTo(div1);
		//
		// 		var li1 = $("<li></li>" );
		// 		li1.addClass('product');
		// 		var a = $('<a href = " + # +" + >' +'</a>');
		// 		var imgs = $("<img src = " + goods.id + "/>");
		// 		var lable = $("<lable>"+goods.name+"</lable>");
		// 		lable.addClass('product_name');
		//
		// 		a.appendTo(li1);
		// 		imgs.appendTo(a);
		// 		lable.appendTo(li1);
		// 		li1.appendTo(ul);
		//
		// 		var li2 = $("<li></li>" );
		// 		li2.addClass('quantity');
		// 		li2.appendTo(ul);
		// 		var p1 = $("<p></p>");
		// 		p1.addClass('minus');
		// 		p1.text("-");
		// 		var inputs = $("<input type='text' id= 'quantity_input' value='' />");
		// 		inputs.addClass('quantity_input');
		// 		inputs.val(goods.num);
		// 		var p2 = $("<p></p>");
		// 		p2.addClass('plus');
		// 		p2.text("+");
		// 		p1.appendTo(li2);
		// 		inputs.appendTo(li2);
		// 		p2.appendTo(li2);
		//
		// 		var li3 = $("<li></li>");
		// 		li3.addClass('price');
		// 		li3.text("￥");
		// 		li3.appendTo(ul);
		// 		var span1 = $("<span>" + goods.price +"</span>" );
		// 		span1.addClass('item_line_height');
		// 		span1.appendTo(li3);
		//
		// 		var li4 = $("<li></li>");
		// 		li4.addClass('subtotal');
		// 		li4.text("￥");
		// 		li4.appendTo(ul);
		// 		var span2 = $("<span>" + (parseFloat(goods.price) *parseInt(goods.num)).toFixed(2) +"</span>");
		// 		span2.addClass('item_line_height');
		// 		span2.appendTo(li4);
		//
		//
		// 		var li5 = $("<li></li>");
		// 		li5.addClass('operation');
		// 		li5.appendTo(ul);
		// 		var div3 = $("<div></div>");
		// 		div3.addClass('item_line_height');
		// 		div3.appendTo(li5);
		// 		var p51 = $("<p></p>");
		// 		p51.appendTo(div3);
		// 		var a51 = $("<a href='#' class='save'></a>");
		// 		a51.text("加入收藏夹");
		// 		a51.appendTo(p51);
		//
		// 		var p52 = $("<p></p>");
		// 		p52.appendTo(div3);
		// 		var a52 = $("<a href='#' class='delete'></a>");
		// 		a52.text("删除");
		// 		a52.appendTo(p52);
		//
		//
		// 		sum += goods.num;
		// 		price_sum = parseInt(goods.num) * parseFloat(goods.price);
		// 		Tol_price += price_sum;
		// 		Tol_prices = parseFloat(Tol_price).toFixed(2);
		//
		//
		// 	})
		// 	let id = $('.quantity').attr('cart_id')
		// 	$.ajax('get','/eye/price/',)
		// 	$("#gwc_count").text(sum);
		// 	$("#settlementQuantity").text(sum);
		// 	$("#settlementTotalMoney").text( Tol_prices);
		// 	$("#settlementRealTotalMoney").text(Tol_prices);


			//	数量的加减
			$(".plus").click(function(){
				var index = $(this).index('.plus');
				var count = $(this).parent().find("input");
		    	var value = parseInt(count.val()); //数目
				let cart_id =$(this).parent().attr('cart_id')
				let e_price = $('.item_line_height').html()
				$.get('/eye/addproduct/',{cart_id:cart_id},function (response) {
					if (response.status == 1){
						value = value +1;
						count.val(value);
						let value1 = parseInt($('#gwc_count').text())+1
						$("#gwc_count").text(value1);
						$("#settlementQuantity").text(value1);

					}
					else if (response.status == 0){
						location.href = '/eye/logoin/'
					}
				})



//				}


				// select ++;
				// var totalCount = select + sum;



				//计算总和
				var sumTotal = 0;
					$('.subtotal span').each(function(){
						let e_price = $(this).parent().prev().find('span').text()
						console.log(e_price)
						let num = $(this).parent().prev().prev().find('input').val()
						console.log(num)
						let sumprice = parseFloat(e_price)*(parseInt(num)+1)
						$(this).text(sumprice)
						var subs = sumprice;
						var ret = [];
						ret.push(parseFloat(subs));

						for(var j =0;j <ret.length;j++){
							sumTotal += ret[j];
						}
					})
					$("#settlementTotalMoney").text((sumTotal).toFixed(2));
					$("#settlementRealTotalMoney").text( (sumTotal).toFixed(2));



			})



			$(".minus").click(function(){
				var index = $(this).index('.minus');

				var count = $(this).parent().find("input");
				let cart_id =$(this).parent().attr('cart_id')
				$.get('/eye/subproduct/',{cart_id:cart_id},function (response) {
					if (response.status == 1) {
						var value = parseInt(count.val()) - 1
						count.val(value);
						let value1 = parseInt($('#gwc_count').text())-1
						$("#gwc_count").text(value1);
						$("#settlementQuantity").text(value1);
							// select --;
							// var totalCount = select + sum;
						var sumTotal = 0;
					$('.subtotal span').each(function(){
						let e_price = $(this).parent().prev().find('span').text()
						console.log(e_price)
						let num = $(this).parent().prev().prev().find('input').val()
						console.log(num)
						let sumprice = parseFloat(e_price)*(parseInt(num))
						$(this).text(sumprice)
						var subs = sumprice;
						var ret = [];
						ret.push(parseFloat(subs));

						for(var j =0;j <ret.length;j++){
							sumTotal += ret[j];
						}
					})
					$("#settlementTotalMoney").text((sumTotal).toFixed(2));
					$("#settlementRealTotalMoney").text( (sumTotal).toFixed(2));

					}
					else if (response.status == 0){
						location.href = '/logoin/'
					}
					else if(response.status == -2){
						$("#conform").show();
					$('.delect_false').click(function(){
						$("#conform").hide();
					})
					$('.delect_true').click(function(){
						let value1 = parseInt($('#gwc_count').text())-1
						$("#gwc_count").text(value1);
						$("#settlementQuantity").text(value1);
						$("#conform").hide();
						$(this).parent().siblings('#cartItemContainer').find('.cart_product_item').eq(index).remove();
						var sumTotal = 0;
						$('.subtotal span').each(function(){
							let e_price = $(this).parent().prev().find('span').text()
							console.log(e_price)
							let num = $(this).parent().prev().prev().find('input').val()
							console.log(num)
							let sumprice = parseFloat(e_price)*(parseInt(num))
							$(this).text(sumprice)
							var subs = sumprice;
							var ret = [];
							ret.push(parseFloat(subs));

							for(var j =0;j <ret.length;j++){
								sumTotal += ret[j];
							}
						})
						$("#settlementTotalMoney").text((sumTotal).toFixed(2));
						$("#settlementRealTotalMoney").text( (sumTotal).toFixed(2));


					})
					}
					})

				})
		    	 //数目


			//点击收藏
			$(".save").click(function(){
				$("#quickLogin2").show();
			})

			//点击删除

			$(".delete").click(function(){
				let cart_id =$(this).attr('cartid')

				var index = $(this).index('.delete');
				$("#conform").show();
				$(".delect_title i").click(function(){
					$("#conform").hide();
				})
				$('.delect_false').click(function(){
					$("#conform").hide();
				})
				$('.delect_true').click(function(){
					let that =$(this)
					$.get('/eye/delproduct/',{cartid:cart_id},function (response) {
					if (response.status == 1){
						let value = parseInt($('#gwc_count').text())-parseInt(response['num'])
						$("#gwc_count").text(value);
						$("#settlementQuantity").text(value);
					$("#conform").hide();
					that.parent().siblings('#cartItemContainer').find('.cart_product_item').eq(index).remove();
					//计算总和
					var sumTotal = 0;
					$('.subtotal span').each(function(){
						let e_price = $(this).parent().prev().find('span').text()
						console.log(e_price)
						let num1 = $(this).parent().prev().prev().find('input').val()
						console.log(num1)
						let sumprice = parseFloat(e_price)*parseInt(num1)
						$(this).text(sumprice)
						var subs = sumprice;
						var ret = [];
						ret.push(parseFloat(subs));

						for(var j =0;j <ret.length;j++){
							sumTotal += ret[j];
						}
					})
					$("#settlementTotalMoney").text((sumTotal).toFixed(2));
					$("#settlementRealTotalMoney").text( (sumTotal).toFixed(2));

					var length = parseInt($('.cart_product_item').length);
					console.log(length)
					if(length == 0){
						$(".cart_null").show();
						$(".cart_explain").hide();
						$(".cart_continue").hide();
						$(".cart_meet").hide();
						// $.cookie("cart"," ", {expires:0, path:"/"});
					}

					}
					else if (response.status == 0){
						location.href = '/logoin/'
					}
				})
				})
			})

	// })
		
	// if(goodsList == undefined){
	// 	$(".cart_null").show();
	// 	$(".cart_explain").hide();
	// 	$(".cart_continue").hide();
	// 	$(".cart_meet").hide();
	// }
	$('.aggregate_btn').click(function () {

        $.get('/eye/genorder/', function (response) {
        	console.log(response)
            if (response.status == 1){
            	location.href = '/eye/order/'+ response.order_id +'/'
			}
            else if (response.status == 0){
            	location.href == '/eye/logoin/'
			}
			else{
				alert(response.msg)
			}
        })

    })
	
})
