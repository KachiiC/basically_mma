from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from backend_mma.models.legends_model import Legend
from backend_mma.serializers.legends_serializers import LegendSerializer


class LegendsTest(APITestCase):
    endpoint = reverse("legends_list")

    legend_1 = Legend(
        name="Jon Jones",
        total_fights=28,
        wins=26,
        losses=1,
        draw=0,
        weight_classes="Light Heavyweight",
        promotions="UFC",
        description="Jon Jones, A legendary fighter and the best at 205",
        highlight="VXvg4ioc0wQ&t"
    )

    legend_2 = Legend(
        name="Conor McGregor",
        total_fights=26,
        wins=22,
        losses=4,
        draw=0,
        weight_classes="Featherweight and Lightweight",
        promotions="UFC",
        description="Conor, A legendary fighter and the first double champion",
        highlight="VXvg4ioc0wQ&t"
    )

    expected_legends = [legend_1, legend_2]

    def setUp(self):
        for obj in self.expected_legends:
            obj.save()

    def test_get_all_legends(self):
        """"Get list of all legends"""
        serializer = LegendSerializer(self.expected_legends, many=True)

        response = self.client.get(self.endpoint)
        assert response.status_code == status.HTTP_200_OK
        assert response.data == serializer.data

    def test_get_single_legend(self):
        """ Retrieve a single legend"""
        legend_endpoint = reverse('legend_single', args=[self.legend_1.pk])
        legend = Legend.objects.get(pk=self.legend_1.pk)
        serializer = LegendSerializer(legend)
        response = self.client.get(legend_endpoint)

        assert response.status_code == status.HTTP_200_OK
        assert response.data == serializer.data

    def test_post_new_legend(self):
        """"Post a new legend"""
        data = [
            {
                "name": "George st-pierre",
                "total_fights": 28,
                "wins": 26,
                "losses": 2,
                "draw": 0,
                "weight_classes": "Welterweight",
                "promotions": "UFC",
                "description": "GSP, A legendary fighter and the best at 170",
                "highlight": "gAI160sHcT8"
            },
            {
                "name": "Anderson Silva",
                "total_fights": 45,
                "wins": 34,
                "losses": 10,
                "draw": 0,
                "weight_classes": "Middleweight and Light Heavyweight",
                "promotions": "UFC",
                "description": "Anderson Silva, A legendary fighter and the best at 185 and also fought at 205",
                "highlight": "6-XzIacyFT8"
            }
        ]

        response = self.client.post(reverse("legends_list"), data=data)
        assert response.status_code == status.HTTP_201_CREATED
        assert Legend.objects.all().count() == 4

    def test_get_empty_openers(self):
        """ Retrieve no legends from db """
        Legend.objects.all().delete()

        response = self.client.get(self.endpoint)
        assert response.status_code == status.HTTP_200_OK
        assert response.data == []
