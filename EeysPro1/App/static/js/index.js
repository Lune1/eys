$(function () {

    // 点击支付
    $('#pay').click(function () {
            let orderid = $(this).attr('orderid')
        // 将订单id提交后台， 后台根据订单id获取订单信息（订单编号，订单金额等）
        $.post("/eye/pay/",{orderid:orderid}, function (data) {
            console.log(data);
            let re_url = data.re_url;
            location.href = re_url;
        });

    });

});

