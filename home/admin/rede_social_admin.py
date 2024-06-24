from django.contrib import admin
from novadata_utils.admin import NovadataModelAdmin

from ..models import RedeSocial


@admin.register(RedeSocial)
class RedeSocialAdmin(NovadataModelAdmin):
    list_display = [
        'id',
        'nome',
        'link',
        'ordem',
    ]

    list_filter = [
        'nome'
    ]
