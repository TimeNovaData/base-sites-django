from django.contrib import admin
from novadata_utils.admin import NovadataModelAdmin

from ..models import Artigo


@admin.register(Artigo)
class ArtigoAdmin(NovadataModelAdmin):
    list_display = [
        "id",
        "titulo",
    ]

    search_fields = ["titulo"]

    readonly_fields = [
        "data_criacao",
        "data_atualizacao",
        "usuario_criacao",
        "usuario_atualizacao",
    ]

    def get_list_filter(self, request):
        return []

    fieldsets = [
        (
            "Dados Principais",
            {
                "fields": (
                    "titulo",
                    "imagem_capa",
                    "resumo",
                    "link_externo",
                    "usuario",
                    "data",
                    "ordem",
                )
            },
        ),
        (
            "Dados Cadastrais",
            {
                "fields": (
                    "data_criacao",
                    "data_atualizacao",
                    "usuario_criacao",
                    "usuario_atualizacao",
                )
            },
        ),
    ]
