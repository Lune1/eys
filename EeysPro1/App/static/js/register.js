$(function(){
	$(":input").focus(function(){
		$(this).css("border-color","#90c31f");
	})
	$(":input").blur(function(){
		$(this).css("border-color","#ccc");

	})

		//点击提交注册

		$("#RegisterSumbitBtn").click(function(){
			// var users = $.cookie("users") ? JSON.parse($.cookie("users")) : [];
			// //注册(cookie存储)
			var check = $('#agree').prop('checked');
			if(!check){
				$('.check_remind').html('请阅读好协议！');
				return;
			}else{
				$('.check_remind').html("");
			}
			//先判断是否存在该用户
			// for (var i=0; i<users.length; i++) {
			// 	if ( users[i].name == $("#RUserName").val() ) {
			// 		$(".name_remind").html("用户名已存在! 不能注册相同的用户");
			// 		return;
			// 	}
			// }

			//判断是否满足所有条件
			if(isTure_name && isTure_pwd && isTure_repwd ){
				//注册用户
				// var user = {
				// 	name: $("#RUserName").val(),
				// 	pwd: $("#RPassword").val()
				//
				// };
				// users.push(user);

				// $.cookie("users", JSON.stringify(users), {expires:22, path:"/"});
				// console.log( $.cookie("users") );

				// window.setTimeout(function(){
				// 	window.location.href = "logoin.html";
				// },6000);
				//
			}else{
				alert("输入信息有误，请重新输入！");
				return false
			}
		});

	//用户名只能为邮箱 /手机号/第一位非数字1的数字字母组合
	//账号的长度在4至20个字符之间
	var isTure_name;
	$("#RUserName").focus().blur(function(){
		var name =$.trim($("#RUserName").val()) ;
		var reg1 = /^1[3578]\d{9}$/g ;
		var reg2 = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g;
		var reg3 = /^(0|[a-zA-Z2-9])\w/g;
		isTure_name = reg1.test(name) || reg2.test(name) || reg3.test(name);
		if(!name || name.length <= 0){
    		$(".name_remind").html('请输入账户名！');
    		$("#RUserName").css("border-color","#ccc");
    		return false;
        }else if(!isTure_name){
			$(".name_remind").html("用户名只能为邮箱 /手机号/第一位非数字1的数字字母组合");
			return false;
		}
		else if(name.length <4 || name.length>20){
			$(".name_remind").html("账号的长度在4至20个字符之间");
			return false;
       }else{
			$(".name_remind").html("");
			isTure_name = true;
		}
	})

	//密码由英文字母、数字组成，长度6-12位。
	//密码为相同字符安全性过低，请重新输入！
	//密码为递增/递减字符安全性过低，请重新输入！
	function occurs(source, target) {
		return source.split(target).length - 1;
	}

	var isTure_pwd;
	$("#RPassword").focus().blur(function(){

		var pwd = $.trim($("#RPassword").val());
		var reg = /^[a-zA-Z0-9]{6,11}$/g;
		isTure_pwd = reg.test(pwd);

		if(!pwd || pwd.length <= 0){
    		$(".pwd_remind").html('请输入密码！');
    		$("#RPassword").css("border-color","#ccc");
    		return false;
        }
		else if(!isTure_pwd){
			$(".pwd_remind").html("密码由英文字母、数字组成，长度6-12位。");
			return false;
		}

		else{
			 var times = occurs(pwd, pwd.substr(0, 1));
			 var easy1 = "0123456789".indexOf(pwd) != -1 ? 1 : 0;
			 var easy2 = "9876543210".indexOf(pwd) != -1 ? 1 : 0;
			 var easy = easy1 + easy2;
			 //密码为相同字符安全性过低，请重新输入！
			 if (pwd.length == times) {
			 	$(".pwd_remind").html("密码为相同字符安全性过低，请重新输入!");
			 	return false;
			 }
			 //密码为递增/递减字符安全性过低，请重新输入！
			 else if(easy == 1){
			 	$(".pwd_remind").html("密码为递增/递减字符安全性过低，请重新输入！");
			 	return false;
			 }else{
			 	$(".pwd_remind").html("");
			isTure_pwd;
			 }
		}
	})

//	设置密码与确认密码一致
  	var isTure_repwd;
	$("#RRePassword").focus().blur(function(){
		var rePwd = $.trim($("#RRePassword").val());
		var pwd = $.trim($("#RPassword").val());

		if(rePwd.length <= 0){
			$(".conf_remind").html("请输入确认密码");
			isTure_repwd = false;
		}
		else if(rePwd != pwd){
			$(".conf_remind").html("两次密码不一致");
			isTure_repwd =  false;
		}else{
			$(".conf_remind").html("");
			isTure_repwd = true;
		}
	})

	// var isTure_verify;
	//  $(".txt").click(function(){
	// // 产生随机验证码  包含数字和大写字母
	// 	var ret="";
	// 	for(var i=0;i<4;i++){
	// 		var isTrue=parseInt(Math.random()*100)%3;//0 出现数字     1大写字母    2小写字母
	// 		if(isTrue==0){
	// 			var num=parseInt(Math.random()*100)%10+48;
	// 		}else if(isTrue==1){
	// 			var num=parseInt(Math.random()*100)%26+65;
	// 		}else{
	// 			var num=parseInt(Math.random()*100)%26+97;
	// 		}
	// 		var s=String.fromCharCode(num);
	// 		ret=ret.concat(s);
	// 	}
	// 	$(".txt").html(ret);
	//
	// 	$('#regValidate').focus().blur(function(){
	// 		var regValidate = $("#regValidate").val();
	// 		if(!regValidate || regValidate.length <= 0){
	// 			$('.verify_remind').html('请输入验证码！');
	// 			isTure_verify = false;
	// 		}
	// 		else if(regValidate != ret){
	// 			$('.verify_remind').html('验证码输入错误');
	// 			isTure_verify = false;
	// 		}else if(regValidate == ret){
	// 			$('.verify_remind').html('');
	// 			isTure_verify = true;
	// 		}
	//
	// 	})
	// }).triggerHandler('click');

	//清除
	// 	$("#clearCart").click(function(){
	// 		//删除cookie
	// 		$.cookie("users"," ", {expires:0, path:"/"});
	// 	})

});
