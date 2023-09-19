from django import forms
from django.forms import ModelForm
from .models import Venue

# create a venue form
class VenueForm(ModelForm):
    class Meta:
        model = Venue
        # fields = '__all__'
        fields = ('name', 'address', 'zip_code', 'phone', 'web', 'email_address')
        