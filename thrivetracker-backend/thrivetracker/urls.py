from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import *

router = DefaultRouter()
router.register(r'tokens', TokenViewSet, basename='token')

urlpatterns = [
    # TimeTracker URLs
    path('time-trackers/', TimeTrackerList.as_view(), name='time-tracker-list'),
    path('time-trackers/<int:pk>/', TimeTrackerDetail.as_view(), name='time-tracker-detail'),

    # Note URLs
    path('notes/', NoteListView.as_view(), name='note-list'),
    path('notes/<int:pk>/', NoteDetailView.as_view(), name='note-detail'),
]

urlpatterns += router.urls