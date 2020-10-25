from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from backend_mma.models.best_of_mma_model import BestOfType, BestOfFight
from backend_mma.serializers.best_of_mma_serializers import BestOfFightSerializer, BestOfTypeSerializer


@api_view(['GET', 'POST'])
def best_of_fights_list(request):
    if request.method == 'GET':

        data = BestOfFight.objects.all()

        serializer = BestOfFightSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = BestOfFightSerializer(data=request.data, context={'request': request}, many=True)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

