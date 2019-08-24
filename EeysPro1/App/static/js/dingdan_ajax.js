// $(function(){
// 	var str = window.location.search.substr().split("?")[1];
// 	var id = str.split("=")[1];
// 	console.log(id);
//
// 	$.get("json/floor_2.json",function(data){
// 		for(var i=0; i<data.length; i++){
// 			var obj = data[i];
// 			if(id == obj.id){
// 				$('title').html(obj.name);
// 				$(' #d_img1').attr('src',obj.img);
// 				$('#bigArea img').attr('src',obj.img);
// 				$(".details_top_name span").html(obj.name);
// 				var string = obj.price;
// 				var m_price = string.split('￥')[1];
// 				$(".message_price span").html(m_price);
// 			}
// 		}
//
// 	})
// })