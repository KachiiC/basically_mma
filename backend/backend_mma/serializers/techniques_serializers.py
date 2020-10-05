from rest_framework import serializers
# My Models
from backend_mma.models.techniques_model import *


class TechniquesSerializer(serializers.ModelSerializer):  # MMA News

    class Meta:
        model = Techniques
        fields = ('pk', 'name', 'type', 'discipline', 'difficulty', 'description', 'tutorial', 'mistakes')