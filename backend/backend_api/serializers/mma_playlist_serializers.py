from rest_framework import serializers
# My Models
from backend_api.models.mma_videos_and_playlists_model import MMAPlaylist
from .mma_videos_serializers import MMAVideoSerializer


class MMAPlaylistSerializer(serializers.ModelSerializer):

    playlist_video = MMAVideoSerializer(many=True, read_only=True)

    class Meta:
        model = MMAPlaylist
        fields = ('pk', 'playlist_id', 'playlist_name', 'playlist_video', 'playlist_description')
