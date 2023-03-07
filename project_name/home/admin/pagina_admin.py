from django.contrib import admin

from ..models import Pagina


@admin.register(Pagina)
class PaginaAdmin(admin.ModelAdmin):
    list_display = [
        'id',
        'titulo',
        'slug'
    ]

    search_fields = [
        'id',
        'titulo',
        'slug'
    ]

    list_filter = [
        'indexavel'
    ]

    # list_select_related = [
    #     'campos_dos_campos_fk
    # ]

    # autocomplete_fields = [
    #     'indexavel'
    # ]
