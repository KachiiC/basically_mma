from rest_framework import serializers
from backend_mma.models.legends_model import Legend


class LegendSerializer(serializers.ModelSerializer):
    class Meta:
        model = Legend
        fields = ('pk', 'name', 'total_fights', 'wins', 'losses', 'draw', 'weight_classes', 'promotions', 'description', 'highlight')
