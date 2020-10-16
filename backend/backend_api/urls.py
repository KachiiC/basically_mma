from django.urls import path
from .views import mma_news_views
from .views import mma_playlist_views
from .views.mma_playlist_views import all_mma_videos, all_mma_playlist

urlpatterns = [
    # MMA News
    path('mma_news/', mma_news_views.news_list, name="mma_news"),
    path('mma_news/<int:pk>', mma_news_views.news_list_detail, name="mma_article"),
    # MMA Videos
    path('mma_videos', mma_playlist_views.all_mma_videos, name="all-videos"),
    path('mma_playlist/', mma_playlist_views.all_mma_playlist, name="playlist-detail")
]
