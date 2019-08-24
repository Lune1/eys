import hashlib
import io
import os
import random
import uuid

from django.shortcuts import reverse
from PIL import Image, ImageDraw, ImageFont

from .forms import *
from App.models import *
from EeysPro.settings import BASE_DIR
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from App.alipay.alipay import AliPay


#注册码
def generate_verifycode(request):
    image = Image.new('RGB',(80,35),(100,200,30))
    draw = ImageDraw.Draw(image,'RGB')
    font_path = 'App/static/fonts/ADOBEARABIC-ITALIC.OTF'
    font_path = os.path.join(BASE_DIR,font_path)
    font = ImageFont.truetype(font_path,34)
    code = random_code()
    draw.text((16,4),code,font=font,fill=(0,0,0))
    request.session['validates'] = code
    buff = io.BytesIO()
    image.save(buff,'png')
    return HttpResponse(buff.getvalue(),'image')

#随机生成4位注册码
def random_code():
    string = '1234567890QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopsdfghjklzxcvbnm'
    code = ''
    for i in range(4):
        code += random.choice(string)
    return code

#登录
def logoin(request):
    if request.method == 'POST':
        validates =request.POST.get('validates')
        if request.session['validates'].lower() == validates.lower():
            username = request.POST.get('username')
            passwd = request.POST.get('password')
            user = User.objects.filter(username=username, passwd=my_md5(passwd))
            if user:
                request.session['user_id'] = user.first().id
                return redirect(reverse('kede'))
            else:
                return render(request, 'logoin/logoin.html', {'username_msg': '用户名或密码错误'})
        else:
            return render(request, 'logoin/logoin.html', {'verify_msg': '验证码错误'})
    if request.method == 'GET':
        return render(request,'logoin/logoin.html')
    else:
        return render(request,'logoin/logoin.html')

