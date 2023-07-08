from django.contrib import admin

from ..models import Manutencao
from novadata_utils.admin import NovadataModelAdmin


@admin.register(Manutencao)
class ManutencaoAdmin(NovadataModelAdmin):
    search_fields = [
        'id',
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
