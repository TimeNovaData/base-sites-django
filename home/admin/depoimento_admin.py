from django.contrib import admin
from ..models import Depoimento
from novadata_utils.admin import NovadataModelAdmin


@admin.register(Depoimento)
class DepoimentoAdmin(NovadataModelAdmin):
    search_fields = ["id", "nome"]
