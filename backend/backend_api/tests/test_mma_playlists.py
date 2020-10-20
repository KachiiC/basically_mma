from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from backend_api.models.mma_videos_and_playlists_model import MMAPlaylist
from backend_api.serializers.mma_playlist_serializers import MMAPlaylistSerializer
from backend_api.models.mma_videos_and_playlists_model import MMAVideo
from backend_api.serializers.mma_videos_serializers import MMAVideoSerializer


class MMAVideosTest(APITestCase):
    playlist_endpoint = reverse('mma_playlist')

    mma_video_1 = MMAVideo(
        title="Colby Covington v Tyron Woodley fight highlights | UFC Vegas 11",
        description="Colby Covington and Tyron Woodley finally settled it",
        video_id="z4GjhImDvy0",
        thumbnail_url="https://i.ytimg.com/vi/z4GjhImDvy0/maxresdefault.jpg",
        playlist_id="PLaaEeFtNlIJ2Yigy4wHCQlcuRZg4NKbi5"
    )

    mma_video_2 = MMAVideo(
        title="Insane fight! Michelle Waterson v Angela Hill fight highlights | UFC Vegas 10",
        description="Michelle Waterson and Angela Hill put on one of the fights of the year.",
        video_id="XemXmylekMI",
        thumbnail_url="https://i.ytimg.com/vi/XemXmylekMI/maxresdefault.jpg",
        playlist_id="PLaaEeFtNlIJ2Yigy4wHCQlcuRZg4NKbi5"
    )

    mma_video_3 = MMAVideo(
        title="Full Fight | Michael Page vs. Richard Kiely - Bellator 227",
        description="It's Full Fight Friday! As we are just one day away from Bellator London.",
        video_id="feWqqdV09ZA",
        thumbnail_url="https://i.ytimg.com/vi/feWqqdV09ZA/maxresdefault.jpg",
        playlist_id="PLaaEeFtNlIJ2IZ3o2kE7jjZ0NZu8tP9YJ"
    )

    mma_playlist_1 = MMAPlaylist(
        playlist_id="fight_highlights",
        playlist_name="Fight Highlights",
        playlist_description="Fight Highlights Description"
    )

    mma_playlist_2 = MMAPlaylist(
        playlist_id="bellator_highlights",
        playlist_name="Bellator Fights",
        playlist_description="Bellator Fights Description"
    )

    expected_videos = [mma_video_1, mma_video_2, mma_video_3]

    expected_playlists = [mma_playlist_1, mma_playlist_2]

    def setUp(self):
        """Saving videos and playlists"""
        for obj in self.expected_videos:
            obj.save()

        for obj in self.expected_playlists:
            obj.save()

    def test_adding_to_playlist(self):
        """ Testing saving videos to playlist depending on playlist_video_id"""
        all_videos = MMAVideo.objects.all()

        fight_highlights = MMAPlaylist.objects.get(playlist_name="Fight Highlights")
        bellator_fights = MMAPlaylist.objects.get(playlist_name="Bellator Fights")
        for mma_video in all_videos:
            if mma_video.playlist_id == "PLaaEeFtNlIJ2Yigy4wHCQlcuRZg4NKbi5":
                fight_highlights.playlist_video.add(mma_video)

            elif mma_video.playlist_id == "PLaaEeFtNlIJ2IZ3o2kE7jjZ0NZu8tP9YJ":
                bellator_fights.playlist_video.add(mma_video)

        assert fight_highlights.playlist_video.count() == 2
        assert bellator_fights.playlist_video.count() == 1

    def test_retrieve_all_playlists(self):
        """ Retrieve all existing playlists"""
        serializer = MMAPlaylistSerializer(self.expected_playlists, many=True)

        response = self.client.get(self.playlist_endpoint)
        assert response.status_code == status.HTTP_200_OK
        assert response.data == serializer.data

    def test_retrieve_single_playlist(self):
        """" Retrieve a single playlist"""
        single_playlist = reverse('mma_playlist_single', args=[self.mma_playlist_1.playlist_id])

        video = MMAPlaylist.objects.get(playlist_id=self.mma_playlist_1.playlist_id)

        serializer = MMAPlaylistSerializer(video)

        response = self.client.get(single_playlist)

        assert response.status_code == status.HTTP_200_OK
        assert response.data == serializer.data
