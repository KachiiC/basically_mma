from django.contrib import admin
# Models
from .models.mma_news_model import MMANews
from .models.mma_videos_and_playlists_model import MMAPlaylist, MMAVideo

admin.site.register(MMANews)
admin.site.register(MMAVideo)
admin.site.register(MMAPlaylist)