$(function () {
    $('.delete').click(function () {
        let orderid = $(this).attr('orderid')
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
            $.get('/eye/delorder/',{orderid:orderid},function (response) {
                if (response.status == 1){
                    let value = parseInt($('#gwc_count').text())-parseInt(response['num'])
                    $("#gwc_count").text(value);
                    $("#settlementQuantity").text(value);
                    $("#conform").hide();
                    that.parent().siblings('#cartItemContainer').find('.cart_product_item').eq(index).remove();
            }
            else if (response.status == 0){
                location.href = '/logoin/'
                }
            else{
                alert(response.msg)
                }
        })
    })
    })
})