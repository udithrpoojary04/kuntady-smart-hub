from rest_framework import viewsets, permissions
from .models import Bus, TransportService, Place, Feedback
from .serializers import BusSerializer, TransportServiceSerializer, PlaceSerializer, FeedbackSerializer

class BusViewSet(viewsets.ModelViewSet):
    queryset = Bus.objects.all()
    serializer_class = BusSerializer
    # Allow read-only for public, admin required for modifications
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class TransportServiceViewSet(viewsets.ModelViewSet):
    queryset = TransportService.objects.all()
    serializer_class = TransportServiceSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class PlaceViewSet(viewsets.ModelViewSet):
    queryset = Place.objects.all()
    serializer_class = PlaceSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class FeedbackViewSet(viewsets.ModelViewSet):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer
    # Allow anyone to post, only admin to list/retrieve
    def get_permissions(self):
        if self.action in ['create']:
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]
