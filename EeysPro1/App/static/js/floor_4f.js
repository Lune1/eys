// $(function(){
// 	$.get("json/floor_4f.json",function(data){
// 		for(var i=0; i<data.length; i++){
// 			var obj = data[i];
// 			var li = $('<li></li>');
// 			var a = $('<a href="#"></a>');
//
// 			var span1 = $("<span></span>");
// 			span1.addClass('wide_4f_li_img');
// 			var imgs = $("<img src=" + obj.img + " />");
// 			span1.append(imgs);
//
// 			var span2 = $("<span>" + obj.sales + "</span>");
// 			span2.addClass('wide_4f_li_sales');
// 			var span3 = $("<span>" + obj.name + "</span>");
// 			span3.addClass('wide_4f_li_name');
// 			var span4 = $("<span>" + obj.price + "</span>");
// 			span4.addClass('wide_4f_li_price');
//
// 			a.append(span1,span2,span3,span4);
// 			li.append(a);
// 			$("#wide_4f_ul").append(li);
// 		}
// 	})
// })
