from django.db import models

# Create your models here.
#用户
class User(models.Model):
    username = models.CharField(max_length=20)
    passwd = models.CharField(max_length=255)
    class Meta:
        db_table = 'eye_user'


#热门商品
class Hot_product(models.Model):
    productname = models.CharField(max_length=30)
    productimg = models.CharField(max_length=100)
    product_new_price = models.FloatField()
    product_prev_price = models.FloatField()
    product_level = models.CharField(max_length=100)
    product_hot_num = models.CharField(max_length=100)
    class Meta:
        db_table = 'eye_hot_product'

#商品展示
class Show_product(models.Model):
    showname = models.CharField(max_length=40)
    showimg = models.CharField(max_length=100)
    showprice = models.FloatField()
    show_sale = models.CharField(max_length=50)
    class Meta:
        db_table = 'eye_show_product'

 #轮播图
class Dg_lunbotu(models.Model):
    db_id = models.IntegerField()
    db_img = models.CharField(max_length=100)
    db_color = models.CharField(max_length=50)
    class Meta:
        db_table = 'eye_db_lunbotu'


#5楼轮播图
class F5_lunbotu(models.Model):
    f5_img = models.CharField(max_length=100)
    class Meta:
        db_table = 'eye_5f_lunbotu'

#光度
class Light(models.Model):
    light = models.CharField(max_length=20)
    class Meta:
        db_table = 'eye_light'

#购物车
class Cart(models.Model):
    goods = models.ForeignKey(Show_product,on_delete=models.DO_NOTHING)  # 商品
    user = models.ForeignKey(User,models.DO_NOTHING)  # 用户
    num = models.IntegerField(default=1)  # 商品数量
    is_select = models.BooleanField(default=True)  # 勾选状态

    class Meta:
        db_table = 'eye_cart'


# 订单
#  一个用户可以有多个订单， 用户:订单=1:N
class Order(models.Model):
    order_id = models.CharField(max_length=200, unique=True)  # 订单编号
    order_create = models.DateTimeField(auto_now_add=True)  # 订单的创建时间
    order_price = models.FloatField(default=0)  # 订单价格
    # 订单状态： 0表示未支付， 1表示已支付，2表示待评价，3已退款，4订单已取消,...
    order_status = models.IntegerField(default=0)  # 订单状态
    user = models.ForeignKey(User,on_delete=models.DO_NOTHING)  # 订单所属的用户

    class Meta:
        db_table = 'eye_order'


class OrderGoods(models.Model):
    goods = models.ForeignKey(Show_product,on_delete=models.DO_NOTHING)  # 商品
    order = models.ForeignKey(Order,on_delete=models.DO_NOTHING)  # 所属订单
    num = models.IntegerField()  # 商品数量

    class Meta:
        db_table = 'eye_orderproduct'

# class SendMeaasge(models.Model):
#     name = models.CharField(max_length=20)
#     phonenum = models.CharField(max_length=30)
#     address = models.CharField(max_length=150)
#     order = models.ForeignKey(Order,on_delete=models.DO_NOTHING)
#
#     class Meta:
#         db_table = 'eye_orderproduct'