from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from backend_mma.models.legends_model import Legend
from backend_mma.serializers.legends_serializers import LegendSerializer


@api_view(['GET', 'POST'])
def legends_list(request):
    if request.method == 'GET':

        data = Legend.objects.all()

        serializer = LegendSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = LegendSerializer(data=request.data, context={'request': request}, many=True)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def legends_detail(request, pk):
    legend = Legend.objects.get(pk=pk)

    serializer = LegendSerializer(legend)

    return Response(serializer.data, status=status.HTTP_200_OK)
