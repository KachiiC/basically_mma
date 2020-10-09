# import json
# from backend_api.models.mma_playlists_model import MMAVideo, MMAPlaylist
#
#
# def create_new_curated_playlists(data_location):
#     with open(data_location, 'r') as json_file:
#         data = json.load(json_file)
#         for item in data:
#             playlist = MMAPlaylist(
#                 playlist_id=item["playlistId"],
#                 playlist_name=item["playlistName"],
#                 playlist_description=item["description"],
#             )
#             playlist.save()
#             video_ids = item["videoIds"].split(',')
#             for link in video_ids:
#                 video = MMAVideo.objects.get(video_id=(link))
#                 playlist.videos.add(video)
