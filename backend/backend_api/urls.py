from django.urls import path
from .views import mma_news_views
from .views import mma_videos_views

urlpatterns = [
    path('news_list/', mma_news_views.news_list),  # MMA News
    path('highlights_playlist/', mma_videos_views.highlights_playlist),
    path('ufc_playlist/', mma_videos_views.ufc_playlist),
    path('bellator_list/', mma_videos_views.bellator_playlist),
]
