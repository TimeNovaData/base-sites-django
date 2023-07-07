from django.contrib import admin

from ..models import Termo
from .aceite_termo_inline import AceiteTermoInline
from novadata_utils.admin import NovadataModelAdmin


@admin.register(Termo)
class TermoAdmin(NovadataModelAdmin):
    search_fields = [
        'id',
        'campos_importantes'
    ]
    
    inlines = [
        AceiteTermoInline
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
