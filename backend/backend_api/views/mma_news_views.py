from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from backend_api.serializers.mma_news_serializers import *


@api_view(['GET'])
def news_list(request):
    data = MMANews.objects.all()

    serializer = MMANewsSerializer(data, context={'request': request}, many=True)

    return Response(serializer.data)


@api_view(['GET'])
def news_list_detail(request, pk):
    news = MMANews.objects.get(pk=pk)

    serializer = MMANewsSerializer(news)

    return Response(serializer.data, status=status.HTTP_200_OK)