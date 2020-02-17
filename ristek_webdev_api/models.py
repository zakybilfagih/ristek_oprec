from django.db import models

# Create your models here.
class Comment(models.Model):
    name = models.CharField(max_length=100, default="Anonymous")
    text = models.TextField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
