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


class BestFight(models.Model):
    fighters = models.CharField(max_length=200)
    outcome = models.CharField(max_length=100)
    event = models.CharField(max_length=100)
    date = models.CharField(max_length=100)
    winner = models.CharField(max_length=200)


class BestKnockouts(models.Model):
    fighters = models.CharField(max_length=200)
    knockout_method = models.CharField(max_length=300)
    knockout_round = models.IntegerField()
    knockout_time = models.TimeField()
    knockout_date = models.DateField


class BestSubmissions(models.Model):
    fighters = models.CharField(max_length=200)
    submission_method = models.CharField(max_length=300)
    submission_round = models.IntegerField()
    submission_time = models.TimeField()
    submission_date = models.DateField()