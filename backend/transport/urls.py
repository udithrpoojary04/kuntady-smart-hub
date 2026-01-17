from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BusViewSet, TransportServiceViewSet, PlaceViewSet, FeedbackViewSet

router = DefaultRouter()
router.register(r'buses', BusViewSet)
router.register(r'transport-services', TransportServiceViewSet)
router.register(r'places', PlaceViewSet)
router.register(r'feedback', FeedbackViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
