# Generated by Django 3.1.1 on 2020-10-25 21:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend_mma', '0014_bestoffight_bestoftype_champion'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bestoffight',
            name='method_of_victory',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
