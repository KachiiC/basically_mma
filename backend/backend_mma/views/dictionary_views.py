from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from backend_mma.models.dictionary_model import Dictionary
from backend_mma.serializers.dictionary_serializers import DictionarySerializer


@api_view(['GET', 'POST'])
def dictionary_list(request):
    if request.method == 'GET':

        data = Dictionary.objects.all()

        serializer = DictionarySerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = DictionarySerializer(data=request.data, context={'request': request}, many=True)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def dictionary_detail(request, pk):
    term = Dictionary.objects.get(pk=pk)

    serializer = DictionarySerializer(term)

    return Response(serializer.data, status=status.HTTP_200_OK)
