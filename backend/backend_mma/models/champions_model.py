from django.db import models


class Champion(models.Model):
    name = models.CharField(max_length=100)
    weight_class = models.IntegerField()
    style = models.CharField(max_length=200)
    description = models.TextField()
    wins = models.IntegerField()
    losses = models.IntegerField()
    draws = models.IntegerField(default=0)
    no_contests = models.IntegerField(default=0)
    title_reign = models.CharField(max_length=100)
    notable_wins = models.CharField(max_length=250)
