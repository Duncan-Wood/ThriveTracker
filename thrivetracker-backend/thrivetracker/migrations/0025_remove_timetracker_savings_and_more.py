# Generated by Django 4.2 on 2023-04-13 18:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('thrivetracker', '0024_timetracker_addiction_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='timetracker',
            name='savings',
        ),
        migrations.RemoveField(
            model_name='timetracker',
            name='user_addiction',
        ),
    ]