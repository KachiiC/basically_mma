import requests
from django.core.management.base import BaseCommand
import json
import os

OUTFILE_LOCATION = os.getcwd() + "/backend_api/data/youtube_playlists"

DATA_ENDPOINT_URL = "https://www.googleapis.com/youtube/v3/playlistItems?playlistId={}&key=AIzaSyAC-vA8irZClKOO8zVMv4wyF3URfTe6HMA&part=snippet,id&order=date&maxResults=20"

DATA_ENDPOINTS = [
    {
        "playlistId": "PLaaEeFtNlIJ1QCSWkBvxItbKYEpGENASC",
        "output": "ufcData"
    },
    {
        "playlistId": "PLaaEeFtNlIJ2Yigy4wHCQlcuRZg4NKbi5",
        "output": "fightHighlightsData"
    },
    {
        "playlistId": "PLaaEeFtNlIJ2IZ3o2kE7jjZ0NZu8tP9YJ",
        "output": "bellatorData"
    },
]


class Command(BaseCommand):

    def handle(self, *args, **options):
        for endpoint in DATA_ENDPOINTS:
            response = requests.get(DATA_ENDPOINT_URL.format(endpoint["playlistId"]))
            payload = response.json()

            with open(f"{OUTFILE_LOCATION}/{endpoint['output']}.json", 'w', encoding='utf8') as json_file:
                json_file.write(
                    json.dumps(payload, indent=4, ensure_ascii=False)
                )

            print(f"successfully prepped {endpoint['output']}.json")