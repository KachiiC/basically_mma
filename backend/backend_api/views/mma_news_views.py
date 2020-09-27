from rest_framework.response import Response
from rest_framework.decorators import api_view
from backend_api.serializers.mma_news_serializers import *


@api_view(['GET'])
def news_list(request):
    data = MMANews.objects.all()

    serializer = MMANewsSerializer(data, context={'request': request}, many=True)

    return Response(serializer.data)
