from rest_framework import serializers
# My Models
from backend_api.models.mma_playlists_model import MMAVideo, MMAPlaylist


class MMAPlaylistSerializer(serializers.ModelSerializer):
    class Meta:
        model = MMAPlaylist
        fields = ('pk', 'playlist_name', 'playlist_video', 'playlist_description')


class MMAVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = MMAVideo
        fields = ('pk', 'title', 'description', 'video_id', 'thumbnail_url', "playlist_id")
