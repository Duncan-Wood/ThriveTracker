from django.db import models
from django.contrib.auth.models import User
from datetime import date
from django.utils import timezone


class TimeTracker(models.Model):
    name = models.CharField('TimeTracker Name', max_length=200)
    created_at = models.DateTimeField('Created At', default=timezone.now)
    end_date = models.DateTimeField('End Date', null=True, blank=True)
    # venue = models.ForeignKey(Venue, blank=True, null=True, on_delete=models.CASCADE)
    thrivetracker_user = models.ForeignKey(User, blank = True, null = True, on_delete=models.SET_NULL)
    description = models.TextField('Addiction Description', blank=True)
    addiction = models.CharField('Addiction', max_length=200)
    # attendees = models.ManyToManyField(ThriveTrackerUser, blank=True)
    # approved = models.BooleanField('Aprroved', default=False)

    def __str__(self):
        return self.name

    @property
    def current_streak(self):
        """Returns the current streak length as a string."""
        today = date.today()
        streak_length = today - self.created_at.date()
        streak_length_stripped = str(streak_length).split(',', 1)[0]
        return streak_length_stripped

    @property
    def streak_ended(self):
        """Returns True if the end_date is in the past or if it's None, False otherwise."""
        today = date.today()
        if self.end_date is None:
            return True  # Treat None as the streak having ended
        elif self.end_date.date() < today:
            return True
        else:
            return False
        