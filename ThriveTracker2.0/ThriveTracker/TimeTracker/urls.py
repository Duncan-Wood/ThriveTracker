from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('<int:year>/<str:month>/', views.home, name="home"),
    path('my_timetrackers/', views.my_timetrackers, name='my-timetrackers'),
    # path('show_timetracker/<timetracker_id>', views.show_timetracker, name='show-timetracker'),
    # path('add_timetracker', views.add_timetracker, name="add-timetracker"),
    # path('update_timetracker/<timetracker_id>',
    #   views.update_timetracker, name='update-timetracker'),
    # path('delete_timetracker/<timetracker_id>',
    #   views.delete_timetracker, name='delete-timetracker'),
]
