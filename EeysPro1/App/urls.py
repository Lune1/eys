from django.urls import path

from App.views import *

# app_name = 'app'
urlpatterns = [
    path('logoin/',logoin,name='logoin'),
    path('logout/',logout,name='logout'),
    path('register/',register,name='register'),
    path('verify/',generate_verifycode,name='verify'),
    path('kede/',kede,name='kede'),
    path('lunbotu/',lunbotu,name='lunbotu'),
    path('checkuser/',check_user,name='checkuser'),
    path('dingdan/<id>/',dingdan,name='dingdan'),

    path('cart/',cart,name='cart'),
    path('addcart/',add_cart,name='addcart'),
    path('addproduct/',add_product,name='addproduct'),
    path('subproduct/',sub_product,name='subproduct'),
    path('delproduct/',del_product,name='delproduct'),

    path('genorder/',gen_order,name='genorder'),
    path('cancelorder/',cancel_order,name='cancelorder'),
    path('order/<order_id>/',order,name='order'),
    path('orderdetail/',order_detail,name='orderdetail'),
    path('delorder/',del_order,name='delorder'),
    path('orderproduct/<orderid>/',order_product,name='orderproduct'),
    path('changestatus/<orderid>/',change_status,name='changestatus'),

    path('index/<orderid>/',index,name='index'),
    path('pay/',pay,name='pay'),
    path('notify/',notify,name='notify'),
    path('result/',result,name='result'),
    #首页商品
]