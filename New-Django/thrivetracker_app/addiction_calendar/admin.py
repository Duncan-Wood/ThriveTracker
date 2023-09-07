from django.contrib import admin

from .models import Venue
from .models import ThriveTrackerUser
from .models import Event

admin.site.register(Venue)
admin.site.register(ThriveTrackerUser)
admin.site.register(Event)