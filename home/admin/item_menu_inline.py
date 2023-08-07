from django.contrib import admin

from ..models import ItemMenu


class ItemMenuInline(admin.TabularInline):
    model = ItemMenu

    extra = 0
