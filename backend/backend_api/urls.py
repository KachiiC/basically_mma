from django.urls import path
# MMA News
from .views import mma_news_views
from .views import mma_playlist_views
from .views import mma_videos_views
from .views.mma_videos_views import mma_videos_single, mma_videos_all
from .views.mma_playlist_views import mma_playlist, mma_playlist_all

urlpatterns = [
    # MMA News
    path('mma_news/', mma_news_views.news_list, name="mma_news"),
    path('mma_news/<int:pk>', mma_news_views.news_list_detail, name="mma_article"),
    # MMA Videos
    path('mma_videos/', mma_videos_views.mma_videos_all, name="mma_videos"),
    path('mma_videos/<int:pk>', mma_videos_views.mma_videos_single, name="mma_videos_single"),
    # MMA Playlists
    path('mma_playlist/', mma_playlist_views.mma_playlist_all, name="mma_playlist"),
    path('mma_playlist/<str:playlist_id>', mma_playlist_views.mma_playlist, name="mma_playlist_single")
]
