//
// //location.href
// //loaction.serach（取得网址？...字符串）
//
// $(function(){
// 	$.get("json/floor_2.json",function(data){
// 		for(var i=0; i<data.length; i++){
// 			var obj = data[i];
// 			var div = $('<div></div>');
// 			div.addClass('wide_f_item');
//
// 			var a = $('<a href=dingdan_axjs.html?id='+obj.id+'></a>');
//
// 			var imgs = $("<img src=" + obj.img + " />");
// 			imgs.addClass('wide_f_item_img');
//
// 			var price = $("<lable>"+ obj.price+"</lable>");
// 			price.addClass('wide_f_item_price');
//
// 			var name = $("<lable>" + obj.name+ "</lable>");
// 			name.addClass('wide_f_item_name');
//
// 			var sales = $("<lable>" + obj.sales+ "</lable>");
// 			sales.addClass('wide_f_item_sales');
// 			a.append(imgs,price,name,sales);
//
// 			div.append(a);
// 			$('.wide_f_right').append(div);
// 		}
// 	})
// // 	$.get("json/floor_22.json",function(data){
// // 		for(var i=0; i<data.length; i++){
// // 			var obj = data[i];
// // 			var div = $('<div></div>');
// // 			div.addClass('wide_f_item');
// //
// // 			var a = $('<a href="#"></a>');
// //
// // 			var imgs = $("<img src=" + obj.img + " />");
// // 			imgs.addClass('wide_f_item_img');
// //
// // 			var price = $("<lable>"+ obj.price+"</lable>");
// // 			price.addClass('wide_f_item_price');
// //
// // 			var name = $("<lable>" + obj.name+ "</lable>");
// // 			name.addClass('wide_f_item_name');
// //
// // 			var sales = $("<lable>" + obj.sales+ "</lable>");
// // 			sales.addClass('wide_f_item_sales');
// // 			a.append(imgs,price,name,sales);
// //
// // 			div.append(a);
// // 			$('.wide_r_b').append(div);
// // 		}
// // 	})
// //
// })
