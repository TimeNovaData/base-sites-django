from django.contrib import admin

from ..models import Menu
from novadata_utils.admin import NovadataModelAdmin
from .item_menu_inline import ItemMenuInline


@admin.register(Menu)
class MenuAdmin(NovadataModelAdmin):
    auto_search_fields = True

    inlines = [ItemMenuInline]

    # list_filter = [
    #     'campos_fk_e_booleanos
    # ]

    # list_select_related = [
    #     'campos_dos_campos_fk
    # ]

    # autocomplete_fields = [
    #     'campos_fk
    # ]
