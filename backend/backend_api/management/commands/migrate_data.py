from django.core.management.base import BaseCommand
import os
# Models
from backend_api.models.mma_news_model import MMANews
from backend_mma.models.dictionary_model import Dictionary
from backend_mma.models.techniques_model import Technique
from backend_mma.serializers.dictionary_serializers import DictionarySerializer
from backend_mma.serializers.techniques_serializers import TechniquesSerializer
# Repoppers
from backend_api.management.repoppers.mma_news_repopper import create_new_mma_news
from backend_api.management.repoppers.mma_playlist_repopper import create_new_mma_videos

YOUTUBE_DATA_DIR = os.getcwd() + "/backend_api/data/youtube_playlists/"

import json

OUTFILE_LOCATION = os.getcwd() + "/backend_mma/data/"


class Command(BaseCommand):

    def handle(self, *args, **options):
        # all_techniques = Technique.objects.all()
        # serialised_techniques = TechniquesSerializer(all_techniques, many=True).data
        #
        # with open(f"{OUTFILE_LOCATION}/dumpedTechniques.json", 'w', encoding='utf8') as json_file:
        #     json_file.write(
        #         json.dumps(serialised_techniques, indent=4, ensure_ascii=False)
        #     )
        #
        # all_dictionary = Dictionary.objects.all()
        # serialised_dictionary = DictionarySerializer(all_dictionary, many=True).data
        #
        # with open(f"{OUTFILE_LOCATION}/dumpedDictionary.json", 'w', encoding='utf8') as json_file:
        #     json_file.write(
        #         json.dumps(serialised_dictionary, indent=4, ensure_ascii=False)
        #     )
        #
        # print("Migrate successful")

        DATA_LOCATION = OUTFILE_LOCATION + "dumpedTechniques.json"

        with open(DATA_LOCATION, 'r') as json_file:
            data = json.load(json_file)
            for technique in data:
                Technique(
                    name=technique["name"],
                    type=technique["type"],
                    discipline=technique["discipline"],
                    difficulty=technique["difficulty"],
                    description=technique["description"],
                    tutorial=technique["tutorial"],
                    mistakes=technique["mistakes"]
                ).save()

        print("repop of techniques successful ")

        # DATA_LOCATION_2 = OUTFILE_LOCATION + "dumpedDictionary.json"
        #
        # with open(DATA_LOCATION_2, 'r') as json_file:
        #     data_2 = json.load(json_file)
        #     for term in data_2:
        #         Dictionary(
        #             name=term["name"],
        #             definition=term["definition"]
        #         ).save()
        #
        # print("repop of Dictionary successful ")
