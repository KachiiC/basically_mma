from django.contrib import admin
from .models.dictionary_model import *
from .models.techniques_model import *

admin.site.register(Dictionary)
admin.site.register(Techniques)

