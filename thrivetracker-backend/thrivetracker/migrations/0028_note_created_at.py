# Generated by Django 4.2 on 2023-04-16 17:22

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('thrivetracker', '0027_remove_useraddiction_user_delete_saving_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='note',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
