from django.contrib import admin
from novadata_utils.admin import NovadataModelAdmin

from ..models import RedeSocial


@admin.register(RedeSocial)
class RedeSocialAdmin(NovadataModelAdmin):
    list_display = [
        "id",
        "nome",
        "link",
        "ordem",
    ]

    list_filter = [
        "nome",
    ]

    readonly_fields = [
        "data_criacao",
        "data_atualizacao",
        "usuario_criacao",
        "usuario_atualizacao",
    ]

    fieldsets = (
        (
            "Dados Principais",
            {
                "fields": (
                    "nome",
                    "icone_svg",
                    "link",
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
    )
