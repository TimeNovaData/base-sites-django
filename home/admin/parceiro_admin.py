from django.contrib import admin

from ..models import Parceiro
from novadata_utils.admin import NovadataModelAdmin


@admin.register(Parceiro)
class ParceiroAdmin(NovadataModelAdmin):
    list_display = ["id", "nome"]

    # search_fields = [
    #     'id',
    #     'titulo',
    #     'slug'
    # ]

    # list_filter = [
    #     'indexavel'
    # ]

    # list_select_related = [
    #     'campos_dos_campos_fk
    # ]

    # autocomplete_fields = [
    #     'indexavel'
    # ]
