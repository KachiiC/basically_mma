from django.contrib import admin
# Models
from .models.mma_news_model import *
from .models.mma_videos_model import *

admin.site.register(MMANews)
admin.site.register(UFCVideos)
admin.site.register(BellatorVideos)
admin.site.register(FightHighlights)
