from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from backend_mma.models.techniques_model import Techniques
from backend_mma.serializers.techniques_serializers import TechniquesSerializer


class TechniquesTest(APITestCase):
    endpoint = reverse('techniques_list')

    expected = [
        Techniques(
            name="jab",
            type="striking",
            discipline="boxing",
            difficulty="easy",
            description="fast strike with the lead hand",
            tutorial="fWeo0Od8xxM?t=31",
            mistakes="26DSA5DRz0s"
        ),
        Techniques(
            name="Cross",
            type="Striking",
            discipline="Boxing",
            difficulty="Easy",
            description="A power strike thrown straight with the rear hand",
            tutorial="Z2O6E-ssuUg?t=43",
            mistakes="o3k9NNAUwIE"
        ),
    ]

    def setUp(self):
        for obj in self.expected:
            obj.save()

    def test_get_all_techniques(self):
        """ Retrieve all existing words"""
        serializer = TechniquesSerializer(self.expected, many=True)

        response = self.client.get(self.endpoint)
        assert response.status_code == status.HTTP_200_OK
        assert response.data == serializer.data

    def test_post_new_technique(self):
        """ Post new technique"""
        data = [
            {
                "name": "Jab",
                "type": "Striking",
                "discipline": "boxing",
                "difficulty": "Easy",
                "description": "fast strike with the lead hand",
                "tutorial": "fWeo0Od8xxM?t=31",
                "mistakes": "26DSA5DRz0s"
            },
            {
                "name": "Cross",
                "type": "Striking",
                "discipline": "boxing",
                "difficulty": "Easy",
                "description": "A power strike thrown straight with the rear hand",
                "tutorial": "Z2O6E-ssuUg?t=43",
                "mistakes": "o3k9NNAUwIE",
            },
        ]

        Techniques.objects.all().delete()
        response = self.client.post(reverse('techniques_list'), data=data)
        assert response.status_code == status.HTTP_201_CREATED
        assert Techniques.objects.count() == 2

    def test_get_empty_openers(self):
        """ Retrieve no words from db """
        Techniques.objects.all().delete()

        response = self.client.get(self.endpoint)
        assert response.status_code == status.HTTP_200_OK
        assert response.data == []