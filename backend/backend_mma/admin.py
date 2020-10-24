from django.contrib import admin
from .models.legends_model import Legend
from .models.dictionary_model import Dictionary
from .models.techniques_model import Technique
from .models.best_of_mma_model import *

admin.site.register(Dictionary)
admin.site.register(Technique)
admin.site.register(Legend)
admin.site.register(Champions)
admin.site.register(BestOfFights)
admin.site.register(BestOfType)