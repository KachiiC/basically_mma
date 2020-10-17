from rest_framework import serializers
# My Models
from backend_api.models.mma_videos_and_playlists_model import MMAVideo


class MMAVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = MMAVideo
        fields = ('pk', 'title', 'description', 'video_id', 'thumbnail_url', "playlist_id")
