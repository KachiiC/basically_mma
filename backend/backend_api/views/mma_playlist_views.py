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
def highlights_playlist_detail(request, pk):
    video = MMAPlaylist.objects.get(pk=pk)

    serializer = MMAPlaylistSerializer(video)

    return Response(serializer.data, status=status.HTTP_200_OK)
