from rest_framework import serializers
from backend_mma.models.best_of_mma_model import BestOfType, BestOfFight


class BestOfTypeSerializer(serializers.ModelSerializer):
    model = BestOfType
    fields = ("pk", "fights", "title", "description")


class BestOfFightSerializer(serializers.ModelSerializer):
    class Meta:
        model = BestOfFight
        fields = ("pk", "type", "event", "fight_date", "fight_winner", "method_of_victory", "time_of_finish")
