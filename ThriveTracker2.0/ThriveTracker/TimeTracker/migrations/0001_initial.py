# Generated by Django 4.2.5 on 2023-09-29 22:18

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='TimeTracker',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200, verbose_name='TimeTracker Name')),
                ('created_at', models.DateTimeField(default=datetime.date.today, verbose_name='Created At')),
                ('end_date', models.DateTimeField(blank=True, null=True, verbose_name='End Date')),
                ('description', models.TextField(blank=True, verbose_name='Addiction Description')),
                ('addiction', models.CharField(max_length=200, verbose_name='Addiction')),
                ('timetracker_user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
