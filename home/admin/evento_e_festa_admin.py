from django.contrib import admin
from novadata_utils.admin import NovadataModelAdmin

from ..models import EventoEFesta


@admin.register(EventoEFesta)
class EventoEFestaAdmin(NovadataModelAdmin):
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
                    "imagem",
                    "descricao",
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
