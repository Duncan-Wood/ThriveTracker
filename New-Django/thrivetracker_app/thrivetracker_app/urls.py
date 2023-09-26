from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('addiction_calendar.urls')),
    path('members/', include('django.contrib.auth.urls')),
    path('members/', include('members.urls')),
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)

# Configure Admin Titles
admin.site.site_header = "ThriveTracker Admin"
admin.site.site_title = "ThriveTracker Admin Portal"
admin.site.index_title = "Welcome to the ThriveTracker Admin Portal"

# Everything in the Admin side of Django can be customized.
# navigate to venv/libsite-packages/django/contrib/admin/templates/admin/ or ./templates/admin/