from django.urls import path
from .views import mma_news_views
from .views import mma_videos_views

urlpatterns = [
    # MMA News
    path('mma_news/', mma_news_views.news_list, name="mma_news"),
    path('mma_news/<int:pk>', mma_news_views.news_list_detail, name="mma_article"),
    # MMA Videos
    path('ufc_playlist/', mma_videos_views.ufc_playlist, name="ufc_playlist"),
    path('bellator_playlist/', mma_videos_views.bellator_playlist, name="bellator_playlist"),
    path('highlights_playlist/', mma_videos_views.highlights_playlist, name="highlights_playlist"),
    # MMA Videos Detail
    path('ufc_playlist/<int:pk>', mma_videos_views.ufc_playlist_detail),
    path('bellator_playlist/<int:pk>', mma_videos_views.bellator_playlist_detail),
    path('highlights_playlist/<int:pk>', mma_videos_views.highlights_playlist_detail),
]
