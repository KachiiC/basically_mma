# Generated by Django 3.1.1 on 2020-10-16 18:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend_api', '0003_auto_20201009_1848'),
    ]

    operations = [
        migrations.AddField(
            model_name='mmavideo',
            name='playlist_id',
            field=models.CharField(default='playlist', max_length=40),
            preserve_default=False,
        ),
    ]