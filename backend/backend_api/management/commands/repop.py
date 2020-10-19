from django.core.management.base import BaseCommand
import os
# Models
from backend_api.models.mma_news_model import MMANews
from backend_api.models.mma_videos_and_playlists_model import MMAPlaylist, MMAVideo
# Repoppers
from backend_api.management.repoppers.mma_news_repopper import create_new_mma_news
from backend_api.management.repoppers.mma_playlist_repopper import create_new_mma_videos

YOUTUBE_DATA_DIR = os.getcwd() + "/backend_api/data/youtube_playlists/"


class Command(BaseCommand):

    def handle(self, *args, **options):

        MMANews.objects.all().delete()
        create_new_mma_news(os.getcwd() + "/backend_api/data/news/mmaNewsData.json")

        MMAVideo.objects.all().delete()
        create_new_mma_videos(os.getcwd() + "/backend_api/data/youtube_playlists/fightHighlightsData.json")
        print("repop for Fight highlights successful")

        create_new_mma_videos(os.getcwd() + "/backend_api/data/youtube_playlists/ufcData.json")
        print("repop for UFC Fights successful")

        create_new_mma_videos(os.getcwd() + "/backend_api/data/youtube_playlists/bellatorData.json")
        print("repop for Bellator Fights successful")

        MMAPlaylist.objects.all().delete()

        # TODO: Generate playlist ID from playlist name by hashing it.

        MMAPlaylist(
            playlist_id="ufc_playlist",
            playlist_name="UFC videos",
            playlist_description="UFC Description"
        ).save(),
        MMAPlaylist(
            playlist_id="bellator_playlist",
            playlist_name="Bellator videos",
            playlist_description="Bellator Description"
        ).save(),
        MMAPlaylist(
            playlist_id="fight_highlights",
            playlist_name="Fight Highlights",
            playlist_description="Fight Highlights Description"
        ).save()

        mma_videos_list = MMAVideo.objects.all()

        for mma_video in mma_videos_list:
            if mma_video.playlist_id == "PLaaEeFtNlIJ1QCSWkBvxItbKYEpGENASC":
                ufc_playlist = MMAPlaylist.objects.get(playlist_name="UFC videos")
                ufc_playlist.playlist_video.add(mma_video)
            elif mma_video.playlist_id == "PLaaEeFtNlIJ2IZ3o2kE7jjZ0NZu8tP9YJ":
                bellator_playlist = MMAPlaylist.objects.get(playlist_name="Bellator videos")
                bellator_playlist.playlist_video.add(mma_video)
            elif mma_video.playlist_id == "PLaaEeFtNlIJ2Yigy4wHCQlcuRZg4NKbi5":
                fight_highlights_playlist = MMAPlaylist.objects.get(playlist_name="Fight Highlights")
                fight_highlights_playlist .playlist_video.add(mma_video)

        print("repoped for playlists successful")