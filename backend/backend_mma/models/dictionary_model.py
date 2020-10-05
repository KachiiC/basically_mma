from django.db import models


class Dictionary(models.Model):
    name = models.CharField(max_length=150)
    definition = models.TextField(max_length=2000)

    def __str__(self):
        return self.name