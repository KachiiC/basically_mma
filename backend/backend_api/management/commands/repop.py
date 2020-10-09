from django.core.management.base import BaseCommand
import os
# Models
from backend_api.models.mma_news_model import MMANews
from backend_api.models.mma_playlists_model import MMAPlaylist, MMAVideo
# Repoppers
from backend_api.management.repoppers.mma_news_repopper import create_new_mma_news
from backend_api.management.repoppers.mma_playlist_repopper import create_new_mma_playlist
YOUTUBE_DATA_DIR = os.getcwd() + "/backend_api/data/youtube_playlists/"


class Command(BaseCommand):

    def handle(self, *args, **options):

        MMANews.objects.all().delete()
        create_new_mma_news(os.getcwd() + "/backend_api/data/news/mmaNewsData.json")

        MMAVideo.objects.all().delete()

        MMAPlaylist.objects.all().delete()
        create_new_mma_playlist(os.getcwd() + "/backend_api/data/youtube_playlists/ufcData.json")
