from django.contrib import admin

from ..models import ItemMenu


class ItemMenuInline(admin.TabularInline):
    model = ItemMenu

    extra = 0

    readonly_fields = [
        "data_criacao",
        "data_atualizacao",
        "usuario_criacao",
        "usuario_atualizacao",
    ]
