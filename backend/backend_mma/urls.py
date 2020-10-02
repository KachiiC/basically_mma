from django.urls import path
from .views import dictionary_views
from .views.dictionary_views import *

urlpatterns = [
    # MMA Dictionary
    path('dictionary_list/', dictionary_views.dictionary_list),
    path('dictionary_list/<int:pk>', dictionary_views.dictionary_detail),
]