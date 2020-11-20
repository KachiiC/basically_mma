from rest_framework import serializers
# My Models
from backend_mma.models.dictionary_model import Dictionary


class DictionarySerializer(serializers.ModelSerializer):

    class Meta:
        model = Dictionary
        fields = ('name', 'type', 'example', 'example_type', 'definition')
