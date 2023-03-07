from django.contrib import admin

from ..models import ItemMenu


class ItemMenuInline(admin.StackedInline):
    model = ItemMenu

    extra = 0
