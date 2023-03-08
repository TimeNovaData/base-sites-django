from django.contrib import admin

from ..models import Servico
from novadata_utils.admin import NovadataModelAdmin


@admin.register(Servico)
class ServicoAdmin(NovadataModelAdmin):
    list_display = [
        'id',
        'titulo'
    ]

    search_fields = [
        'id',
        'titulo'
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
