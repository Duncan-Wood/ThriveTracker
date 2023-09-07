from .models import *
from .serializers import *
from rest_framework import generics

from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

# bypassing csrf token
from django.views.decorators.csrf import csrf_exempt

class TimeTrackerList(generics.ListCreateAPIView):
    queryset = TimeTracker.objects.all()
    serializer_class = TimeTrackerSerializer
    authentication_classes = []
    permission_classes = []

class TimeTrackerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = TimeTracker.objects.all()
    serializer_class = TimeTrackerSerializer
    authentication_classes = []
    permission_classes = []

# bypassing csrf token
time_tracker_list = csrf_exempt(TimeTrackerList.as_view())
time_tracker_detail = csrf_exempt(TimeTrackerDetail.as_view())

class NoteListView(generics.ListCreateAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

class NoteDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

class TokenViewSet(viewsets.ModelViewSet):
    queryset = Token.objects.all()
    serializer_class = TokenSerializer

    @action(detail=False, methods=['get'])
    def earned_tokens(self, request):
        user = self.request.user
        tokens = Token.objects.filter(user=user)
        serializer = self.get_serializer(tokens, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'])
    def token_detail(self, request, pk=None):
        token = self.get_object()
        serializer = self.get_serializer(token)
        return Response(serializer.data)