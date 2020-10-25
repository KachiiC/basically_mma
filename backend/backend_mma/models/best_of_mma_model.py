from django.db import models


class BestOfType(models.Model):
    fights = models.ManyToManyField('BestOfFight', blank=True)
    title = models.CharField(max_length=200)
    description = models.TextField()


class BestOfFight(models.Model):
    type = models.CharField(max_length=100)
    fighters = models.CharField(max_length=200)
    event = models.CharField(max_length=200)
    fight_date = models.DateField()
    fight_winner = models.CharField(max_length=300, blank=True)
    method_of_victory = models.CharField(max_length=100, null=True)
    time_of_finish = models.TimeField(null=True, blank=True)
