from django import forms
from django.contrib import auth
from django.contrib.auth.models import User
class RegisterForm(forms.Form):
    username = forms.CharField(
        required=True,
        max_length=20,
        min_length=6,
        error_messages={
            'required':'用户名必须填写',
            'max_length':'用户名最大长度不超过20字符',
            'min_length':'用户名最小长度不低于字符',
        }
    )
    password = forms.CharField(
        required=True,
        max_length=20,
        min_length=6,
        error_messages={
            'required': '密码必须填写',
            'max_length': '密码最大长度不超过20字符',
            'min_length': '密码最小长度不低于字符',
        }
    )
    repassword = forms.CharField(
        required=True,
        max_length=20,
        min_length=6,
        error_messages={
            'required': '密码必须填写',
            'max_length': '密码最大长度不超过20字符',
            'min_length': '密码最小长度不低于字符',
        }
    )

    def clean(self):
        username = self.cleaned_data.get('username')
        password = self.cleaned_data.get('password')
        repassword = self.cleaned_data.get('repassword')

        if password != repassword:
            raise forms.ValidationError({'repassword':'两次密码不一致'})
        if User.objects.filter(username=username).exists():
            raise forms.ValidationError({'username':'用户名已存在'})
        return self.cleaned_data

class LoginForm(forms.Form):
    username = forms.CharField(
        required=True,
        max_length=20,
        min_length=6,
        error_messages={
            'required': '用户名必须填写',
            'max_length': '用户名最大长度不超过20字符',
            'min_length': '用户名最小长度不低于字符',
        }
    )
    password = forms.CharField(
        required=True,
        max_length=20,
        min_length=6,
        error_messages={
            'required': '密码必须填写',
            'max_length': '密码最大长度不超过20字符',
            'min_length': '密码最小长度不低于字符',
        }
    )
    def clean(self):
        username = self.cleaned_data.get('username')
        password = self.cleaned_data.get('password')
        if not User.objects.filter(username=username).exists():
            raise forms.ValidationError({'username':'用户名不存在'})
        return self.cleaned_data

