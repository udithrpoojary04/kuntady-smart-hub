from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BusViewSet, TransportServiceViewSet, PlaceViewSet, FeedbackViewSet, AnnouncementViewSet, ChatAPIView

router = DefaultRouter()
router.register(r'buses', BusViewSet)
router.register(r'transport-services', TransportServiceViewSet)
router.register(r'places', PlaceViewSet)
router.register(r'feedback', FeedbackViewSet)
router.register(r'announcements', AnnouncementViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('chat/', ChatAPIView.as_view(), name='chat'),
]
