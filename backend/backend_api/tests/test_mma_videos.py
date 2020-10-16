# from django.urls import reverse
# from backend_api.models.mma_playlists_model import MMAPlaylist, MMAVideo
# from rest_framework.test import APITestCase
# from rest_framework import status
#
#
# class MMAVideosTest(APITestCase):
#
#     expected = [
#
#         MMAPlaylist.objects.create(
#             playlist_name="UFC Playlist",
#             playlist_description="A playlist of fights from the ufc, free to watch on youtube!"
#         )
#
#     def setUp(self):
#         for obj in self.expected:
#             obj.save()
#
#         # videos = MMAVideo.objects.all()
#
#         # playlist_name = models.CharField(max_length=100)
#         # playlist_video = models.ManyToManyField('MMAVideo', blank=True)
#         # playlist_description = models.TextField()
#
#         # for youtube_video in videos:
#         #     if youtube_video.playlist_id == "PLaaEeFtNlIJ2Yigy4wHCQlcuRZg4NKbi5":
#         #         ufc_playlist = MMAPlaylist.objects.get(playlist_name="UFC Playlist")
#         #         ufc_playlist.video.set(youtube_video)
#         #         print (ufc_playlist.video.title)
