from django.db import models


class Techniques(models.Model):
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    discipline = models.CharField(max_length=100, default='boxing')
    difficulty = models.CharField(max_length=100, default='Easy')
    description = models.TextField(max_length=3000)
    tutorial = models.CharField(max_length=100)
    mistakes = models.CharField(max_length=100, default="avoid")

    def __str__(self):
        return self.name