from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('addiction_calendar.urls')),
]

# Configure Admin Titles
admin.site.site_header = "ThriveTracker Admin"
admin.site.site_title = "ThriveTracker Admin Portal"
admin.site.index_title = "Welcome to the ThriveTracker Admin Portal"

# Everything in the Admin side of Django can be customized.
# navigate to venv/libsite-packages/django/contrib/admin/templates/admin/ or ./templates/admin/