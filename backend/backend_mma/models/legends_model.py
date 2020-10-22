from django.db import models


class Legend(models.Model):
    name = models.CharField(max_length=30)
    total_fights = models.IntegerField()
    wins = models.IntegerField()
    losses = models.IntegerField()
    draw = models.IntegerField()
    weight_classes = models.CharField(max_length=100, default="weight")
    promotions = models.CharField(max_length=150)
    description = models.TextField()
    highlight = models.CharField(max_length=25)
