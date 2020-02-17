from rest_framework import serializers
from ristek_webdev_api.models import Comment

# Comment Serializer
class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = "__all__"