from django.contrib import admin

from ..models import Pagina
from novadata_utils.admin import NovadataModelAdmin


@admin.register(Pagina)
class PaginaAdmin(NovadataModelAdmin):
    list_display = [
        "id",
        "titulo",
        "slug",
    ]

    search_fields = [
        "id",
        "titulo",
        "slug",
    ]

    list_filter = [
        "indexavel",
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
                    "titulo",
                    "slug",
                    "arquivo_banner",
                    "thumbail_banner",
                    "template",
                    "custom_description",
                    "js_adicional",
                    "css_adicional",
                    "indexavel",
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

    # list_select_related = [
    #     'campos_dos_campos_fk
    # ]

    # autocomplete_fields = [
    #     'indexavel'
    # ]
