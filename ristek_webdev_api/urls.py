from rest_framework import routers
from .api import CommentViewSet

router = routers.DefaultRouter()
router.register('comment', CommentViewSet, 'comment')

urlpatterns = router.urls