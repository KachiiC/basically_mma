
from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from backend_mma.models.dictionary_model import Dictionary
from backend_mma.serializers.dictionary_serializers import DictionarySerializer


class DictionaryTest(APITestCase):
    endpoint = reverse('dictionary_list')

    dict_1 = Dictionary(
        pk=1,
        name="jab",
        definition="A fast strike with the lead hand"
    )

    dict_2 = Dictionary(
        pk=2,
        name="cross",
        definition="A power strike with the rear hand"
    )

    expected = [dict_1, dict_2]

    def setUp(self):
        for obj in self.expected:
            obj.save()

    def test_get_all_existing_words(self):
        """ Retrieve all existing words"""
        serializer = DictionarySerializer(self.expected, many=True)

        response = self.client.get(self.endpoint)
        assert response.status_code == status.HTTP_200_OK
        assert response.data == serializer.data

    def test_get_single_word(self):
        """ Retrieve an existing words"""
        word_endpoint = reverse('dictionary_word', args=[self.dict_1.pk])

        word = Dictionary.objects.get(pk=self.dict_1.pk)

        serializer = DictionarySerializer(word)

        response = self.client.get(word_endpoint)

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
