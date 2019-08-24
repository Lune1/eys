$(function () {
    var sum = 0;
    $('.subtotal span').each(function(){
        let e_price = $(this).parent().prev().find('span').text()
        console.log(e_price)
        let num = $(this).parent().prev().prev().find('input').val()
        console.log(num)
        let sumprice = parseFloat(e_price)*parseInt(num)
        $(this).text(sumprice)
        var subs = num;
        var ret = [];
        ret.push(parseFloat(subs));

        for(var j =0;j <ret.length;j++){
            sum += ret[j];
        }
        $("#settlementQuantity").text(sum);
    })

    $('.cancel_btn').click(function () {
        let orderid = $('.order_num').text()
        console.log(orderid)
        $.get('/eye/cancelorder/',{orderid:orderid},function (response) {
            if (response.status == 1){
                location.href = '/eye/kede/'
            }
            else if (response.status == 0){
                location.href = '/eye/logoin/'
            }else{
                alert(response.msg)
            }
        })
    })
    // $('.send_submit').click(function () {
    //     let name = $('.send_name').val()
    //     let phonenumber =$('.phonenumber').val()
    //     let address = $('.address').val()
    //     if (name == '' || phonenumber == '' || address == ''){
    //         alert('请正确输入收货信息')
    //     }
    //     else{
    //         $('.send_message').html(
    //             '<p>姓名:'+name+'</p>'+
    //             '<p>电话号码'+phonenumber+'</p>'+
    //             '<p>地址'+address+'</p>'
    //         )
    //         $('.send_name').val('')
    //         $('.phonenumber').val('')
    //         $('.address').val('')
    //        }
    //
    // })
    $('.aggregate_btn').click(function () {
        let orderid = $('.order_num').text()

        location.href = '/eye/index/'+orderid+'/'
    })


})