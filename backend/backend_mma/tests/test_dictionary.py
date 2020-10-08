from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from backend_mma.models.dictionary_model import Dictionary
from backend_mma.serializers.dictionary_serializers import DictionarySerializer


class DictionaryTest(APITestCase):
    endpoint = reverse('dictionary_list')

    expected = [
        Dictionary(
            name="jab",
            definition="A fast strike with the lead hand"
        ),
        Dictionary(
            name="cross",
            definition="A power strike with the rear hand"
        ),
    ]

    def setUp(self):
        for obj in self.expected:
            obj.save()

    def test_get_all_existing_words(self):
        """ Retrieve all existing words"""
        serializer = DictionarySerializer(self.expected, many=True)

        response = self.client.get(self.endpoint)
        assert response.status_code == status.HTTP_200_OK
        assert response.data == serializer.data

    def test_post_new_word(self):
        """ Post new words"""
        data = [
            {
                "name": "jab",
                "definition": "A fast strike with the lead hand"
            },
            {
                "name": "cross",
                "definition": "A power strike with the rear hand"
            }
        ]

        Dictionary.objects.all().delete()
        response = self.client.post(reverse("dictionary_list"), data=data)
        assert response.status_code == status.HTTP_201_CREATED
        assert Dictionary.objects.count() == 2

    def test_get_empty_openers(self):
        """ Retrieve no words from db """
        Dictionary.objects.all().delete()

        response = self.client.get(self.endpoint)
        assert response.status_code == status.HTTP_200_OK
        assert response.data == []
