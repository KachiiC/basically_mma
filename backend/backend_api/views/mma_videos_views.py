from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from backend_api.models.mma_videos_and_playlists_model import MMAVideo
from backend_api.serializers.mma_videos_serializers import MMAVideoSerializer


@api_view(['GET'])
def mma_videos_all(request):
    data = MMAVideo.objects.all()

    serializer = MMAVideoSerializer(data, context={'request': request}, many=True)

    return Response(serializer.data)


@api_view(['GET'])
def mma_videos_single(request, pk):
    try:
        video = MMAVideo.objects.get(pk=pk)
    except MMAVideo.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = MMAVideoSerializer(video, context={'request': request})

    return Response(serializer.data)
