from django.contrib import admin
from .models.legends_model import Legend
from .models.dictionary_model import Dictionary
from .models.techniques_model import Technique
from .models.champions_model import Champion
from .models.best_of_mma_model import BestOfType, BestOfFight

admin.site.register(Dictionary)
admin.site.register(Technique)
admin.site.register(Legend)
admin.site.register(Champion)
admin.site.register(BestOfType)
admin.site.register(BestOfFight)
