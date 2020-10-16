from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from backend_api.models.mma_playlists_model import MMAVideo, MMAPlaylist
from backend_api.serializers.mma_playlist_serializers import MMAVideoSerializer, MMAPlaylistSerializer


@api_view(['GET'])
def all_mma_videos(request):
    data = MMAVideo.objects.all()

    serializer = MMAVideoSerializer(data, context={'request': request}, many=True)

    return Response(serializer.data)


@api_view(['GET'])
def all_mma_playlist(request):

    data = MMAPlaylist.objects.all()

    serializer = MMAPlaylistSerializer(data, context={'request': request}, many=True)

    return Response(serializer.data)
