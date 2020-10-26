from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


class BestOfType(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    fights = models.ManyToManyField('BestOfFight', blank=True)


class BestOfFight(models.Model):
    fighters = models.CharField(max_length=200)
    type = models.CharField(max_length=100)
    event = models.CharField(max_length=200)
    fight_date = models.DateField()
    fight_winner = models.CharField(max_length=300, blank=True)
    method_of_victory = models.CharField(max_length=100, null=True)
    round_of_finish = models.IntegerField("Round", null=True,
                                          validators=[MinValueValidator(1), MaxValueValidator(5)])
    time_of_finish = models.CharField(max_length=10, default="05:00")
