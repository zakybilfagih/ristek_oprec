from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'ristek_webdev_frontend/index.html')