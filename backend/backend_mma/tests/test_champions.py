from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from backend_mma.models.champions_model import Champion
from backend_mma.serializers.champions_serializers import ChampionSerializer


class ChampionsTest(APITestCase):
    endpoint = reverse('champions_list')

    champ_1 = Champion(
        pk=1,
        name="Khabib Nurmagomedov",
        weight_class=155,
        style="Sambo, Wrestling and Judo",
        description="undefeated and undisputed at 155",
        wins=29,
        losses=0,
        title_reign="2018-2020",
        notable_wins="Conor McGregor, Dustin Poirier, Justin Gaethje, Edson Barboza and Rafael dos Anjos"
    )

    champ_2 = Champion(
        pk=2,
        name="Jon Jones",
        weight_class=205,
        style="Wrestling and Muaythai",
        description="The greatest at 205",
        wins=20,
        losses=0,
        title_reign="2019-present",
        notable_wins="Anderson Silva, Robert Whittaker, Paulo Costa, Yoel Romero and Kelvin Gastelum"
    )

    expected = [champ_1, champ_2]

    def setUp(self):
        for obj in self.expected:
            obj.save()

    def test_retrieve_all_champions(self):
        """Testing retrieve for all champions"""
        serializer = ChampionSerializer(self.expected, many=True)
        response = self.client.get(self.endpoint)

        assert response.status_code == status.HTTP_200_OK
        assert response.data == serializer.data

    def test_retrieve_single_champion(self):
        """Testing retrieve for single champion"""
        champion_endpoint = reverse('champion_single', args=[self.champ_1.pk])
        champion = Champion.objects.get(pk=self.champ_1.pk)
        serializer = ChampionSerializer(champion)
        response = self.client.get(champion_endpoint)

        assert response.status_code == status.HTTP_200_OK
        assert response.data == serializer.data

    def test_post_champion(self):
        """Testing post for champion"""
        data = [
            {
                "name": "Stipie Miocic",
                "weight_class": 265,
                "style": "Boxing and Wrestling",
                "description": "The current heavyweight champion with the most title defences at heavyweight",
                "wins": "20",
                "losses": "3",
                "title_reign": "2016-2018, 2019-present",
                "notable_wins": "Daniel Cormier (x2), Junior dos Santos, Fabricio Werdum, Alistar Overeem and Francis Ngannou"
            },
            {
                "name": "Kamaru Usman",
                "weight_class": 170,
                "style": "Wrestling",
                "description": "The current welterweight champion with 2 title defences.",
                "wins": "17",
                "losses": "1",
                "title_reign": "2019-present",
                "notable_wins": "Tyron Woodley, Colby Covington, Rafael dos Anjos, Jorge Masvidal and Damien Maia"
            }
        ]

        Champion.objects.all().delete()
        response = self.client.post(reverse('champions_list'), data=data)
        assert response.status_code == status.HTTP_201_CREATED
        assert Champion.objects.count() == 2

    def test_get_empty_openers(self):
        """ Retrieve no words from db """
        Champion.objects.all().delete()

        response = self.client.get(self.endpoint)
        assert response.status_code == status.HTTP_200_OK
        assert response.data == []