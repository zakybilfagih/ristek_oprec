from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('api/', include('ristek_webdev_api.urls')),
]
