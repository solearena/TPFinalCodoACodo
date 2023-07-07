from django.contrib import admin
from .models import Consulta

# Register your models here.

# admin.site.register(Consulta)

@admin.register(Consulta)
class ConsultaAdmin(admin.ModelAdmin):
  ...
