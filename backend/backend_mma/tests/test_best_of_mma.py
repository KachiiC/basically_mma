from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from backend_mma.models.best_of_mma_model import BestOfFight, BestOfType
from backend_mma.serializers.best_of_mma_serializers import BestOfFightSerializer, BestOfTypeSerializer


class BestOfMMATest(APITestCase):
    endpoint = reverse('best_of_fights')

    fight_1 = BestOfFight(
        type="Best Fights",
        fighters="Kelvin Gastelum vs Israel Adesanya",
        event="UFC 236",
        fight_date="2019-04-13",
        fight_winner="Israel Adesanya",
        method_of_victory="Unanimous Decision",
    )

    fight_2 = BestOfFight(
        type="Best Knockouts",
        fighters="Jorge Masvidal vs Ben Askren",
        event="UFC 239",
        fight_date="2019-07-07",
        fight_winner="Jorge Masvidal",
        method_of_victory="Knockout (Flying Knee)",
        time_of_finish="00:07"
    )
    #
    fight_3 = BestOfFight(
        type="Best Submissions",
        fighters="Conor McGregor vs Nate Diaz",
        event="UFC 196",
        fight_date="2016-03-05",
        fight_winner="Nate Diaz",
        method_of_victory="Unanimous Decision",
        time_of_finish="04:12"
    )

    fight_list_1 = BestOfType(
        title="Best Fights",
        description="The best UFC fights of all time"
    )

    fight_list_2 = BestOfType(
        title="Best Knockouts",
        description="The best UFC knockouts of all time"
    )

    fight_list_3 = BestOfType(
        title="Best Submissions",
        description="The best UFC submissions of all time"
    )

    expected_fights = [fight_1, fight_2, fight_3]
    expected_list = [fight_list_1, fight_list_2, fight_list_3]

    def setUp(self):
        for obj in self.expected_fights:
            obj.save()

        for obj in self.expected_list:
            obj.save()

    def test_adding_fights_to_type(self):
        """ Test adding fights to list"""

        all_fights = BestOfFight.objects.all()

        best_fights = BestOfType.objects.get(title="Best Fights")
        best_kos = BestOfType.objects.get(title="Best Knockouts")
        best_subs = BestOfType.objects.get(title="Best Submissions")

        for single_fight in all_fights:
            if single_fight.type == "Best Fights":
                best_fights.fights.add(single_fight)
            elif single_fight.type == "Best Knockouts":
                best_kos.fights.add(single_fight)
            elif single_fight.type == "Best Submissions":
                best_subs.fights.add(single_fight)

        assert best_fights.fights.count() == 1
        assert best_kos.fights.count() == 1
        assert best_subs.fights.count() == 1
