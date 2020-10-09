from rest_framework import serializers
# My Models
from backend_api.models.mma_playlists_model import MMAVideo, MMAPlaylist


class MMAPlaylistSerializer(serializers.ModelSerializer):

    class Meta:
        model = MMAPlaylist
        fields = ('pk', 'title', 'video_id', 'thumbnail_url', 'description')


class MMAVideoSerializer(serializers.ModelSerializer):

    class Meta:
        model = MMAVideo
        fields = ('pk', 'title', 'video_id', 'thumbnail_url', 'description')
