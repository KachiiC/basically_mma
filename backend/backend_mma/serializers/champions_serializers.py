from rest_framework import serializers
from backend_mma.models.champions_model import Champion


class ChampionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Champion
        fields = ("pk", 'name', 'weight_class', 'style', 'description', 'wins', 'losses', 'draws',
                  'title_reign', 'no_contests', 'notable_wins')
