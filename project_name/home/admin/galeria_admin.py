from django.contrib import admin

from ..models import Galeria


@admin.register(Galeria)
class GaleriaAdmin(admin.ModelAdmin):
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
