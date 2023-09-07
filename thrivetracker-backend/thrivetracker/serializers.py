from rest_framework import serializers
from .models import *

class TokenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Token
        fields = '__all__'

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'
        
class TimeTrackerSerializer(serializers.ModelSerializer):
    notes = NoteSerializer(many=True, read_only=True)
    tokens = TokenSerializer(many=True, read_only=True)

    class Meta:
        model = TimeTracker
        fields = '__all__'