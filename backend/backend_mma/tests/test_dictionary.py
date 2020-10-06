from rest_framework.test import APITestCase
from rest_framework import status
from backend_mma.models.dictionary_model import Dictionary
from backend_mma.serializers.dictionary_serializers import *


class DictionaryTest(APITestCase):
    """ Test module for Dictionary model """

    def setUp(self):
        Dictionary.objects.create(
            name='jab', definition="A fast strike with the lead hand")
        Dictionary.objects.create(
            name='cross', definition="A fast strike with the rear hand")

    def test_get_all_puppies(self):
        # get API response
        response = self.client.get('dictionary_list')
        # get data from db
        dictionary = Dictionary.objects.all()
        # serializer = DictionarySerializer(dictionary, many=True)
        # self.assertEqual(response.data, serializer.data)
        # self.assertEqual(response.status_code, status.HTTP_200_OK)
