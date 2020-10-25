# from rest_framework.response import Response
# from rest_framework import status
# from rest_framework.decorators import api_view
# from backend_mma.models.best_of_mma_model import BestOfType, Champion
# from backend_mma.serializers.best_of_mma_serializers import ChampionSerializer, BestOfTypeSerializer
#
#
# @api_view(['GET', 'POST'])
# def champions_list(request):
#     if request.method == 'GET':
#
#         data = Champion.objects.all()
#
#         serializer = ChampionSerializer(data, context={'request': request}, many=True)
#
#         return Response(serializer.data)
#
#     elif request.method == 'POST':
#         serializer = ChampionSerializer(data=request.data, context={'request': request}, many=True)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(status=status.HTTP_201_CREATED)
#
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# @api_view(['GET'])
# def dictionary_detail(request, pk):
#     term = Dictionary.objects.get(pk=pk)
#
#     serializer = DictionarySerializer(term)
#
#     return Response(serializer.data, status=status.HTTP_200_OK)
