import json
from backend_api.models.mma_videos_and_playlists_model import MMAVideo, MMAPlaylist


def create_new_mma_videos(data_location):
    with open(data_location, 'r') as json_file:
        data = json.load(json_file)
        for item in data["items"]:
            MMAVideo(
                title=item["snippet"]["title"],
                description=item["snippet"]["description"],
                video_id=item["snippet"]["resourceId"]["videoId"],
                thumbnail_url=item["snippet"]["thumbnails"]["maxres"]["url"],
                playlist_id=item["snippet"]["playlistId"]
            ).save()
