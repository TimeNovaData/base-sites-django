from django.contrib import admin

from ..models import Portifolio
from novadata_utils.admin import NovadataModelAdmin


@admin.register(Portifolio)
class PortifolioAdmin(NovadataModelAdmin):
    list_display = [
        'id',
        'nome'
    ]

    search_fields = [
        'id',
        'nome'
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
