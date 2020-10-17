from rest_framework import serializers
# My Models
from backend_api.models.mma_videos_and_playlists_model import MMAPlaylist


class MMAPlaylistSerializer(serializers.ModelSerializer):
    class Meta:
        model = MMAPlaylist
        fields = ('pk', 'playlist_name', 'playlist_video', 'playlist_description')
