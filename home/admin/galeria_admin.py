from django.contrib import admin

from ..models import Galeria


@admin.register(Galeria)
class GaleriaAdmin(admin.ModelAdmin):
    list_display = ["id", "titulo", "image_view"]

    search_fields = ["id", "titulo"]

    readonly_fields = [
        "image_view",
    ]

    def image_view(self, obj):
        return obj.image_view

    image_view.short_description = "Imagem"
    image_view.allow_tags = True

    # list_filter = [
    #     'campos_fk_e_booleanos
    # ]

    # list_select_related = [
    #     'campos_dos_campos_fk
    # ]

    # autocomplete_fields = [
    #     'campos_fk
    # ]
