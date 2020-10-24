from django.db import models


class Champions(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    weight_class = models.IntegerField()
    style = models.CharField(max_length=200)
    wins = models.IntegerField()
    losses = models.IntegerField()
    draws = models.IntegerField(default=0)
    no_contests = models.IntegerField(default=0)
    notable_wins = models.CharField(max_length=250)
    title_obtained = models.CharField(max_length=100)


class BestOfType(models.Model):
    name = models.ManyToManyField('BestOfFights', max_length=200)
    list = models.CharField(max_length=200)
    description = models.TextField()


class BestOfFights(models.Model):
    fighters = models.CharField(max_length=200)
    event = models.CharField(max_length=200)
    fight_date = models.DateField()
    fight_outcome = models.CharField(max_length=300)
    method_of_victory = models.IntegerField(null=True)
    time_of_finish = models.TimeField(null=True)
