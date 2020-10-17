from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from backend_api.models.mma_videos_and_playlists_model import MMAPlaylist
from backend_api.serializers.mma_playlist_serializers import MMAPlaylistSerializer


@api_view(['GET'])
def mma_playlist_all(request):
    data = MMAPlaylist.objects.all()

    serializer = MMAPlaylistSerializer(data, context={'request': request}, many=True)

    return Response(serializer.data)


@api_view(['GET'])
def mma_playlist(request, pk):
    try:
        playlist = MMAPlaylist.objects.get(pk=pk)
    except MMAPlaylist.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = MMAPlaylistSerializer(playlist, context={'request': request})

    return Response(serializer.data)
