import json
# Models
from backend_api.models.mma_news_model import MMANews
from backend_api.models.mma_videos_model import *


def create_new_fight_highlights_playlist(data_location):
    with open(data_location, 'r') as json_file:
        data = json.load(json_file)
        for item in data["items"]:
            FightHighlights(
                video_id=item["snippet"]["resourceId"]["videoId"],
                title=item["snippet"]["title"],
                thumbnail_url=item["snippet"]["thumbnails"]["maxres"]["url"],
                description=item["snippet"]["description"]
            ).save()
    print("repop successful Fight Highlights")


def create_new_ufc_playlist(data_location):
    with open(data_location, 'r') as json_file:
        data = json.load(json_file)
        for item in data["items"]:
            UFCVideos(
                video_id=item["snippet"]["resourceId"]["videoId"],
                title=item["snippet"]["title"],
                thumbnail_url=item["snippet"]["thumbnails"]["maxres"]["url"],
                description=item["snippet"]["description"]
            ).save()
    print("repop successful UFC Videos")


def create_new_bellator_playlist(data_location):
    with open(data_location, 'r') as json_file:
        data = json.load(json_file)
        for item in data["items"]:
            BellatorVideos(
                video_id=item["snippet"]["resourceId"]["videoId"],
                title=item["snippet"]["title"],
                thumbnail_url=item["snippet"]["thumbnails"]["maxres"]["url"],
                description=item["snippet"]["description"]
            ).save()
    print("repop successful Bellator Videos")


def create_new_mma_news(data_location):
    with open(data_location, 'r') as json_file:
        data = json.load(json_file)
        news = data["latestNews"]

        for x in news:
            MMANews(
                title=x["title"],
                article=x["sourceUrl"],
                thumbnail_url=x["thumbnail"],
                img_url=x["imgUrl"],
                description=x["description"],
                author=x["author"]
            ).save()

    print("repop successful MMA News")