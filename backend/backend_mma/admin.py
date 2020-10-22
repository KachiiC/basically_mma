from django.contrib import admin
from .models.legends_model import Legend
from .models.dictionary_model import Dictionary
from .models.techniques_model import Technique

admin.site.register(Dictionary)
admin.site.register(Technique)
admin.site.register(Legend)
