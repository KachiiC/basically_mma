from django.urls import path
# Views
from .views import dictionary_views
from .views import techniques_views

urlpatterns = [
    # Basics
    # MMA Dictionary
    path('dictionary_list/', dictionary_views.dictionary_list, name="dictionary_list"),
    path('dictionary_list/<int:pk>', dictionary_views.dictionary_detail, name="dictionary_word"),
    # Advanced
    # MMA Techniques
    path('techniques_list/', techniques_views.techniques_list, name="techniques_list"),
    path('techniques_list/<int:pk>', techniques_views.techniques_detail, name="techniques_item"),
]