from django.core.management.base import BaseCommand
import os
# Models
from backend_api.models.mma_news_model import *
# Repoppers
from backend_api.management.commands.repoppers import *

YOUTUBE_DATA_DIR = os.getcwd() + "/backend_api/data/youtube_playlists/"


class Command(BaseCommand):

    def handle(self, *args, **options):

        FightHighlights.objects.all().delete()
        create_new_fight_highlights_playlist(YOUTUBE_DATA_DIR + "fightHighlightsData.json")

        UFCVideos.objects.all().delete()
        create_new_ufc_playlist(YOUTUBE_DATA_DIR + "ufcData.json")

        BellatorVideos.objects.all().delete()
        create_new_bellator_playlist(YOUTUBE_DATA_DIR + "bellatorData.json")

        MMANews.objects.all().delete()
        create_new_mma_news(os.getcwd() + "/backend_api/data/news/mmaNewsData.json")