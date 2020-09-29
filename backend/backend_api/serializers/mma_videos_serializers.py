from rest_framework import serializers
# My Models
from backend_api.models.mma_videos_model import *


class FightHighlightsSerializer(serializers.ModelSerializer):

    class Meta:
        model = FightHighlights
        fields = ('pk', 'title', 'video_id', 'thumbnail_url', 'description')


class UFCVideosSerializer(serializers.ModelSerializer):

    class Meta:
        model = UFCVideos
        fields = ('pk', 'title', 'video_id', 'thumbnail_url', 'description')


class BellatorVideosSerializer(serializers.ModelSerializer):

    class Meta:
        model = BellatorVideos
        fields = ('pk', 'title', 'video_id', 'thumbnail_url', 'description')
