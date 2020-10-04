from django.urls import path
from .views import mma_news_views
from .views import mma_videos_views

urlpatterns = [
    # MMA News
    path('mma_news/', mma_news_views.news_list),
    path('mma_news/<int:pk>', mma_news_views.news_list_detail),
    # MMA Videos
    path('ufc_playlist/', mma_videos_views.ufc_playlist),
    path('bellator_playlist/', mma_videos_views.bellator_playlist),
    path('highlights_playlist/', mma_videos_views.highlights_playlist),
    # MMA Videos Detail
    path('ufc_playlist/<int:pk>', mma_videos_views.ufc_playlist_detail),
    path('bellator_playlist/<int:pk>', mma_videos_views.bellator_playlist_detail),
    path('highlights_playlist/<int:pk>', mma_videos_views.highlights_playlist_detail),
]
