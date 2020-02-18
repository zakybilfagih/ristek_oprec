from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('ristek_webdev_frontend.urls')),
    path('api/', include('ristek_webdev_api.urls')),
    path('admin/', admin.site.urls)
]
