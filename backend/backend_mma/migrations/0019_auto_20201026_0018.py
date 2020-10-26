# Generated by Django 3.1.1 on 2020-10-26 00:18

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend_mma', '0018_bestoffight_round_of_finish'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bestoffight',
            name='round_of_finish',
            field=models.IntegerField(validators=[django.core.validators.MinValueValidator(18), django.core.validators.MaxValueValidator(50)], verbose_name='Round'),
        ),
    ]
