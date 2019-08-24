from django.http import JsonResponse
from django.shortcuts import redirect,reverse
from django.utils.deprecation import MiddlewareMixin

from App.models import User


class LoginMiddleware(MiddlewareMixin):

    def process_request(self,request):
        list_path1 = [
            '/eye/cart/',
            '/eye/dingdan/',
            '/eye/order/',
        ]
        list_path2 = [
            '/eye/addcart/',
            '/eye/addproduct/',
            '/eye/subproduct/',
            '/eye/cancel/',
            '/eye/genorder/',
            '/eye/pay/',
            '/eye/index/',
            '/eye/orderdetail/'
        ]
        list_path = list_path1 + list_path2
        if request.path in list_path:
            id = request.session.get('user_id')
            if not id:
                if request.path in list_path1:
                    return redirect(reverse('logoin'))
                else:
                    data = {
                        'status':0,
                        'msg':'请先登录后操作'
                    }
                    return JsonResponse(data)
            else:
                try:
                    user = User.objects.get(id=id)
                    request.user = user
                except:
                    data={
                        'status':-2,
                        'msg':'用户不存在'
                    }
