from django.contrib import admin
from ..models import Site
from novadata_utils.admin import NovadataModelAdmin


@admin.register(Site)
class SiteAdmin(NovadataModelAdmin):
    list_display = [
        'id',
        'titulo_global'
    ]

    search_fields = [
        'id',
        'titulo_global'
    ]

    # list_filter = [
    #     'campos_fk_e_booleanos
    # ]

    # list_select_related = [
    #     'campos_dos_campos_fk
    # ]

    # autocomplete_fields = [
    #     'campos_fk
    # ]
