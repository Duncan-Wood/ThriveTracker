from django.db import models
from django.contrib.auth.models import User
from datetime import date

class Venue(models.Model):
    name = models.CharField('Venue Name', max_length=200)
    address = models.CharField('Venue Address', max_length=300)
    zip_code = models.CharField('Venue Zip Code', max_length=15)
    phone = models.CharField('Venue Phone', max_length=20, blank=True)
    web = models.URLField('Venue Website', blank=True)
    email_address = models.EmailField('Venue Email', blank=True)
    owner = models.IntegerField('Venue Owner', blank=False, default = 1)
    venue_image = models.ImageField('Venue Image', upload_to='images/', blank=True, null=True)

    def __str__(self):
        return self.name

# eventually need to change this to user and use it in Event model    
class ThriveTrackerUser(models.Model):
    first_name = models.CharField('First Name', max_length=200)
    last_name = models.CharField('Last Name', max_length=200)
    username = models.CharField('Username', max_length=200)
    email = models.EmailField('Email Address')

    def __str__(self):
        return self.first_name + ' ' + self.last_name

class Event(models.Model):
    name = models.CharField('Event Name', max_length=200)
    event_date = models.DateTimeField('Event Date')
    # This is how we connect Event to Venue in a one-to-many relationship
    venue = models.ForeignKey(Venue, blank=True, null=True, on_delete=models.CASCADE)
    manager = models.ForeignKey(User, blank = True, null = True, on_delete=models.SET_NULL)
    description = models.TextField('Event Description', blank=True)
    # This is how we connect Event to ThriveTrackerUser in a many-to-many relationship
    attendees = models.ManyToManyField(ThriveTrackerUser, blank=True)
    approved = models.BooleanField('Aprroved', default=False)

    def __str__(self):
        return self.name
    
    @property
    def Days_till(self):
        today = date.today()
        days_till = self.event_date.date() - today
        days_till_stripped = str(days_till).split(',', 1)[0]
        return days_till_stripped
    
    @property
    def Is_Past(self):
        today = date.today()
        if self.event_date.date() > today:
            return True
        else:
            return False