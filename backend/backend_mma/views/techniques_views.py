from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from backend_mma.models.techniques_model import *
from backend_mma.serializers.techniques_serializers import *


@api_view(['GET', 'POST'])
def techniques_list(request):
    if request.method == 'GET':

        data = Techniques.objects.all()

        serializer = TechniquesSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = TechniquesSerializer(data=request.data, context={'request': request}, many=True)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def techniques_detail(request, pk):
    term = Techniques.objects.get(pk=pk)

    serializer = TechniquesSerializer(term)

    return Response(serializer.data, status=status.HTTP_200_OK)
