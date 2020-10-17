from django.db import models


class MMANews(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=500)
    article = models.CharField(max_length=200, unique=True)
    thumbnail_url = models.CharField(max_length=250)
    img_url = models.CharField(max_length=250)
    author = models.CharField(max_length=50)
