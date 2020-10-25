# Generated by Django 3.1.1 on 2020-10-24 22:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend_mma', '0011_bestfight_bestknockouts_bestsubmissions_champions'),
    ]

    operations = [
        migrations.CreateModel(
            name='BestOfFights',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fighters', models.CharField(max_length=200)),
                ('event', models.CharField(max_length=200)),
                ('fight_date', models.DateField()),
                ('fight_outcome', models.CharField(max_length=300)),
                ('method_of_victory', models.IntegerField(null=True)),
                ('time_of_finish', models.TimeField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='BestOfType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('list', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('name', models.ManyToManyField(max_length=200, to='backend_mma.BestOfFights')),
            ],
        ),
        migrations.DeleteModel(
            name='BestFight',
        ),
        migrations.DeleteModel(
            name='BestKnockouts',
        ),
        migrations.DeleteModel(
            name='BestSubmissions',
        ),
    ]