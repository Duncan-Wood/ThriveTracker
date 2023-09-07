# Generated by Django 4.2 on 2023-04-10 13:58

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('thrivetracker', '0011_rename_name_step_step'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('money_tracker', models.ManyToManyField(to='thrivetracker.moneytracker')),
                ('time_tracker', models.ManyToManyField(to='thrivetracker.timetracker')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('user_addiction', models.ManyToManyField(to='thrivetracker.useraddiction')),
                ('user_step', models.ManyToManyField(to='thrivetracker.userstep')),
            ],
        ),
    ]