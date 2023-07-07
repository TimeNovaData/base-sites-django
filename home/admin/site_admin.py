from django.contrib import admin
from ..models import Site
from novadata_utils.admin import NovadataModelAdmin


@admin.register(Site)
class SiteAdmin(NovadataModelAdmin):
    search_fields = [
        "id",
        "titulo_global",
    ]