#注册
def register(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        passwd = request.POST.get('password')
        repasswd = request.POST.get('repassword')
        validates = request.POST.get('validates')
        user = User.objects.filter(username=username).first()
        if request.session['validates'].lower() == validates.lower():
            if user:
                return render(request,'register/register.html', {'username_msg': '用户名已存在'})
            else:
                if passwd !=repasswd:
                    return render(request, 'register/register.html', {'password_msg': '密码不一致'})
                else:
                    user = User()
                    user.username = username
                    user.passwd = my_md5(passwd)
                    user.save()
                    request.session['user_id'] = user.id
                    return redirect(reverse('kede'))
        else:
            return render(request, 'register/register.html', {'verify_msg': '验证码错误'})
    if request.method == 'GET':
        return render(request,'register/register.html',)

#检查用户是否存在
def check_user(request):
    data = {
        'status': 1,
        'msg': 'ok',
    }
    if request.method == 'GET':
        username = request.GET.get('username')
        if username:
            users = User.objects.filter(username=username)
            if users.exists():
                data['data'] = {
                    'username': username,
                    'is_exists': True,
                }
            else:
                data['data'] = {
                    'username': username,
                    'is_exists': False,
                }
        else:
            data['status'] = -1
            data['msg'] = '用户名不能为空'

    else:
        data['status'] = 0
        data['msg'] = '请求方式错误'

    return JsonResponse(data)

# 退出登录
def logout(request):
    del request.user
    request.session.flush()
    return redirect(reverse('logoin'))

#首页
def kede(request):

    id = request.session.get('user_id','')
    username = ''
    cart_num = 0
    if id:
        user = User.objects.get(id=id)
        username = user.username
        carts = Cart.objects.filter(user_id=id)
        cart_num = get_cart_product_num(carts)
    hot_products = Hot_product.objects.all()
    show_products =Show_product.objects.all()
    f5_lunbotu = F5_lunbotu.objects.all()
    data = {
        'cart_num':cart_num,
        'username':username,
        'hot_products':hot_products,
        'show_products':show_products,
        'f5_lunbotus':f5_lunbotu,
    }

    return render(request,'kede/kede.html',data)

#轮播图
def lunbotu(request):
    data = {
        'status':1,
        'msg':'ok'
    }
    if request.method == 'GET':
        db_lunbotus = Dg_lunbotu.objects.all().values()
        data['data'] = list(db_lunbotus)
    else:
        data['status'] = -1
        data['msg'] = '请求方式不对'
    return  JsonResponse(data)

#商品详情
def dingdan(request,id):
    lights = Light.objects.all()
    show_product = Show_product.objects.get(id=id)
    user_id = request.session.get('user_id', '')
    if user_id:
        carts = Cart.objects.filter(user_id=user_id)
        cart_num = get_cart_product_num(carts)
        data = {
            'cart_num':cart_num,
            'lights': lights,
            'show_product':show_product,
        }
        return render(request,'dingdan/dingdan.html',data)
    else:
        return redirect(reverse('logoin'))

#加密
def my_md5(r):
    m= hashlib.md5()
    m.update(r.encode())
    return m.hexdigest()

#购物车
def cart(request):
    carts = Cart.objects.filter(user_id=request.user.id)
    cart_num = get_cart_product_num(carts)
    return render(request,'cart/cart.html',{'carts':carts,'cart_num':cart_num})

#添加购物车
def add_cart(request):
    user = request.user
    data = {
        'status':1,
        'msg':'ok'
    }
    if request.method == 'GET':
        id = request.GET.get('show_id')
        num = request.GET.get('num')
        product = Show_product.objects.get(id=id)
        carts = Cart.objects.filter(goods_id=id,user_id=user.id)
        if not carts.exists():
            cart =Cart()
            cart.goods_id = product.id
            cart.num = num
            cart.user_id = user.id
            cart.save()
        else:
            cart = carts.first()
            cart.num += int(num)
            cart.save()
    else:
        data['status'] = -1
        data['msg'] = '请求方式不对'
    return  JsonResponse(data)

#购物车商品数量增加
def add_product(request):
    data ={
        'status':1,
        'msg':'ok'
    }

    if request.method == 'GET':
        id = request.GET.get('cart_id')
        cart = Cart.objects.get(id=id)
        cart.num +=1
        cart.save()
    else:
        data['status'] = -1
        data['msg'] = '请求方式不对'
    return JsonResponse(data)

#购物车商品数量减少
def sub_product(request):
    data = {
        'status': 1,
        'msg': 'ok'
    }

    if request.method == 'GET':
        id = request.GET.get('cart_id')
        cart = Cart.objects.get(id=id)
        if cart.num > 1:
            cart.num -= 1
            cart.save()

        else:
            cart.delete()
            data['status'] = -2
            data['msg'] = 'ok'
    else:
        data['status'] = -1
        data['msg'] = '请求方式不对'
    return JsonResponse(data)

#删除购物车商品
def del_product (request):
    data = {
        'status': 1,
        'msg': 'ok'
    }

    if request.method == 'GET':
        cart_id = request.GET.get('cartid')
        cart = Cart.objects.filter(id=cart_id).first()
        num = cart.num
        data['num'] = num
        Cart.objects.filter(id=cart_id).delete()  # 删除

    else:
        data['status'] = -3
        data['msg'] = '请求方式错误'

    return JsonResponse(data)

#获取购物车商品总数量
def get_cart_product_num(s):
    cart_num = 0
    for i in s:
        cart_num += int(i.num)
    return cart_num

#订单
def order(request,order_id):
    order=Order.objects.get(order_id=order_id)
    order_products = OrderGoods.objects.filter(order_id=order.id)
    return render(request,'order/order.html',{'order':order,'order_products':order_products})

#订单生成
def gen_order(request):
    data = {
        'status': 1,
        'msg': 'ok'
    }
    if request.method == 'POST':
        order = Order()
        product_id = request.POST.get('productid')
        num = request.POST.get('sum')
        product = Show_product.objects.get(id=product_id)

        order.order_id = gen_ordername()  # 随机唯一订单号
        order.user_id = request.user.id
        order.order_price = int(product.showprice)*int(num)
        order.save()

        order_goods = OrderGoods()
        order_goods.goods_id = product_id
        order_goods.order_id = order.id
        order_goods.num = num
        order_goods.save()
        data['order_id'] = order.order_id
        # return JsonResponse(data)
    elif request.method == 'GET':

        # 生成订单
        order = Order()
        order.order_id = gen_ordername()  # 随机唯一订单号
        order.user_id = request.user.id  # 订单所属用户
        order.save()

        # 生成订单商品: 将当前用户所有选中的购物车商品添加到订单商品表中
        carts = Cart.objects.filter(user_id=request.user.id)
        total = 0  # 订单总价
        for cart in carts:
            order_goods = OrderGoods()
            order_goods.goods_id = cart.goods_id
            order_goods.order_id = order.id
            order_goods.num = cart.num
            order_goods.save()

            # 计算订单的总价
            total += order_goods.num * order_goods.goods.showprice

        # 最后添加订单的总价
        order.order_price = total
        order.save()

        # 删除购物车中已经生成了订单的商品
        carts.delete()

        # 返回订单编号给前端
        data['order_id'] = order.order_id
        # return JsonResponse(data)
    else:
        data['status'] = -3
        data['msg'] = '请求方式错误'

    return JsonResponse(data)

#已付款
def change_status(request,orderid):
  print('Hello')
  order = Order.objects.get(order_id=orderid)
  order.order_status = 1
  order.save()
  return redirect(reverse('kede'))

#取消订单
def cancel_order(request):
    print('cancelorder')
    data = {
        'status':1,
        'msg':'ok'
    }
    if request.method == 'GET':
        orderid = request.GET.get('orderid')
        order = Order.objects.get(order_id=orderid)
        orderproducts = OrderGoods.objects.filter(order_id=order.id)
        for orderproduct in orderproducts:
            cart = Cart()
            cart.goods_id =orderproduct.goods_id
            cart.user_id=order.user_id

            cart.num = orderproduct.num
            cart.save()

        orderproducts.delete()
        order.delete()
    else:
        data = {
            'status':-1,
            'msg':'请求方式错误'
        }
    return JsonResponse(data)

#生成订单号码
def gen_ordername():
    ordername = str(uuid.uuid4())
    return ordername

#订单详情
def order_detail(request):
    orders = Order.objects.filter(user_id=request.user.id)
    # print(orders)
    return render(request,'order_detail/order_detail.html',{'orders':orders})

#查看订单商品
def order_product(request,orderid):
    products = OrderGoods.objects.filter(order_id=orderid)
    return render(request,'order_detail/order_product.html',{'products':products})

#删除订单
def del_order(request):
    data = {
        'status':1,
        'msg':'ok'
    }
    if request.method == 'GET':
        orderid = request.GET.get('orderid')
        print(orderid)
        order = Order.objects.filter(id=orderid).first()
        print(order)
        OrderGoods.objects.filter(order_id=orderid).delete()
        order.delete()

    else:
        data['status'] = -1
        data['msg'] = '请求方式错误'
    return JsonResponse(data)

# 付款
def index(request,orderid):

    return render(request, 'index.html',{'orderid':orderid})


# 支付
def pay(request):
    # 传递参数初始化支付类
    if request.method == 'POST':
        orderid = request.POST.get('orderid')
        order = Order.objects.get(order_id=orderid)
        alipay = AliPay(
            appid="2016100100640323",  # 设置签约的appid
            app_notify_url="http://127.0.0.1:8000/notify/",  # "http://projectsedus.com/",  # 异步支付通知url
            app_private_key_path=r"App/alipay/ying_yong_si_yao.txt",  # 设置应用私钥
            alipay_public_key_path=r"App/alipay/zhi_fu_bao_gong_yao.txt",  # 支付宝的公钥，验证支付宝回传消息使用，不是你自己的公钥,
            debug=True,  # 默认False,            # 设置是否是沙箱环境，True是沙箱环境
            return_url="http://127.0.0.1:8000/eye/changestatus/"+order.order_id+"/",  # "http://47.92.87.172:8000/"  # 同步支付通知url
        )

        # 传递参数执行支付类里的direct_pay方法，返回签名后的支付参数，
        url = alipay.direct_pay(
            subject=order.user.username,  # 订单名称
            # 订单号生成，一般是当前时间(精确到秒)+用户ID+随机数
            out_trade_no=order.order_id,  # 订单号
            total_amount=order.order_price,  # 支付金额
            return_url="http://127.0.0.1:8000/eye/changestatus/"+order.order_id+"/"  # 支付成功后，跳转url
        )

        # 将前面后的支付参数，拼接到支付网关
        # 注意：下面支付网关是沙箱环境，最终进行签名后组合成支付宝的url请求
        re_url = "https://openapi.alipaydev.com/gateway.do?{data}".format(data=url)
        # print(re_url)
        return JsonResponse({'re_url': re_url})
    else:
        return JsonResponse({'msg': '错误请求'})


# 异步支付通知url (上线后使用)
def notify(request):
    print("notify:", dict(request.GET))
    return HttpResponse("支付成功:%s" % (dict(request.GET)))


# 付款成功后跳转的url
def result(request):
    # print("result:", dict(request.GET))
    return redirect(reverse('changestatus'))
    # return HttpResponse("支付成功:%s" % (dict(request.GET)))



