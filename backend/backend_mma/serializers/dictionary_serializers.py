from rest_framework import serializers
# My Models
from backend_mma.models.dictionary_models import *


class DictionarySerializer(serializers.ModelSerializer):  # MMA News

    class Meta:
        model = Dictionary
        fields = ('pk', 'name', 'definition')
