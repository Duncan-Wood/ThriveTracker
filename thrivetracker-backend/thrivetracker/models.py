from django.db import models
from django.conf import settings

from djmoney.models.fields import MoneyField


class TimeTracker(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='time_trackers', null=True)
    addiction = models.CharField(max_length=150)
    addiction_description = models.TextField()
    start_time = models.DateTimeField()
    end_time = models.DateTimeField(null=True, blank=True, default=None)
    money_per_day = MoneyField(max_digits=10, decimal_places=2, default_currency='USD', null=True, blank=True)
    
    notes = models.ManyToManyField('Note', related_name='time_trackers')
    tokens = models.ManyToManyField('Token', related_name='time_trackers')

    def __str__(self):
        return f'TimeTracker for {self.addiction}'

class Note(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='notes_user')
    title = models.CharField(max_length=150)
    mood = models.CharField(max_length=150, null=True, blank=True)
    triggers = models.TextField(null=True, blank=True)
    body = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    time_tracker = models.ForeignKey(TimeTracker, on_delete=models.CASCADE, related_name='notes_timetracker', null=True, blank=True)

    def __str__(self):
        return self.title

class Token(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='tokens_user')
    name = models.CharField(max_length=150)
    description = models.TextField()
    earned_at = models.DateTimeField(auto_now_add=True)
    time_tracker = models.ForeignKey(TimeTracker, on_delete=models.CASCADE, related_name='tokens_timetracker', null=True, blank=True)

    def __str__(self):
        return self.name
    