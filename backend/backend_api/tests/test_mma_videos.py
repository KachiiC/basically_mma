from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from backend_api.models.mma_videos_and_playlists_model import MMAVideo
from backend_api.serializers.mma_videos_serializers import MMAVideoSerializer


class MMAVideosTest(APITestCase):
    videos_endpoint = reverse('mma_videos')

    mma_video_1 = MMAVideo(
        pk=1,
        title="Colby Covington v Tyron Woodley fight highlights | UFC Vegas 11",
        description="Colby Covington and Tyron Woodley finally settled it",
        video_id="z4GjhImDvy0",
        thumbnail_url="https://i.ytimg.com/vi/z4GjhImDvy0/maxresdefault.jpg",
        playlist_id="PLaaEeFtNlIJ2Yigy4wHCQlcuRZg4NKbi5"
    )

    mma_video_2 = MMAVideo(
        pk=2,
        title="Insane fight! Michelle Waterson v Angela Hill fight highlights | UFC Vegas 10",
        description="Michelle Waterson and Angela Hill put on one of the fights of the year.",
        video_id="XemXmylekMI",
        thumbnail_url="https://i.ytimg.com/vi/XemXmylekMI/maxresdefault.jpg",
        playlist_id="PLaaEeFtNlIJ2Yigy4wHCQlcuRZg4NKbi5"
    )

    mma_video_3 = MMAVideo(
        pk=3,
        title="Full Fight | Michael Page vs. Richard Kiely - Bellator 227",
        description="It's Full Fight Friday! As we are just one day away from Bellator London.",
        video_id="feWqqdV09ZA",
        thumbnail_url="https://i.ytimg.com/vi/feWqqdV09ZA/maxresdefault.jpg",
        playlist_id="PLaaEeFtNlIJ2IZ3o2kE7jjZ0NZu8tP9YJ"
    )

    expected_videos = [mma_video_1, mma_video_2, mma_video_3]

    def setUp(self):
        for obj in self.expected_videos:
            obj.save()

    def test_get_all_mma_videos(self):
        """ Retrieve all existing videos"""
        serializer = MMAVideoSerializer(self.expected_videos, many=True)

        response = self.client.get(self.videos_endpoint)
        assert response.status_code == status.HTTP_200_OK
        assert response.data == serializer.data

    def test_get_single_video(self):
        """ Retrieve a single video"""
        single_video_endpoint = reverse('mma_videos_single', args=[self.mma_video_1.pk])

        video = MMAVideo.objects.get(pk=self.mma_video_1.pk)

        serializer = MMAVideoSerializer(video)

        response = self.client.get(single_video_endpoint)

        assert response.status_code == status.HTTP_200_OK
        assert response.data == serializer.data

    def test_get_empty_openers(self):
        """ clear videos from db """
        MMAVideo.objects.all().delete()

        response = self.client.get(self.videos_endpoint)
        assert response.status_code == status.HTTP_200_OK
        assert response.data == []
