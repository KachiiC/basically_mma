from django.db import models


class UFCVideos(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    video_id = models.CharField(max_length=200, unique=True)
    thumbnail_url = models.CharField(max_length=250)


class BellatorVideos(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    video_id = models.CharField(max_length=200, unique=True)
    thumbnail_url = models.CharField(max_length=250)


class FightHighlights(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    video_id = models.CharField(max_length=200, unique=True)
    thumbnail_url = models.CharField(max_length=250)

