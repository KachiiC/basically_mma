from django.db import models


class MMAPlaylist(models.Model):
    playlist_id = models.CharField(max_length=40, blank=True)
    playlist_name = models.CharField(max_length=100)
    playlist_video = models.ManyToManyField('MMAVideo', blank=True)
    playlist_description = models.TextField()


class MMAVideo(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    video_id = models.CharField(max_length=200, unique=True)
    thumbnail_url = models.CharField(max_length=250)
    playlist_id = models.CharField(max_length=40)
