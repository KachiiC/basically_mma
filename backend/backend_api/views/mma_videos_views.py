from rest_framework.response import Response
from rest_framework.decorators import api_view
from backend_api.serializers.mma_videos_serializers import *


@api_view(['GET'])
def highlights_playlist(request):
    data = FightHighlights.objects.all()

    serializer = FightHighlightsSerializer(data, context={'request': request}, many=True)

    return Response(serializer.data)


@api_view(['GET'])
def ufc_playlist(request):
    data = UFCVideos.objects.all()

    serializer = UFCVideosSerializer(data, context={'request': request}, many=True)

    return Response(serializer.data)


@api_view(['GET'])
def bellator_playlist(request):
    data = BellatorVideos.objects.all()

    serializer = BellatorVideosSerializer(data, context={'request': request}, many=True)

    return Response(serializer.data)
