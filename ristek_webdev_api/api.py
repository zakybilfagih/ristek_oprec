from rest_framework import viewsets, permissions
from .models import Comment
from .serializers import CommentSerializer

# Serializer Viewset
class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes=[
        permissions.AllowAny
    ]

    def destroy(self, request, pk=None):
        pass