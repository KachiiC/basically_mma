from rest_framework import serializers
from backend_mma.models.best_of_mma_model import BestOfType, BestOfFight


class BestOfFightSerializer(serializers.ModelSerializer):
    fight_date = serializers.DateField(format="%d-%m-%Y", input_formats=None)
    time_of_finish = serializers.TimeField(format='%M:%S')

    class Meta:
        model = BestOfFight
        fields = ("pk", "type", "event", "fight_date", "fight_winner", "method_of_victory", "time_of_finish")


class BestOfTypeSerializer(serializers.ModelSerializer):
    fights = BestOfFightSerializer(many=True, read_only=True)

    class Meta:
        model = BestOfType

        fields = ("pk", "fights", "title", "description")
