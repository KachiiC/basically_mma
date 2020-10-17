from rest_framework import serializers
# My Models
from backend_api.models.mma_news_model import *


class MMANewsSerializer(serializers.ModelSerializer):  # MMA News

    class Meta:
        model = MMANews
        fields = ('pk', 'title', 'description', 'article', 'thumbnail_url', 'img_url', 'author')
